#!/usr/bin/env python3
"""Extract questions from Moodle HTML test file and generate questions.js"""

import os
import re
import json
import urllib.parse
from bs4 import BeautifulSoup, NavigableString

FILES_DIR = "Test Vybaveni studia 2 cvicny 2_ Náhled pokusu _ E-LEARNING VUT_files"

def decode_img_src(src):
    """Decode URL-encoded image src and return just the filename"""
    decoded = urllib.parse.unquote(src)
    filename = os.path.basename(decoded)
    return filename

def img_media_path(src):
    """Convert image src to media/ path"""
    return f"media/{decode_img_src(src)}"

def clean_text(element):
    """Get clean text from a BeautifulSoup element"""
    if element is None:
        return ''
    # Work on a copy
    el = BeautifulSoup(str(element), 'html.parser')
    # Remove icon elements
    for icon in el.find_all('i', class_='icon'):
        icon.decompose()
    # Remove screen-reader-only elements
    for sr in el.find_all(class_='accesshide'):
        sr.decompose()
    for sr in el.find_all(class_='sr-only'):
        sr.decompose()
    # Remove answernumber spans
    for an in el.find_all('span', class_='answernumber'):
        an.decompose()
    # Insert space markers around block-level elements to preserve word boundaries
    for tag in el.find_all(['p', 'div', 'br', 'li', 'td', 'th', 'h1', 'h2', 'h3', 'h4']):
        tag.insert_before(' ')
        tag.insert_after(' ')
    # Use separator='' to avoid splitting inline words across elements
    text = el.get_text(separator='', strip=False)
    # Normalize whitespace
    text = re.sub(r'\s+', ' ', text).strip()
    text = text.replace('\xa0', ' ')
    text = re.sub(r'\s+', ' ', text).strip()
    # Fix missing spaces: add space before '[' when preceded by word char
    text = re.sub(r'(\w)(\[)', r'\1 \2', text)
    # Fix missing spaces: add space after ')' when followed by a letter
    text = re.sub(r'\)([a-záčďéěíňóřšťúůýžA-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ])', r') \1', text)
    return text

def get_qtype(q_div):
    classes = q_div.get('class', [])
    excluded = {'que', 'deferredfeedback', 'correct', 'incorrect', 'partiallycorrect', 'qtype_ddimageortext-readonly'}
    for c in classes:
        if c not in excluded:
            return c
    return 'unknown'

def parse_right_answer(q_div, qtype):
    """Parse the correct answer from rightanswer div"""
    ra = q_div.find('div', class_='rightanswer')
    if not ra:
        return None
    # For truefalse
    if qtype == 'truefalse':
        text = ra.get_text(strip=True)
        if "'Pravda'" in text:
            return 'Pravda'
        elif "'Nepravda'" in text:
            return 'Nepravda'
    # For multi-answer questions: "Správné odpovědi jsou:"
    ra_text = ra.get_text(separator='', strip=True)
    if ra_text.startswith('Správné odpovědi jsou:'):
        text = re.sub(r'^Správné odpovědi jsou:\s*', '', ra_text).strip()
        return text
    # For multichoice and others - clean text after the prefix
    text = clean_text(ra)
    # Remove "Správná odpověď je:" prefix and variants
    text = re.sub(r"^Správná odpověď je\s*'?", '', text)
    text = re.sub(r"^:", '', text).strip()
    text = text.rstrip("'").strip()
    # Remove trailing dot only if there's no decimal in the text (to preserve "3500" etc.)
    if text.endswith('.') and len(text) > 1 and not re.search(r'\d\.\d', text):
        text = text[:-1]
    return text.strip()

def get_qtext_images(qtext_div):
    """Get list of image paths from question text"""
    if not qtext_div:
        return []
    imgs = []
    for img in qtext_div.find_all('img'):
        src = img.get('src', '')
        if 'unflagged' in src or 'logo' in src:
            continue
        imgs.append(img_media_path(src))
    return imgs

def get_multichoice_options(q_div):
    """Extract text options from multichoice answer div"""
    answer_div = q_div.find('div', class_='answer')
    if not answer_div:
        return []
    options = []
    for opt in answer_div.find_all('div', recursive=False):
        classes = opt.get('class', [])
        if not any(c.startswith('r') and c[1:].isdigit() for c in classes):
            continue
        # Get the label text
        label_div = opt.find('div', class_='flex-fill')
        if label_div:
            text = clean_text(label_div)
            if text:
                options.append(text)
    return options

def get_correct_options_from_class(q_div):
    """Find ALL correct options by 'correct' class on option divs"""
    answer_div = q_div.find('div', class_='answer')
    if not answer_div:
        return []
    correct = []
    for opt in answer_div.find_all('div', recursive=False):
        classes = opt.get('class', [])
        if 'correct' in classes:
            label_div = opt.find('div', class_='flex-fill')
            if label_div:
                text = clean_text(label_div)
                if text:
                    correct.append(text)
    return correct

def get_multichoice_image_options(q_div):
    """Extract image options from multichoice answer div"""
    answer_div = q_div.find('div', class_='answer')
    if not answer_div:
        return []
    images = []
    for opt in answer_div.find_all('div', recursive=False):
        classes = opt.get('class', [])
        if not any(c.startswith('r') and c[1:].isdigit() for c in classes):
            continue
        img = opt.find('img')
        if img:
            src = img.get('src', '')
            if 'unflagged' not in src:
                images.append(img_media_path(src))
    return images

def get_correct_option_from_class(q_div, options):
    """Try to find correct option by 'correct' class on option div (single answer)"""
    correct_list = get_correct_options_from_class(q_div)
    return correct_list[0] if correct_list else None

def process_question(q_div):
    """Process a single question div and return dict or None"""
    qtype = get_qtype(q_div)
    qno_span = q_div.find('span', class_='qno')
    qno = int(qno_span.get_text(strip=True)) if qno_span else 0

    qtext_div = q_div.find('div', class_='qtext')
    question_text = clean_text(qtext_div) if qtext_div else ''

    q_obj = {}

    # ── TRUEFALSE ──
    if qtype == 'truefalse':
        answer = parse_right_answer(q_div, qtype)
        q_obj = {
            'question': question_text,
            'options': ['Pravda', 'Nepravda'],
            'answer': answer
        }

    # ── MULTICHOICE ──
    elif qtype == 'multichoice':
        qtext_imgs = get_qtext_images(qtext_div)

        # Check if answer options are images
        answer_div = q_div.find('div', class_='answer')
        has_img_options = False
        if answer_div:
            for opt in answer_div.find_all('div', recursive=False):
                classes = opt.get('class', [])
                if any(c.startswith('r') and c[1:].isdigit() for c in classes):
                    if opt.find('img'):
                        has_img_options = True
                        break

        if has_img_options:
            images = get_multichoice_image_options(q_div)
            # Get correct answer image
            correct_answer = None
            if answer_div:
                for opt in answer_div.find_all('div', recursive=False):
                    classes = opt.get('class', [])
                    if 'correct' in classes and opt.find('img'):
                        src = opt.find('img').get('src', '')
                        correct_answer = img_media_path(src)
                        break
            # Also try rightanswer for image
            if not correct_answer:
                ra = q_div.find('div', class_='rightanswer')
                if ra and ra.find('img'):
                    src = ra.find('img').get('src', '')
                    correct_answer = img_media_path(src)

            q_obj = {
                'question': question_text,
                'images': images,
                'answer': correct_answer
            }
            if qtext_imgs:
                q_obj['questionImage'] = qtext_imgs[0]
                if len(qtext_imgs) > 1:
                    q_obj['image'] = qtext_imgs[1]
        else:
            options = get_multichoice_options(q_div)

            # Check for multi-select: multiple correct options
            correct_list = get_correct_options_from_class(q_div)
            if len(correct_list) > 1:
                # Multi-select: use rightanswer as the authoritative correct answer
                ra_text = parse_right_answer(q_div, qtype)
                # The ra_text is e.g. "hudba,rytmus,tvořivost,fantazie"
                if ra_text:
                    # Normalize: add spaces after commas
                    combined_correct = re.sub(r',\s*', ', ', ra_text).strip().rstrip('.')
                else:
                    combined_correct = ', '.join(correct_list)
                # Get all options to build distractors
                all_options = get_multichoice_options(q_div)
                wrong_opts = [o for o in all_options if o not in correct_list]
                # Build wrong combinations
                distractor_opts = []
                if wrong_opts and len(wrong_opts) >= 2:
                    distractor_opts.append(', '.join(wrong_opts[:2]))
                if correct_list and wrong_opts:
                    distractor_opts.append(correct_list[0] + ', ' + wrong_opts[0])
                if len(correct_list) >= 2:
                    distractor_opts.append(', '.join(correct_list[:2]))

                all_choice_options = [combined_correct] + distractor_opts[:3]
                q_obj = {
                    'question': question_text + ' (vyber všechny správné odpovědi)',
                    'options': all_choice_options,
                    'answer': combined_correct
                }
            else:
                # Single correct answer
                # Primary: detect via 'correct' class
                answer = correct_list[0] if correct_list else None
                if not answer:
                    # Fallback: parse rightanswer text and match to option
                    ra_answer = parse_right_answer(q_div, qtype)
                    if ra_answer and options:
                        # Try substring match
                        for opt in options:
                            clean_ra = re.sub(r'\s+', ' ', ra_answer).strip()
                            clean_opt = re.sub(r'\s+', ' ', opt).strip()
                            if (clean_ra in clean_opt or clean_opt in clean_ra or
                                    clean_ra.rstrip('.') == clean_opt.rstrip('.')):
                                answer = opt
                                break
                        if not answer:
                            answer = ra_answer

                q_obj = {
                    'question': question_text,
                    'options': options,
                    'answer': answer
                }
            if qtext_imgs:
                q_obj['questionImage'] = qtext_imgs[0]
                if len(qtext_imgs) > 1:
                    q_obj['image'] = qtext_imgs[1]

    # ── DDWTOS (Drag & Drop Words into Text) ──
    elif qtype == 'ddwtos':
        # Q31: "Spektrální šikmost měří ______ kolem těžiště."
        # Rightanswer format: "Spektrální šikmost měří  [[[1]] symetrii] kolem těžiště."
        ra = q_div.find('div', class_='rightanswer')
        right_text = ra.get_text(separator='', strip=True) if ra else ''
        # Extract the correct fill: text after [[n]] inside outer brackets
        fill_match = re.search(r'\[\[\[\d+\]\]\s*([^\]]+)\]', right_text)
        correct_fill = fill_match.group(1).strip() if fill_match else 'symetrii'

        # Build question with blank placeholder
        question_with_blank = re.sub(r'\[\[.*?\]\].*?(?=\s*kolem|\s*$)', '______', question_text)
        if '______' not in question_with_blank:
            # Try removing the wrong word that was placed
            question_with_blank = re.sub(r'\[\[2\]\].*?(?=kolem)', '______ ', question_text)
        if '______' not in question_with_blank:
            question_with_blank = question_text
        # Clean up extra spaces around blank
        question_with_blank = re.sub(r'\s+______\s+', ' ______ ', question_with_blank).strip()

        q_obj = {
            'question': question_with_blank,
            'options': [
                correct_fill,
                'frekvenční hustotu',
                'střední hodnotu spektra',
                'varianci spektra'
            ],
            'answer': correct_fill
        }

    # ── NUMERICAL ──
    elif qtype == 'numerical':
        answer_text = parse_right_answer(q_div, qtype)
        try:
            num = float(answer_text)
        except (ValueError, TypeError):
            num = 3500
        # Build plausible options
        options = [str(int(num)), '500', '1000', '8000']
        # Make sure no duplicates and correct is included
        correct = str(int(num))
        if correct not in options:
            options[0] = correct
        # Remove duplicates while preserving order
        seen = set()
        unique_opts = []
        for o in options:
            if o not in seen:
                seen.add(o)
                unique_opts.append(o)
        q_obj = {
            'question': question_text,
            'options': unique_opts,
            'answer': correct
        }

    # ── SHORTANSWER ──
    elif qtype == 'shortanswer':
        answer_text = parse_right_answer(q_div, qtype)
        q_obj = {
            'question': question_text,
            'options': [
                answer_text,
                'kmitočtovém',
                'frekvenčním',
                'harmonickém'
            ],
            'answer': answer_text
        }

    # ── MATCH ──
    elif qtype == 'match':
        qtext_imgs = get_qtext_images(qtext_div)
        ra = q_div.find('div', class_='rightanswer')
        right_text = clean_text(ra) if ra else ''
        # Remove "Správná odpověď je:" prefix
        right_text = re.sub(r'^Správná odpověď je\s*:?\s*', '', right_text).strip()

        # Q59 (FM modulace formula) and Q101 (Cortiho orgán)
        # Convert match to multichoice with the correct answer being the full mapping
        rows = q_div.find_all('tr')
        if rows and not right_text:
            # Try to build from rows
            right_text = 'Viz obrázek'

        # For Q59: čitatel → Δf, jmenovatel → 𝒇𝒎
        # For Q101: 3 → tectoriální membrána, 17 → vlákna sluchového nervu, 5 → vláskové buňky
        if right_text:
            correct_answer = right_text
        else:
            correct_answer = 'Viz obrázek'

        # Generate plausible wrong options based on context
        # For Q59 (FM modulace)
        if qtext_imgs and 'image' in qtext_imgs[0]:
            options = [
                'čitatel → Δf, jmenovatel → fm',
                'čitatel → fm, jmenovatel → Δf',
                'čitatel → Um, jmenovatel → R',
                'čitatel → I, jmenovatel → π'
            ]
            correct_answer = 'čitatel → Δf, jmenovatel → fm'
        elif qtext_imgs and 'Corti' in qtext_imgs[0]:
            options = [
                '3 → tectoriální membrána, 17 → vlákna sluchového nervu, 5 → vláskové buňky',
                '3 → vláskové buňky, 17 → tectoriální membrána, 5 → vlákna sluchového nervu',
                '3 → basilární membrána, 17 → vláskové buňky, 5 → endolymfa',
                '3 → endolymfa, 17 → basilární membrána, 5 → tectoriální membrána'
            ]
            correct_answer = '3 → tectoriální membrána, 17 → vlákna sluchového nervu, 5 → vláskové buňky'
        else:
            options = [correct_answer, 'Jiná kombinace A', 'Jiná kombinace B', 'Jiná kombinace C']

        q_obj = {
            'question': question_text,
            'options': options,
            'answer': correct_answer
        }
        if qtext_imgs:
            q_obj['questionImage'] = qtext_imgs[0]

    # ── ORDERING ──
    elif qtype == 'ordering':
        # Q74: Seřaď mikrofonní charakteristiky
        # Correct order: koule → osmička → ledvina → úzká směrovost
        items_els = q_div.find_all('li', id=lambda x: x and x.startswith('ordering_item_'))
        items = []
        for li in items_els:
            text_div = li.find('div', class_='d-flex')
            if text_div:
                # Remove icons
                for icon in text_div.find_all('i'):
                    icon.decompose()
                t = text_div.get_text(strip=True)
                if t:
                    items.append(t)
        correct_order = ' → '.join(items) if items else 'koule → osmička → ledvina → úzká směrovost'
        # Generate wrong orders
        wrong1 = ' → '.join(reversed(items)) if items else 'úzká směrovost → ledvina → osmička → koule'
        wrong2 = items[1] + ' → ' + items[0] + ' → ' + ' → '.join(items[2:]) if len(items) >= 2 else 'osmička → koule → ledvina → úzká směrovost'
        wrong3 = items[2] + ' → ' + items[0] + ' → ' + items[1] + ' → ' + items[3] if len(items) >= 4 else 'ledvina → osmička → koule → úzká směrovost'
        q_obj = {
            'question': question_text + ' (seřaď od nejvíce po nejméně)',
            'options': [correct_order, wrong1, wrong2, wrong3],
            'answer': correct_order
        }

    # ── DDIMAGEORTEXT ──
    elif qtype == 'ddimageortext':
        # Q100: Place μ1 and μ2 in the correct positions in the formula
        qtext_imgs = get_qtext_images(qtext_div)
        # Background image is šikmost.jpg
        bg_img = None
        ddarea = q_div.find('div', class_='ddarea')
        if ddarea:
            bg = ddarea.find('img', class_='dropbackground')
            if bg:
                bg_img = img_media_path(bg.get('src', ''))

        q_obj = {
            'question': question_text + ' (μ₁ = spektrální těžiště, μ₂ = spektrální rozpětí)',
            'options': [
                'μ₁ do čitatele, μ₂ do jmenovatele',
                'μ₂ do čitatele, μ₁ do jmenovatele',
                'μ₁ do jmenovatele, μ₂ do čitatele (stejné)',
                'Obě veličiny μ₁ i μ₂ do čitatele'
            ],
            'answer': 'μ₁ do čitatele, μ₂ do jmenovatele'
        }
        if bg_img:
            q_obj['questionImage'] = bg_img
        elif qtext_imgs:
            q_obj['questionImage'] = qtext_imgs[0]

    else:
        # Unknown type - skip
        print(f"WARNING: Unknown question type '{qtype}' for Q{qno}, skipping")
        return None

    # Validate
    if not q_obj.get('question') and not q_obj.get('questionImage'):
        print(f"WARNING: Q{qno} has no question text and no image, skipping")
        return None

    return q_obj


def escape_js_string(s):
    """Escape a string for use in JavaScript"""
    if s is None:
        return 'null'
    s = s.replace('\\', '\\\\')
    s = s.replace('"', '\\"')
    s = s.replace('\n', ' ')
    s = s.replace('\r', '')
    return s


def format_js_question(q):
    """Format a question dict as JavaScript object string"""
    lines = ['    {']
    lines.append(f'        question: "{escape_js_string(q.get("question", ""))}",')

    if 'questionImage' in q:
        lines.append(f'        questionImage: "{escape_js_string(q["questionImage"])}",')
    if 'image' in q:
        lines.append(f'        image: "{escape_js_string(q["image"])}",')
    if 'audio' in q:
        lines.append(f'        audio: "{escape_js_string(q["audio"])}",')

    if 'images' in q:
        imgs_str = ', '.join(f'"{escape_js_string(i)}"' for i in q['images'])
        lines.append(f'        images: [{imgs_str}],')
    elif 'options' in q:
        opts_str = ', '.join(f'"{escape_js_string(o)}"' for o in q['options'])
        lines.append(f'        options: [{opts_str}],')

    lines.append(f'        answer: "{escape_js_string(q.get("answer", ""))}"')
    lines.append('    }')
    return '\n'.join(lines)


def main():
    with open('Test Vybaveni studia 2 cvicny 2_ Náhled pokusu _ E-LEARNING VUT.html', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')

    questions_divs = soup.find_all('div', class_='que')
    print(f"Found {len(questions_divs)} question divs")

    all_questions = []
    for q_div in questions_divs:
        qno = q_div.find('span', class_='qno')
        qno_text = qno.get_text(strip=True) if qno else '?'
        qtype = get_qtype(q_div)

        q_obj = process_question(q_div)
        if q_obj:
            print(f"Q{qno_text} ({qtype}): OK")
            all_questions.append(q_obj)
        else:
            print(f"Q{qno_text} ({qtype}): SKIPPED")

    print(f"\nTotal questions processed: {len(all_questions)}")

    # Generate questions.js
    js_lines = ['const questions = [']
    question_strs = [format_js_question(q) for q in all_questions]
    js_lines.append(',\n'.join(question_strs))
    js_lines.append('];')

    output = '\n'.join(js_lines)

    with open('questions.js', 'w', encoding='utf-8') as f:
        f.write(output)

    print(f"\nWritten to questions.js ({len(all_questions)} questions)")


if __name__ == '__main__':
    main()
