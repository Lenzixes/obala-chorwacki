// ============================================================
// DANE KURSU - Chorwacki dla podróżnych nad Adriatyk
// ============================================================

const COURSE = {
  ports: [
    {
      id: "alfabet",
      name: "Alfabet i wymowa",
      subtitle: "Zacznij tu — bez tego nic nie zabrzmi dobrze",
      icon: "abc",
      lessons: [
        {
          id: "alf-1",
          title: "Litery, które czytasz inaczej niż po polsku",
          type: "alphabet",
          items: [
            { hr: "c", pl_sound: "ts (jak w \"co\")", example: "cesta", example_pl: "droga" },
            { hr: "č", pl_sound: "cz (jak polskie cz)", example: "čovjek", example_pl: "człowiek" },
            { hr: "ć", pl_sound: "ć (mniej twarde niż č)", example: "kuća", example_pl: "dom" },
            { hr: "š", pl_sound: "sz", example: "šuma", example_pl: "las" },
            { hr: "ž", pl_sound: "ż", example: "žena", example_pl: "kobieta/żona" },
            { hr: "lj", pl_sound: "l (zmiękczone, jak \"l\" w \"liść\")", example: "ljubav", example_pl: "miłość" },
            { hr: "nj", pl_sound: "ń", example: "njega", example_pl: "jego" },
            { hr: "j", pl_sound: "j (jak polskie j)", example: "more", example_pl: "morze (uwaga: tu nie ma j, przykład wymowy)" },
            { hr: "h", pl_sound: "ch (jak polskie ch)", example: "hvala", example_pl: "dzięki" }
          ]
        },
        {
          id: "alf-2",
          title: "Akcent i melodia",
          type: "info",
          content: "W chorwackim akcent pada zwykle na przedostatnią lub wcześniejszą sylabę, prawie nigdy na ostatnią. Samogłoski mogą być długie lub krótkie — na początek nie musisz tego rozróżniać, Chorwaci zrozumieją Cię i tak. Najważniejsze: czytaj tak jak jest napisane, chorwacki jest fonetyczny (w przeciwieństwie do np. angielskiego)."
        }
      ],
      quiz: [
        { q: "Jak czytamy literę 'č'?", options: ["ts", "cz", "ć", "sz"], correct: 1 },
        { q: "Co znaczy 'hvala'?", options: ["proszę", "dzięki", "tak", "nie"], correct: 1 },
        { q: "Jak czytamy 'lj' w słowie 'ljubav'?", options: ["lj jak dwie litery osobno", "zmiękczone l, jak polskie 'l' w 'liść'", "j", "ł"], correct: 1 },
        { q: "Chorwacki pisany jest...", options: ["nie fonetycznie, jak angielski", "fonetycznie - czytasz jak jest napisane", "tylko cyrylicą", "bez samogłosek"], correct: 1 }
      ]
    },
    {
      id: "podstawy",
      name: "Podstawowe zwroty",
      subtitle: "Powitania, uprzejmości, liczby — Twoje pierwsze 48h",
      icon: "wave",
      lessons: [
        {
          id: "pod-1",
          title: "Powitania",
          type: "phrases",
          items: [
            { hr: "Bok!", pl: "Cześć! (na każdą okazję, przywitanie i pożegnanie)" },
            { hr: "Dobro jutro", pl: "Dzień dobry (rano)" },
            { hr: "Dobar dan", pl: "Dzień dobry (w dzień)" },
            { hr: "Dobra večer", pl: "Dobry wieczór" },
            { hr: "Kako si?", pl: "Jak się masz? (nieformalnie)" },
            { hr: "Kako ste?", pl: "Jak się Pan/Pani ma? (formalnie)" },
            { hr: "Dobro, hvala", pl: "Dobrze, dzięki" },
            { hr: "Doviđenja", pl: "Do widzenia" }
          ]
        },
        {
          id: "pod-2",
          title: "Uprzejmości",
          type: "phrases",
          items: [
            { hr: "Molim", pl: "Proszę / Słucham? (jak nie usłyszysz)" },
            { hr: "Hvala", pl: "Dzięki" },
            { hr: "Hvala lijepa", pl: "Bardzo dziękuję" },
            { hr: "Nema na čemu", pl: "Nie ma za co" },
            { hr: "Oprostite", pl: "Przepraszam (formalnie / zwracając uwagę)" },
            { hr: "Žao mi je", pl: "Przykro mi" },
            { hr: "Da", pl: "Tak" },
            { hr: "Ne", pl: "Nie" }
          ]
        },
        {
          id: "pod-3",
          title: "Liczby 1-20",
          type: "phrases",
          items: [
            { hr: "jedan", pl: "1" }, { hr: "dva", pl: "2" }, { hr: "tri", pl: "3" },
            { hr: "četiri", pl: "4" }, { hr: "pet", pl: "5" }, { hr: "šest", pl: "6" },
            { hr: "sedam", pl: "7" }, { hr: "osam", pl: "8" }, { hr: "devet", pl: "9" },
            { hr: "deset", pl: "10" }, { hr: "jedanaest", pl: "11" }, { hr: "dvanaest", pl: "12" },
            { hr: "petnaest", pl: "15" }, { hr: "dvadeset", pl: "20" }
          ]
        },
        {
          id: "pod-4",
          title: "Liczby - ceny i targowanie",
          type: "phrases",
          items: [
            { hr: "trideset", pl: "30" }, { hr: "pedeset", pl: "50" }, { hr: "sto", pl: "100" },
            { hr: "dvjesto", pl: "200" }, { hr: "tisuću", pl: "1000" },
            { hr: "Koliko košta?", pl: "Ile to kosztuje?" },
            { hr: "To je preskupo", pl: "To jest za drogie" },
            { hr: "Imate li jeftinije?", pl: "Czy macie coś tańszego?" }
          ]
        }
      ],
      quiz: [
        { q: "Jak powiesz 'Cześć' na powitanie i pożegnanie?", options: ["Dobro jutro", "Bok", "Hvala", "Molim"], correct: 1 },
        { q: "Co znaczy 'Oprostite'?", options: ["Dzięki", "Tak", "Przepraszam", "Do widzenia"], correct: 2 },
        { q: "Jak zapytasz o cenę?", options: ["Kako si?", "Žao mi je", "Koliko košta?", "Dobar dan"], correct: 2 },
        { q: "'Pet' to liczba...", options: ["4", "5", "6", "7"], correct: 1 },
        { q: "Co odpowiesz na 'Hvala'?", options: ["Da", "Ne", "Nema na čemu", "Bok"], correct: 2 }
      ]
    },
    {
      id: "gramatyka",
      name: "Gramatyka bez zgadywania",
      subtitle: "To, czego Duolingo Ci nie wytłumaczy",
      icon: "book",
      lessons: [
        {
          id: "gram-1",
          title: "Jestem, jesteś, jest — odmiana 'biti'",
          type: "grammar",
          content: "Czasownik 'być' (biti) jest najważniejszy i nieregularny — musisz go zapamiętać. W mowie często skraca się go do krótkiej formy.",
          table: [
            { pl: "ja jestem", hr: "ja sam" },
            { pl: "ty jesteś", hr: "ti si" },
            { pl: "on/ona/ono jest", hr: "on/ona/ono je" },
            { pl: "my jesteśmy", hr: "mi smo" },
            { pl: "wy jesteście", hr: "vi ste" },
            { pl: "oni/one są", hr: "oni/one su" }
          ],
          note: "Po polsku mówimy 'jestem zmęczony' — po chorwacku dokładnie tak samo: 'ja sam umoran'. Szyk jest bardzo podobny do polskiego, to Twoja przewaga!"
        },
        {
          id: "gram-2",
          title: "Mam, masz, ma — odmiana 'imati'",
          type: "grammar",
          content: "Czasownik 'mieć' też jest częsty i regularny — łatwiejszy niż 'być'.",
          table: [
            { pl: "ja mam", hr: "ja imam" },
            { pl: "ty masz", hr: "ti imaš" },
            { pl: "on/ona ma", hr: "on/ona ima" },
            { pl: "my mamy", hr: "mi imamo" },
            { pl: "wy macie", hr: "vi imate" },
            { pl: "oni/one mają", hr: "oni/one imaju" }
          ],
          note: "Wzorzec '-am, -aš, -a, -amo, -ate, -aju' powtarza się w wielu czasownikach na -ati. Jak go znasz, znasz odmianę połowy czasowników."
        },
        {
          id: "gram-3",
          title: "Chcę to — 'htjeti' i zamawianie",
          type: "grammar",
          content: "Do zamawiania w restauracji najważniejsza jest forma 'chcę' / 'chciałbym'.",
          table: [
            { pl: "chcę", hr: "želim (forma uprzejma, użyj tej)" },
            { pl: "chciałbym", hr: "htio bih (mężczyzna) / htjela bih (kobieta)" },
            { pl: "chcesz?", hr: "želiš li?" },
            { pl: "potrzebuję", hr: "trebam" }
          ],
          note: "Praktyczna rada: 'Želim...' + nazwa rzeczy wystarczy w 95% sytuacji. Np. 'Želim kavu' = 'Chcę kawę'. Nie musisz na początek znać trybów warunkowych."
        },
        {
          id: "gram-4",
          title: "Rodzaj rzeczowników — szybki skrót",
          type: "grammar",
          content: "Chorwackie rzeczowniki mają rodzaj jak w polskim, i działa to bardzo podobnie:",
          table: [
            { pl: "rodzaj męski - zwykle kończy się na spółgłoskę", hr: "grad (miasto), restoran" },
            { pl: "rodzaj żeński - zwykle kończy się na -a", hr: "kava (kawa), plaža (plaża)" },
            { pl: "rodzaj neutralny - zwykle kończy się na -o/-e", hr: "more (morze), pivo (piwo)" }
          ],
          note: "To jest tylko ogólna reguła (90% przypadków), ale na start podróżny chorwacki wystarczy."
        }
      ],
      quiz: [
        { q: "Jak powiesz 'jestem zmęczony' (ja sam ___)?", options: ["ja sam umoran", "ti si umoran", "on je umoran", "mi smo umorni"], correct: 0 },
        { q: "'Mi imamo' znaczy:", options: ["wy macie", "my mamy", "oni mają", "ja mam"], correct: 1 },
        { q: "Jak najprościej zamówisz kawę?", options: ["Kava je dobra", "Želim kavu", "Imam kavu", "Ti si kava"], correct: 1 },
        { q: "Słowo 'more' (morze) ma rodzaj:", options: ["męski", "żeński", "neutralny", "nie ma rodzaju"], correct: 2 }
      ]
    },
    {
      id: "restauracja",
      name: "W restauracji",
      subtitle: "Zamów, zapłać, zapytaj o rachunek",
      icon: "fork",
      lessons: [
        {
          id: "rest-1",
          title: "Przy stoliku",
          type: "phrases",
          items: [
            { hr: "Stol za dvoje, molim", pl: "Stolik dla dwóch, proszę" },
            { hr: "Imate li jelovnik?", pl: "Czy macie menu?", lit: "dosł. 'Mają jadłospis?'" },
            { hr: "Što preporučujete?", pl: "Co Pan/Pani polecacie?" },
            { hr: "Ja bih želio/željela...", pl: "Chciałbym/chciałabym..." },
            { hr: "Za piće, molim", pl: "Coś do picia, proszę" },
            { hr: "Bez leda, molim", pl: "Bez lodu, proszę" }
          ]
        },
        {
          id: "rest-2",
          title: "Jedzenie i napoje — must-know",
          type: "phrases",
          items: [
            { hr: "voda", pl: "woda" }, { hr: "kava", pl: "kawa" }, { hr: "pivo", pl: "piwo" },
            { hr: "vino", pl: "wino" }, { hr: "riba", pl: "ryba" }, { hr: "meso", pl: "mięso" },
            { hr: "salata", pl: "sałatka" }, { hr: "kruh", pl: "chleb" }, { hr: "sladoled", pl: "lody" },
            { hr: "škampi", pl: "krewetki (dalmatyński klasyk)" }
          ]
        },
        {
          id: "rest-3",
          title: "Płacenie i kończenie",
          type: "phrases",
          items: [
            { hr: "Račun, molim", pl: "Rachunek, proszę" },
            { hr: "Možemo li platiti karticom?", pl: "Czy możemy zapłacić kartą?" },
            { hr: "Je li napojnica uključena?", pl: "Czy napiwek jest wliczony?" },
            { hr: "Bilo je odlično", pl: "Było wyśmienite" },
            { hr: "Sve je u redu", pl: "Wszystko w porządku" }
          ]
        }
      ],
      quiz: [
        { q: "Jak poprosisz o rachunek?", options: ["Jelovnik, molim", "Račun, molim", "Voda, molim", "Stol za dvoje"], correct: 1 },
        { q: "'Škampi' to:", options: ["sałatka", "chleb", "krewetki", "lody"], correct: 2 },
        { q: "Jak zapytasz, czy można płacić kartą?", options: ["Možemo li platiti karticom?", "Bilo je odlično", "Bez leda, molim", "Što preporučujete?"], correct: 0 },
        { q: "'Bez leda, molim' znaczy:", options: ["Z lodem, proszę", "Bez lodu, proszę", "Bardzo zimne, proszę", "Bez cukru, proszę"], correct: 1 }
      ]
    },
    {
      id: "hotel",
      name: "W hotelu / apartamencie",
      subtitle: "Zameldowanie, problemy, podstawowe potrzeby",
      icon: "bed",
      lessons: [
        {
          id: "hot-1",
          title: "Zameldowanie",
          type: "phrases",
          items: [
            { hr: "Imam rezervaciju", pl: "Mam rezerwację" },
            { hr: "Na ime...", pl: "Na nazwisko..." },
            { hr: "Koliko dugo ostajete?", pl: "Jak długo Pan/Pani zostaje? (to usłyszysz)" },
            { hr: "Ostajem tri noći", pl: "Zostaję trzy noce" },
            { hr: "U koliko sati je check-in?", pl: "O której jest zameldowanie?" },
            { hr: "Gdje je parking?", pl: "Gdzie jest parking?" }
          ]
        },
        {
          id: "hot-2",
          title: "Problemy i prośby",
          type: "phrases",
          items: [
            { hr: "Nema tople vode", pl: "Nie ma ciepłej wody" },
            { hr: "Klima ne radi", pl: "Klimatyzacja nie działa" },
            { hr: "Možete li mi pomoći?", pl: "Czy może mi Pan/Pani pomóc?" },
            { hr: "Trebam još jedan ručnik", pl: "Potrzebuję jeszcze jeden ręcznik" },
            { hr: "Gdje mogu baciti smeće?", pl: "Gdzie mogę wyrzucić śmieci?" },
            { hr: "Ima li WiFi?", pl: "Jest WiFi?" }
          ]
        }
      ],
      quiz: [
        { q: "Jak powiesz 'Mam rezerwację'?", options: ["Ostajem tri noći", "Imam rezervaciju", "Nema tople vode", "Gdje je parking?"], correct: 1 },
        { q: "'Klima ne radi' znaczy:", options: ["Klimat jest dobry", "Klimatyzacja nie działa", "Pogoda się zmienia", "Nie ma klimatyzacji w pokoju"], correct: 1 },
        { q: "Jak zapytasz o WiFi?", options: ["Ima li WiFi?", "Trebam ručnik", "Na ime...", "Koliko dugo ostajete?"], correct: 0 }
      ]
    },
    {
      id: "dworzec",
      name: "Dworzec, prom, transport",
      subtitle: "Bilety, kierunki, wyspy",
      icon: "ferry",
      lessons: [
        {
          id: "dwo-1",
          title: "Bilety i rozkłady",
          type: "phrases",
          items: [
            { hr: "Jednu kartu za Split, molim", pl: "Jeden bilet do Splitu, proszę" },
            { hr: "U koliko sati polazi?", pl: "O której odjeżdża/odpływa?" },
            { hr: "Koliko traje put?", pl: "Jak długo trwa podróż?" },
            { hr: "Je li ovo pravi peron?", pl: "Czy to dobry peron?" },
            { hr: "Trajekt", pl: "Prom" },
            { hr: "Povratna karta", pl: "Bilet powrotny" }
          ]
        },
        {
          id: "dwo-2",
          title: "Pytanie o drogę",
          type: "phrases",
          items: [
            { hr: "Gdje je...?", pl: "Gdzie jest...?" },
            { hr: "Kako doći do centra?", pl: "Jak dojść do centrum?" },
            { hr: "Je li daleko?", pl: "Czy to daleko?" },
            { hr: "Lijevo", pl: "W lewo" },
            { hr: "Desno", pl: "W prawo" },
            { hr: "Ravno", pl: "Na prosto" },
            { hr: "Pješice", pl: "Pieszo" }
          ]
        }
      ],
      quiz: [
        { q: "Jak kupisz bilet do Splitu?", options: ["Jednu kartu za Split, molim", "Kako doći do centra?", "Je li daleko?", "Trajekt, molim"], correct: 0 },
        { q: "'Trajekt' to:", options: ["pociąg", "prom", "autobus", "rower"], correct: 1 },
        { q: "Jak powiesz 'w lewo'?", options: ["Desno", "Ravno", "Lijevo", "Daleko"], correct: 2 }
      ]
    }
  ]
};

if (typeof module !== "undefined") module.exports = COURSE;
