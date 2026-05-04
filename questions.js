const questions = [
    {
        question: "Subbasy vnímáme až o 70 dB slaběji, než jakou mají ve skutečnosti úroveň.",
        options: ["Pravda", "Nepravda"],
        answer: "Pravda"
    },
    {
        question: "Ozubené kolečko s větším průměrem otáčející se na stejné ose a stejnou rychlostí jako kolečko s průměrem menším bude generovat",
        options: ["nižší tón", "vyšší tón"],
        answer: "vyšší tón"
    },
    {
        question: "Hlavním úkolem tlakového mikrofonu typu PZM je:",
        options: ["Omezit odrazy přicházející s fázovým zpožděním a eliminovat tak hřebenový filtr.", "Snížit zkreslení, které nastane při vyšším tlaku.", "Posílit presenci."],
        answer: "Omezit odrazy přicházející s fázovým zpožděním a eliminovat tak hřebenový filtr."
    },
    {
        question: "Jakou jednotkou vyjadřujeme psychoakustickou kategorii ostrost?",
        options: ["dura", "vacil", "asper", "acum"],
        answer: "acum"
    },
    {
        question: "Jedná se o vzorec spektrální šikmosti nebo spektrální špičatosti?",
        options: ["Šikmosti", "Špičatosti"],
        answer: "Špičatosti"
    },
    {
        question: "Leslie box vytváří efekt zvaný",
        options: ["distortion", "rotace", "komprese"],
        answer: "rotace"
    },
    {
        question: "V dynamickém pásmu od -14 do - 34 dB budou vrcholy vlny",
        questionImage: "media/boobster.png",
        options: ["limitovány, a tím dojde ke změnám v jejich tvarech ne však barvě", "stlačeny, a tím dojde ke změnám v jejich tvarech i barvě", "posíleny, a tím dojde ke změnám v tvarech vln", "stlačeny, a tím dojde k jejich zesílení beze změn v jejich tvaru"],
        answer: "stlačeny, a tím dojde ke změnám v jejich tvarech i barvě"
    },
    {
        question: "Citlivost mikrofonu měříme v",
        options: ["dB", "Pa", "A", "mV"],
        answer: "mV"
    },
    {
        question: "Plochost spektra se vypočítá vydělením geometrického průměru výkonového spektra aritmetickým průměrem výkonového spektra",
        options: ["Pravda", "Nepravda"],
        answer: "Pravda"
    },
    {
        question: "Dura je",
        options: ["jednotka pro průměrnou délku skladby", "jednotka pro subjektivní dobu trvání", "jednotka, za kterou odpadne zahlcení zvukovodu tlakem nad 90 dB"],
        answer: "jednotka pro subjektivní dobu trvání"
    },
    {
        question: "Drsnost rozeznáváme v rozmezí",
        options: ["od 15 Hz do 300 Hz", "od 1 do 3,5 kHz", "od 70 do 500 Hz"],
        answer: "od 15 Hz do 300 Hz"
    },
    {
        question: "Nízká spektrální plochost naznačuje rovnoměrné rozložení energie, zatímco vysoká spektrální plochost naznačuje koncentrovanou energii ve specifických oblastech.",
        options: ["Pravda", "Nepravda"],
        answer: "Nepravda"
    },
    {
        question: "Mikrofon typu Ribbon",
        options: ["je vždy všesměrový", "mívá temnější barvu jak mikrofon kondenzátorový", "mívá ostřejší barvu jak mikrofon kondenzátorový"],
        answer: "mívá temnější barvu jak mikrofon kondenzátorový"
    },
    {
        question: "Wernickovo centrum leží v temenním laloku.",
        options: ["Pravda", "Nepravda"],
        answer: "Nepravda"
    },
    {
        question: "Doplň chybějící parametry u mikrofonní párové techniky ORTF",
        questionImage: "media/ORTF.jpg",
        options: ["25 cm, 90°", "17 cm, 110°", "45 cm, 135°"],
        answer: "17 cm, 110°"
    },
    {
        question: "Tak testy ukázaly, že do 1000 Hz (od konce dvoučárkované oktávy) vnímáme výškovou změnu už v rámci 2-3 Hz, např. v pásmech kolem 7 kHz (kolem a5)) k rozeznání výšky pak potřebujeme změnu až 35 Hz.",
        options: ["Pravda", "Nepravda"],
        answer: "Pravda"
    },
    {
        question: "Jedná se výpočet",
        questionImage: "media/flux.jpg",
        options: ["Spektrálního toku (flux)", "Těžiště spektra (spectral centroid)", "Rozpětí spektra (spectral spead)"],
        answer: "Spektrálního toku (flux)"
    },
    {
        question: "Výpočet LPC (Linear Predictive Coding) probíhá pomocí",
        options: ["integrálu", "konvoluce", "autokorelace"],
        answer: "autokorelace"
    },
    {
        question: "Vyšší spektrální hřeben (spectralCrest) indikuje nižší tonalitu, zatímco vyšší spektrální hřeben znamená více šumu.",
        options: ["Pravda", "Nepravda"],
        answer: "Nepravda"
    },
    {
        question: "Fungování obvodu: při kladné půlvlně nosného signálu na sekundárním vinutí transformátoru TR1 se otevřou diody D1 a D4, při záporné půlvlně se otevřou diody D2 a D3. Platí pro",
        options: ["subtraktivní modulaci", "vektorovou modulaci", "křížovou modulaci", "kruhovou modulaci"],
        answer: "kruhovou modulaci"
    },
    {
        question: "V případě frekvenční modulace se kmitočet složek v postranním pásmu vypočte vzorcem",
        options: ["f = f<sub>c</sub> – f<sub>m</sub>", "f = f<sub>m</sub> – Ω", "f = f<sub>m</sub> – f<sub>c</sub>"],
        answer: "f = f<sub>c</sub> – f<sub>m</sub>"
    },
    {
        question: "Vyber správnou odpověď:",
        options: ["Hladina hlasitosti 1 fónu je při frekvenci 1 kHz stejně velká jako jednotka hladiny zvuku 1 dB. Níže a výše ve spektru se už hladiny v dB a fónech rozcházejí.", "Hladina hlasitosti 1000 fónu je při frekvenci 1 kHz stejně velká jako jednotka hladiny zvuku 1 dB. Níže a výše ve spektru se už hladiny v dB a fónech nijak nerozcházejí.", "Hladina hlasitosti 1 fónu je při frekvenci 1 kHz stejně velká jako jednotka hladiny zvuku 1 dB. Níže a výše ve spektru se už hladiny v dB a fónech nijak nerozcházejí."],
        answer: "Hladina hlasitosti 1 fónu je při frekvenci 1 kHz stejně velká jako jednotka hladiny zvuku 1 dB. Níže a výše ve spektru se už hladiny v dB a fónech rozcházejí."
    },
    {
        question: "General MIDI je",
        options: ["standard definující rozmístění zvuků v programech i to, jak má nástroj reagovat na MIDI kontroléry a jejich povely", "databanka speciálně nasamplovaných nástrojů", "General Standard firmy Roland a eXtended firmy Yamaha"],
        answer: "standard definující rozmístění zvuků v programech i to, jak má nástroj reagovat na MIDI kontroléry a jejich povely"
    },
    {
        question: "Rychlá vlna vyvolaná vysokým tónem vyrovná svou rychlost v hlemýždi ve vnitřním uchu:",
        options: ["na konci hlemýždě", "hned na vstupu – základně", "ve středu hlemýždě"],
        answer: "hned na vstupu – základně"
    },
    {
        question: "Spojením těchto dvou směrových charakteristik o stejné citlivosti vznikne charakteristika",
        questionImage: "media/5a.jpg",
        images: ["media/5c.jpg", "media/5b.jpg", "media/5d.jpg"],
        answer: "media/5c.jpg"
    },
    {
        question: "Son vychází z techniky půlení a dvojnásobení škály subjektivního vjemu, tedy subjektivně vnímané hlasitosti, která je změřena na referenčním sinusovém tónu o výšce 1000 Hz.",
        options: ["Pravda", "Nepravda"],
        answer: "Pravda"
    },
    {
        question: "Dynamický mikrofon má vyšší citlivost než mikrofon kapacitní.",
        options: ["Pravda", "Nepravda"],
        answer: "Nepravda"
    },
    {
        question: "Všechny mikrofony kromě bidirekcionálních pracují jako převodníky gradientu tlaku, s přibližováním ke zdroji signálu zesilují střední kmitočty – tzv. proximity efekt.",
        options: ["Pravda", "Nepravda"],
        answer: "Nepravda"
    },
    {
        question: "Při tradičním evropském rozsazení symfonického orchestru se žestě nacházejí za violami, violoncelly a kontrabasy.",
        options: ["Pravda", "Nepravda"],
        answer: "Pravda"
    },
    {
        question: "Při párové mikrofonní technice ORTF užíváme mikrofony se směrovou charakteristikou",
        options: ["hyperkardoidní", "ledvinovou", "kulovou"],
        answer: "ledvinovou"
    },
    {
        question: "Spektrální šikmost měří ______ kolem těžiště.",
        options: ["symetrii", "frekvenční hustotu", "střední hodnotu spektra", "varianci spektra"],
        answer: "symetrii"
    },
    {
        question: "Spectral Rolloff Point označuje",
        options: ["bod poklesu [Hz], od kterého koeficienty spektrálních složek klesají", "sklon spektra [%]"],
        answer: "bod poklesu [Hz], od kterého koeficienty spektrálních složek klesají"
    },
    {
        question: "Jednotkou drsnosti je",
        options: ["asper", "dura", "acum"],
        answer: "asper"
    },
    {
        question: "Úhlový kmitočet je změna fáze v čase.",
        options: ["Pravda", "Nepravda"],
        answer: "Pravda"
    },
    {
        question: "Impulzy v délce nad 100 ms subjektivně vnímáme jako odpovídající skutečnosti, impulzy v délce pod 100 ms subjektivně vnímáme jako signál delší.",
        options: ["Pravda", "Nepravda"],
        answer: "Pravda"
    },
    {
        question: "Vyber správnou odpověď:",
        options: ["Cortiho orgán obsahuje vlásenky", "Cortiho orgán neobsahuje vlásenky"],
        answer: "Cortiho orgán obsahuje vlásenky"
    },
    {
        question: "Zkratka SNR v případě mikrofonu znamená",
        options: ["jaký průměr má kapsle mikrofonu", "jak vysoký má mikrofon vlastní šumový ekvivalent", "jaký má mikrofon odstup užitečného signálu od šumu"],
        answer: "jaký má mikrofon odstup užitečného signálu od šumu"
    },
    {
        question: "Při aditivní syntéze je použit tzv. multiplikativní přístup.",
        options: ["Pravda", "Nepravda"],
        answer: "Nepravda"
    },
    {
        question: "Které dispozice jsou spojené s pravou mozkovou hemisférou? (vyber všechny správné odpovědi)",
        type: "multiselect",
        options: ["tvořivost", "rytmus", "hudba", "analytické myšlení", "fakta", "logika", "fantazie", "čísla"],
        correctAnswers: ["tvořivost", "rytmus", "hudba", "fantazie"]
    },
    {
        question: "Rozsazení nástrojů na obrázku platí nejvíce pro",
        questionImage: "media/jazz band.jpg",
        options: ["žesťový komorní orchestr s rytmickou sekcí", "free jazz", "tradiční jazzband", "žesťové noneto"],
        answer: "tradiční jazzband"
    },
    {
        question: "Spektrální špičatost (Spectral Kurtosis) měří negaussovství spektra kolem jeho těžiště.",
        options: ["Pravda", "Nepravda"],
        answer: "Pravda"
    },
    {
        question: "Při snímání saxofonů v tradičním rozsazení jazzové sekce",
        options: ["do signálu saxofonů \"prosáknou\" i trubky", "do signálu saxofonů \"prosáknou\" trombóny i trubky", "do signálu saxofonů \"prosáknou\" i trombóny", "do signálu saxofonů \"neprosáknou\" žádné příliš rušící přeslechy"],
        answer: "do signálu saxofonů \"prosáknou\" trombóny i trubky"
    },
    {
        question: "Spektrální hřeben (spectralCrest) měří poměr maxima spektra k aritmetickému průměru spektra.",
        options: ["Pravda", "Nepravda"],
        answer: "Pravda"
    },
    {
        question: "Stupnice melů má mnohem nižší rozsah než stupnice hertzů, 10.000 Hz odpovídá škála 3.200 melů.",
        options: ["Pravda", "Nepravda"],
        answer: "Pravda"
    },
    {
        question: "Směrová charakteristika mikrofonu je frekvenčně závislá – projevuje se výrazněji u vysokých tónů.",
        options: ["Pravda", "Nepravda"],
        answer: "Pravda"
    },
    {
        question: "Drsnost 1 asper je definována jako „drsnost čistého tónu (tedy sinusu s jednou harmonickou složkou) o frekvenci 1000 Hz s hladinou akustického tlaku 60 dB, který je amplitudově modulován kmitočtem 300 Hz při stupni modulace m = 1“ (tj. při 100 % ní amplitudovou modulací).",
        options: ["Pravda", "Nepravda"],
        answer: "Nepravda"
    },
    {
        question: "Šipka označuje",
        questionImage: "media/baskytara.png",
        options: ["snímač u kobylky", "kobylku", "snímač u krku"],
        answer: "snímač u kobylky"
    },
    {
        question: "Brockovo centrum slouží pro porozumění řeči a rozeznávání zvukových barev.",
        options: ["Pravda", "Nepravda"],
        answer: "Nepravda"
    },
    {
        question: "Která z veličin nepatří do vzorce AM?",
        options: ["ω", "Ψ", "Ø", "M", "N"],
        answer: "Ψ"
    },
    {
        question: "Spodní hranice nejcitlivějšího pásma lidského sluchu začíná od ...... (Hz)",
        type: "text",
        answer: "3500"
    },
    {
        question: "Pokud se dva výškově bližší tóny sejdou v jednom ........pásmu, začnou se projevovat drsností i rázy.",
        type: "text",
        answer: "barkovém"
    },
    {
        question: "Při tradičním evropském rozsazení symfonického orchestru vyzařují violy dopředu do hlediště.",
        options: ["Pravda", "Nepravda"],
        answer: "Nepravda"
    },
    {
        question: "Délky pod 100 ms (milisekund) vnímáme",
        options: ["stejně", "jako delší – čím kratší délka, tím se nám v uchu víc prodlužuje", "jako kratší – čím kratší délka, tím se nám v uchu víc prodlužuje"],
        answer: "jako delší – čím kratší délka, tím se nám v uchu víc prodlužuje"
    },
    {
        question: "",
        questionImage: "media/pyth.png",
        image: "media/eukleid vzdal.png",
        options: ["Výpočet tzv. Auresovy či von Bismarkovy křivky", "Výpočet tzv. Eukleidovské vzdálenosti", "Výpočet Fourierovy rychlé transformace"],
        answer: "Výpočet tzv. Eukleidovské vzdálenosti"
    },
    {
        question: "Hammondovy varhany: při přibližování snímače k ozubenému kolečku se mění",
        options: ["síla tónu", "výška tónu", "barva tónu"],
        answer: "síla tónu"
    },
    {
        question: "Jedná se výpočet",
        questionImage: "media/sharpness.jpg",
        options: ["Ostrosti (sharpness)", "Těžiště spektra (spectral centroid)", "Hrubosti (roughness)"],
        answer: "Ostrosti (sharpness)"
    },
    {
        question: "O jakou mikrofonní směrovou charakteristiku půjde u tohoto typu kapsle?",
        questionImage: "media/ledvina.jpg",
        options: ["ledvina", "bidirekcionální", "koule"],
        answer: "ledvina"
    },
    {
        question: "Škála melů je mnohem podrobnější než škála hertzů.",
        options: ["Pravda", "Nepravda"],
        answer: "Nepravda"
    },
    {
        question: "Doplň do vzorce správné parametry pro výpočet indexu FM modulace",
        questionImage: "media/image (2).png",
        type: "dropdown",
        dropdowns: [
            { label: "čitatel", options: ["Δf", "f<sub>m</sub>", "U<sub>m</sub>", "I", "π", "R"], answer: "Δf" },
            { label: "jmenovatel", options: ["Δf", "f<sub>m</sub>", "U<sub>m</sub>", "I", "π", "R"], answer: "f<sub>m</sub>" }
        ]
    },
    {
        question: "Cochlea je naplněna endolymfou, která přenáší vibrace na membránu Cortiho orgánu.",
        options: ["Pravda", "Nepravda"],
        answer: "Pravda"
    },
    {
        question: "Při této technice snímání musíme",
        questionImage: "media/MS2.jpg",
        options: ["převrátit fázi v kanále 1 (kardioda)", "zkopírovat kanál (kardioda) do kanálu 3", "nic", "převrátit fázi v kanále 3"],
        answer: "převrátit fázi v kanále 3"
    },
    {
        question: "Vnitřní ucho: lymfatická tekutina zatlačí na vlásenky především na jednom úzkém místě, a nepřenáší žádný částečný tlak na okolí.",
        options: ["Pravda", "Nepravda"],
        answer: "Nepravda"
    },
    {
        question: "Granulární syntéza funguje často jako tzv. aditivní syntéza za sebou",
        options: ["Pravda", "Nepravda"],
        answer: "Pravda"
    },
    {
        question: "Zkreslením přibývají obvykle",
        options: ["v omezením dynamickém pásmu pouze nižší tónové složky", "v omezeném dynamickém pásmu tónové i ruchové složky", "v kompletním dynamickém pásmu dominantní ruchové složky"],
        answer: "v omezeném dynamickém pásmu tónové i ruchové složky"
    },
    {
        question: "Maximální amplitudě napětí modulačního signálu odpovídá maximální změna nosné frekvence.",
        options: ["Pravda", "Nepravda"],
        answer: "Pravda"
    },
    {
        question: "Weber- Fechnerův psychofyzikální zákon říká: mění-li se fyzikální podněty působící na naše smysly řadou aritmetickou, vnímáme jejich změnu v řadě geometrické.",
        options: ["Pravda", "Nepravda"],
        answer: "Nepravda"
    },
    {
        question: "Čím vyšší intenzita zvuku, tím dochází v uchu k většímu zkreslení původního signálu.",
        options: ["Pravda", "Nepravda"],
        answer: "Pravda"
    },
    {
        question: "Při subtraktivní syntéze jsou stěžejními nástroji",
        options: ["Normalizace", "Pásmové filtry", "Funkce Copy a Paste"],
        answer: "Pásmové filtry"
    },
    {
        question: "Kapsle kardiody je zkonstruována tak, aby byl zvuk přicházející zepředu a zezadu byl silnější, než zvuk přicházející z boku.",
        options: ["Pravda", "Nepravda"],
        answer: "Nepravda"
    },
    {
        question: "Při AM můžeme ovlivňovat pozice složek postranních pásmech i pokud se jedná o jejich výšku, při FM modulaci jen jejich intenzitu.",
        options: ["Pravda", "Nepravda"],
        answer: "Nepravda"
    },
    {
        question: "Při snímání mikrofonní technikou Blumlein používáme",
        options: ["2 bidirekcionální mikrofony (osmičky) kolmo na sebe", "4 všesměrové mikrofony", "2 kardioidní mikrofony (ledviny) kolmo na sebe"],
        answer: "2 bidirekcionální mikrofony (osmičky) kolmo na sebe"
    },
    {
        question: "Elektronková generace syntetizérů přišla až po generaci tranzistorové.",
        options: ["Pravda", "Nepravda"],
        answer: "Nepravda"
    },
    {
        question: "Mezi Schumannovy zákony barvy zvuku nepatří",
        options: ["Zákon o zachování energie", "Zákon formantových oblastí", "Zákon formantových intervalů", "Zákon akustického posuvu"],
        answer: "Zákon o zachování energie"
    },
    {
        question: "Místnost a ambience se bude projevovat (seřaď od nejvíce po nejméně): koule, osmička, ledvina, úzká směrovost",
        options: ["koule → osmička → ledvina → úzká směrovost", "úzká směrovost → ledvina → osmička → koule", "osmička → koule → ledvina → úzká směrovost", "ledvina → koule → osmička → úzká směrovost"],
        answer: "koule → osmička → ledvina → úzká směrovost"
    },
    {
        question: "Při vektorové syntézé pracujeme se zónami, ve kterých se nacházejí různé vzorky zvuku a které např. pomocí joysticku různou měrou prolínáme.",
        options: ["Pravda", "Nepravda"],
        answer: "Pravda"
    },
    {
        question: "Zkreslení typu fuzz bývá dosaženo",
        options: ["transformátorem", "germaniovými tranzistory", "elektronkou"],
        answer: "germaniovými tranzistory"
    },
    {
        question: "Při nástupu tónu, signálu potřebují smyslové buňky v Cortiho orgánu nějaký čas, aby se vybudily a začaly pracovat. A také reagují jinak na podnět silnější a jinak na podnět slabší. U silnějšího podnětu zabírají rychleji a u slabšího pomaleji. Znamená to, že tón bude ze začátku smyslově zkrácen, ale naopak pauza před rozezněním tónu prodloužena.",
        options: ["Pravda", "Nepravda"],
        answer: "Pravda"
    },
    {
        question: "Technika Over Head",
        options: ["je mikrofonní technika pro snímání floor tomu", "je párová mikrofonní technika pro snímání soupravy seshora", "je mikrofonní technika pro snímání malého bubínku"],
        answer: "je párová mikrofonní technika pro snímání soupravy seshora"
    },
    {
        question: "Při technice Jecklin Dis používáme imitaci akustického stínu hlavy.",
        options: ["Pravda", "Nepravda"],
        answer: "Pravda"
    },
    {
        question: "Drsnost bude největší, když bude kmitočet modulátoru (v případě AM) ležet na úrovni",
        options: ["300 Hz", "15 Hz", "70 Hz"],
        answer: "70 Hz"
    },
    {
        question: "Výpočet spektrálního těžiště není založen na váženém průměru.",
        options: ["Pravda", "Nepravda"],
        answer: "Nepravda"
    },
    {
        question: "Jedná se výpočet",
        questionImage: "media/spectral centroid.png",
        options: ["Ostrosti (sharpness)", "Těžiště spektra (spectral centroid)", "Spektrálního toku (flux)"],
        answer: "Těžiště spektra (spectral centroid)"
    },
    {
        question: "Ladič pian podlaďuje soprány a nadlaďuje basy.",
        options: ["Pravda", "Nepravda"],
        answer: "Nepravda"
    },
    {
        question: "Cochlea leží",
        options: ["ve středním uchu", "ve vnějších uchu", "ve vnitřním uchu"],
        answer: "ve vnitřním uchu"
    },
    {
        question: "Na obrázku je dynamická křivka při zkreslení typu",
        questionImage: "media/Zkreslení typu.jpg",
        options: ["elektronka", "fuzz", "tranzistor"],
        answer: "elektronka"
    },
    {
        question: "Na obrázku jde o",
        questionImage: "media/FM_002.jpg",
        options: ["FM", "AM", "Kruhovou modulaci", "Wavetable syntézu"],
        answer: "FM"
    },
    {
        question: "Schéma bloků FM: označte chybějící názvy",
        questionImage: "media/FM.jpg",
        options: ["žlutá: RM, modrá: λ", "žlutá: EG, modrá: ß", "žlutá: NG, modrá: Ψ"],
        answer: "žlutá: EG, modrá: ß"
    },
    {
        question: "Při tomto nastavení labyrintu kapsle, kdy přichází tlak na membránu zleva a zprava ve stejném okamžik, půjde o směrovou charakteristiku",
        questionImage: "media/kapsle_osmička.jpg",
        options: ["ledvinu", "osmičku", "omni"],
        answer: "osmičku"
    },
    {
        question: "Fón je:",
        options: ["jednotka vjemu za okolností, kdy sinus o kmitočtu 1000 Hz dopadá kolmo na střed hlavy o referenčním tlaku 20 mikro Pa.", "psychoakustická jednotka vyjadřující subjektivně vnímanou hlasitost, je definován jako hlasitost tónu o frekvenci 1000 Hz a intenzitě 40 dB."],
        answer: "jednotka vjemu za okolností, kdy sinus o kmitočtu 1000 Hz dopadá kolmo na střed hlavy o referenčním tlaku 20 mikro Pa."
    },
    {
        question: "Nejčastější rozměr reproduktoru používaného v reprobednách pro basovou kytaru bývá",
        options: ["74 cm", "8 palců", "12 palců"],
        answer: "12 palců"
    },
    {
        question: "Δf značí",
        options: ["frekvenční zdvih", "modulační index", "úhlovou frekvenci"],
        answer: "frekvenční zdvih"
    },
    {
        question: "O jakou směrovou charakteristiku v případě této kapsle půjde?",
        questionImage: "media/koule.png",
        options: ["ledvinovou", "bidirekcionální", "všesměrovou"],
        answer: "všesměrovou"
    },
    {
        question: "Na obrázku je směrová mikrofonní charakteristika",
        questionImage: "media/subkardioda.png",
        options: ["directional", "omni", "subkardioda"],
        answer: "subkardioda"
    },
    {
        question: "Mezi typickou masteringovou operaci patří úprava průměrné hlasitosti.",
        options: ["Pravda", "Nepravda"],
        answer: "Pravda"
    },
    {
        question: "Barková stupnice navržená Eberhardem Zwickerem zahrnuje",
        options: ["24 pásem", "28 pásem", "12 pásem"],
        answer: "24 pásem"
    },
    {
        question: "Který prvek nepatří do obvodu analogového syntetizéru?",
        options: ["KBD (keyboard)", "AM", "VCO", "VCA", "VCF"],
        answer: "AM"
    },
    {
        question: "Mikrofony s širším průměrem membrány jsou frekvenčně vyrovnanější, protože je membrána rovnoměrně napjatá a neobsahuje dílčí módy.",
        options: ["Pravda", "Nepravda"],
        answer: "Nepravda"
    },
    {
        question: "Doplň vzdálenost mezi mikrofony při párové technice AB.",
        questionImage: "media/AB.jpg",
        options: ["100-120 cm", "50-60 cm", "25-30 cm"],
        answer: "50-60 cm"
    },
    {
        question: "Barvy, které vznikají pomocí RM (ring modulation), bychom mohli zařadit do kategorie barev",
        options: ["pizzicata", "flažoletové", "kovové", "nazální"],
        answer: "kovové"
    },
    {
        question: "Doplň veličiny do správného místa ve vzorci (μ₁ = spektrální těžiště, μ₂ = spektrální rozpětí)",
        questionImage: "media/šikmost.jpg",
        options: ["μ₁ do čitatele, μ₂ do jmenovatele", "μ₂ do čitatele, μ₁ do jmenovatele", "μ₁ do jmenovatele, μ₂ do čitatele"],
        answer: "μ₁ do čitatele, μ₂ do jmenovatele"
    },
    {
        question: "Doplň názvy termíny do obrázku\ntectoriální membrána\nvláskové buňky\nvlákna sluchového nervu\nbasilární membrána\nendolymfa",
        questionImage: "media/Cortiho orgán.png",
        type: "dropdown",
        dropdowns: [
            { label: "3", options: ["tectoriální membrána", "vláskové buňky", "vlákna sluchového nervu", "basilární membrána", "endolymfa"], answer: "tectoriální membrána" },
            { label: "17", options: ["tectoriální membrána", "vláskové buňky", "vlákna sluchového nervu", "basilární membrána", "endolymfa"], answer: "vlákna sluchového nervu" },
            { label: "5", options: ["tectoriální membrána", "vláskové buňky", "vlákna sluchového nervu", "basilární membrána", "endolymfa"], answer: "vláskové buňky" }
        ]
    },
    {
        question: "Groove box slouží hlavně a převážně pro nahrávání jednotlivých vzorků (samplů) a jejich úpravu.",
        options: ["Pravda", "Nepravda"],
        answer: "Nepravda"
    },
    {
        question: "Nižší barková pásma mají vyšší váhu ostrosti.",
        options: ["Pravda", "Nepravda"],
        answer: "Nepravda"
    },
    {
        question: "Maximální SPL mikrofonu označuje",
        options: ["jaký má mikrofon dynamický rozsah", "jakou maximální úroveň akustického tlaku je mikrofon schopen zpracovat při určitém minimálním zkreslení", "jakou má mikrofon citlivost při zatížení 94 dB"],
        answer: "jakou maximální úroveň akustického tlaku je mikrofon schopen zpracovat při určitém minimálním zkreslení"
    },
    {
        question: "Jedná se o vzorec spektrální šikmosti nebo spektrální špičatosti?",
        questionImage: "media/kurtois.png",
        options: ["špičatosti", "šikmosti"],
        answer: "špičatosti"
    },
    {
        question: "Zkreslení vzniká v důsledku lineárního převodu.",
        options: ["Pravda", "Nepravda"],
        answer: "Nepravda"
    },
    {
        question: "1 acum odpovídá ostrosti úzkopásmového šumu se středem 1 kHz, o šířce 1 kritického pásma a úrovni 60 dB.",
        options: ["Pravda", "Nepravda"],
        answer: "Pravda"
    },
    {
        question: "V případě frekvenční modulace s rostoucím indexem modulace narůstá i počet složek v postranních pásmech.",
        options: ["Pravda", "Nepravda"],
        answer: "Pravda"
    },
    {
        question: "Son a fón jsou jednotky pro vyjádření",
        options: ["subjektivní délky", "subjektivní ostrosti", "subjektivní hlasitosti", "subjektivní výšky"],
        answer: "subjektivní hlasitosti"
    },
    {
        question: "U mikrofonů , co mají nižší citlivost, musíme nastavit i nižší zisk.",
        options: ["Pravda", "Nepravda"],
        answer: "Nepravda"
    },
    {
        question: "Programme Loudness v EBU R 128 je",
        options: ["metodika, jak stanovovat RMS v návaznosti na Phasescope", "doporučení, jaká má být průměrná hlasitost v rámci žánrů", "norma limitující Minimum True Peak Level"],
        answer: "doporučení, jaká má být průměrná hlasitost v rámci žánrů"
    },
    {
        question: "Jedna dura představuje subjektivně vnímanou dobu trvaní komplexního tónu s frekvencí 1 kHz a s hladinou akustického tlaku 39 dB. Objektivní doba trvaní tohoto tónu je 1 s.",
        options: ["Pravda", "Nepravda"],
        answer: "Nepravda"
    },
    {
        question: "Ve kterých kmitočtových pásmech má člověk nejvyšší hlasitostní citlivost:",
        options: ["5000-20 000 Hz", "2-3 kHz", "800-1000 Hz", "3500-5000 Hz"],
        answer: "3500-5000 Hz"
    },
    {
        question: "Marker Track slouží k řízení tempa.",
        options: ["Pravda", "Nepravda"],
        answer: "Nepravda"
    },
    {
        question: "V případě frekvenční modulace velikost modulů složek v postranních pásmech",
        options: ["nezáleží na indexu modulace", "záleží na indexu modulace"],
        answer: "záleží na indexu modulace"
    },
    {
        question: "Na vlásenky tlačí",
        options: ["basilární membrána", "tectoriální membrána", "Reissnerova membrána"],
        answer: "tectoriální membrána"
    },
    {
        question: "V místě, kde má zvukovod nejnižší průměr – u vstupu se 100 μm, vláskové buňky „rozpoznají“ výšky, a na koci hlemýždě, kde je průměr nejširší 500 μm, detekují vláskové buňky basy.",
        options: ["Pravda", "Nepravda"],
        answer: "Pravda"
    },
    {
        question: "Měření citlivosti mikrofonu se provádí v tzv. otevřeném obvodu (nezatížený výstup mikrofonu) tónem o kmitočtu 1 kHz.",
        options: ["Pravda", "Nepravda"],
        answer: "Pravda"
    },
    {
        question: "Mid Side patří mezi koincidenční techniky snímání.",
        options: ["Pravda", "Nepravda"],
        answer: "Pravda"
    },
    {
        question: "Harmonic Ratio vyjadřuje",
        options: ["v centech poměry mezi harmonickými složkami", "v hertzích rozmezí hlavního harmonického pásma", "v procentech stupeň harmonicity obsažené v signálu"],
        answer: "v procentech stupeň harmonicity obsažené v signálu"
    },
    {
        question: "Oscilátory v případě kláves Rhodes jsou",
        options: ["magnetofonové pásy", "trojchór strun", "speciální tyčinky"],
        answer: "speciální tyčinky"
    },
    {
        question: "Tak testy ukázaly, že do 1000 Hz (od konce dvoučárkované oktávy) vnímáme výškovou změnu už v rámci 2-3 Hz a např. v pásmech kolem 7 kHz (kolem a5)) k rozeznání výšky už potřebujeme změnu až 35 Hz.",
        options: ["Pravda", "Nepravda"],
        answer: "Pravda"
    },
    {
        question: "V případě bidirekcionální směrové charakteristiky jde o mikrofon 0. řádu.",
        options: ["Pravda", "Nepravda"],
        answer: "Nepravda"
    },
    {
        question: "V horním dílu Leslie boxu se nachází",
        options: ["Otáčející se horna", "Otáčející se šnek", "Napevno umístěný reproduktor"],
        answer: "Otáčející se horna"
    },
    {
        question: "Na obrázku je schéma:",
        questionImage: "media/ring modulation.png",
        options: ["čtyřtranzistorového zkreslení fuzz", "kruhové modulace", "křížové modulace"],
        answer: "kruhové modulace"
    },
    {
        question: "Brockovo centrum leží v mozku poblíž premotorické kůry sloužící k řízení pohybu a prefrontální oblasti sloužící k integraci informací",
        options: ["Pravda", "Nepravda"],
        answer: "Pravda"
    },
    {
        question: "Při křížové syntéze musí být jednotlivé obálky pásmových filtrů koordinovány signálem tzv. nosné",
        options: ["Pravda", "Nepravda"],
        answer: "Pravda"
    },
    {
        question: "Snímač",
        options: ["Single coil má dvě cívky, silnější signál, ale více šumí", "Single coil má jednu cívku, slabší signál, šumí, ale je živější a ostřejší", "Humbucker má jednu cívku, silnější signál, ale více šumí"],
        answer: "Single coil má jednu cívku, slabší signál, šumí, ale je živější a ostřejší"
    },
    {
        question: "Carl Wernicke poprvé vyslovil názor, že v dolní levé části čelního laloku leží centrum řečových projevů.",
        options: ["Pravda", "Nepravda"],
        answer: "Nepravda"
    },
    {
        question: "Eberhard Zwicker",
        options: ["zkoumal parametry jako tuhost, elasticita, tlumení, uzlová rychlost", "je autorem knihy Psychoacoustics, Facts and Models", "zkoumal parametry jako ostrost, subjektivní výška, drsnost, subjektivní délka a zavedl jednotky jako acum, dura, m4.kg-1.s-1"],
        answer: "je autorem knihy Psychoacoustics, Facts and Models"
    },
    {
        question: "Snímač v případě Rhodes piana můžeme nasměrovat na různé místo tyčinky, a tím získat plnější nebo prázdnější barvu.",
        options: ["Pravda", "Nepravda"],
        answer: "Pravda"
    },
    {
        question: "Na grafu je zkreslení",
        questionImage: "media/elektronka.jpg",
        options: ["elektronkové", "distortion", "overdrive", "booster"],
        answer: "elektronkové"
    },
    {
        question: "V grafu směrové citlivosti jsou jednotlivá pásma obvykle odstupňována po",
        options: ["15 dB", "5 dB", "20 Hz", "10 Ω"],
        answer: "5 dB"
    },
    {
        question: "Hudební struktura na obrázku je typická",
        questionImage: "media/heterofonie.jpg",
        options: ["komplementární hlasy", "heterofonie", "unisono, homofonie"],
        answer: "heterofonie"
    },
    {
        question: "Hladina hlasitosti 1 fónu je při frekvenci 1 kHz stejně velká jako jednotka hladiny zvuku 1 dB. Níže a výše ve spektru se už hladiny v dB a fónech rozcházejí.",
        options: ["Pravda", "Nepravda"],
        answer: "Pravda"
    },
    {
        question: "Ve vzorci frekvenční modulace m<sub>fm</sub> označuje",
        options: ["Koeficient šířky postranních pásem", "Modulační index frekvenční modulace", "Besselova funkce IV. druhu n-tého řádu"],
        answer: "Modulační index frekvenční modulace"
    },
    {
        question: "Velký buben, malý bubínek a tom tomy se budou vzájemně makovat v pásmech:",
        options: [
            "50-100 Hz",
            "150-300 Hz",
            "500-700 Hz"
        ],
        answer: "150-300 Hz"
    },
    {
        question: "Jaký typ mikrofonu je na fotce?",
        questionImage: "media/c12 (1).jpg",
        options: [
            "kondenzátorový",
            "tlakový",
            "elektronkový",
            "ribbon"
        ],
        answer: "elektronkový"
    },
    {
        question: "Horní hranice nejcitlivějšího pásma lidského sluchu leží na ........(Hz)",
        type: "text",
        answer: "5000"
    },
    {
        question: "Asper je",
        options: [
            "ostrost úzkopásmového šumu o šířce kritického pásma se střední frekvencí 1000 Hz za akustického tlaku 60 dB.",
            "drsnost sinusu o frekvenci 3500 Hz, akustickém tlaku 60 dB modulovaného AM modulačním kmitočtem 1000 Hz",
            "drsnost sinusu o frekvenci 1000 Hz, akustickém tlaku 60 dB modulovaného AM modulačním kmitočtem 70 Hz.",
            "drsnost sinusu o frekvenci 1000 Hz, akustickém tlaku 60 dB modulovaného FM modulačním kmitočtem 70 Hz."
        ],
        answer: "drsnost sinusu o frekvenci 1000 Hz, akustickém tlaku 60 dB modulovaného AM modulačním kmitočtem 70 Hz."
    },
    {
        question: "Na obrázku je",
        questionImage: "media/smycce.jpg",
        options: [
            "tradiční evropské rozsazení smyčců",
            "moderní americké rozsazení smyčců"
        ],
        answer: "tradiční evropské rozsazení smyčců"
    },
    {
        question: "Mezi stěžejní efekty kláves Rhodes nepatří",
        options: [
            "zkreslení",
            "chorus",
            "tremolo",
            "gate"
        ],
        answer: "gate"
    },
    {
        question: "Jaká mikrofonní párová technika je na obrázku?",
        questionImage: "media/DIN.jpg",
        options: [
            "NOS",
            "XY",
            "AB",
            "DIN"
        ],
        answer: "DIN"
    },
    {
        question: "Přiřaď zkratky ke odpovídajícím názvům",
        type: "dropdown",
        dropdowns: [
            { label: "RM", options: ["kruhový modulátor", "klaviatura", "šumový generátor", "generátor obálky", "napěťově řízený filtr", "nízkofrekvenční oscilátor"], answer: "kruhový modulátor" },
            { label: "KBD", options: ["kruhový modulátor", "klaviatura", "šumový generátor", "generátor obálky", "napěťově řízený filtr", "nízkofrekvenční oscilátor"], answer: "klaviatura" },
            { ůabel: "NG", options: ["kruhový modulátor", "klaviatura", "šumový generátor", "generátor obálky", "napěťově řízený filtr", "nízkofrekvenční oscilátor"], answer: "šumový generátor" },
            { label: "EG", options: ["kruhový modulátor", "klaviatura", "šumový generátor", "generátor obálky", "napěťově řízený filtr", "nízkofrekvenční oscilátor"], answer: "generátor obálky" },
            { label: "VCF", options: ["kruhový modulátor", "klaviatura", "šumový generátor", "generátor obálky", "napěťově řízený filtr", "nízkofrekvenční oscilátor"], answer: "napěťově řízený filtr" },
            { label: "LFO", options: ["kruhový modulátor", "klaviatura", "šumový generátor", "generátor obálky", "napěťově řízený filtr", "nízkofrekvenční oscilátor"], answer: "nízkofrekvenční oscilátor" }
        ]
    },
    {
        question: "Na obrázku je zobrazena",
        questionImage: "media/AM.png",
        options: [
            "Křížová syntéza",
            "AM",
            "Vektorová syntéza",
            "FM"
        ],
        answer: "FM"
    }
];