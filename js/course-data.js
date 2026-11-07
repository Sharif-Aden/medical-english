/* Sadan's Medical English – kurssisisältö (generoitu työkirjasta). Skeema: docs/SCHEMA.md */
window.COURSE = {
 "version": 1,
 "lessons": [
  {
   "id": 1,
   "title": "Tervehdykset ja esittäytyminen",
   "titleEn": "Greetings and introductions",
   "goals": [
    "Osaat tervehtiä potilasta kohteliaasti.",
    "Osaat kertoa nimesi, opiskeluroolisi ja oppilaitoksesi.",
    "Osaat kertoa yksinkertaisesti, miksi tulit potilashuoneeseen."
   ],
   "vocab": [
    {
     "en": "Hello",
     "fi": "Hei",
     "ipa": "/həˈloʊ/",
     "ex": "Hello, my name is Sadan.",
     "exFi": "Hei, nimeni on Sadan."
    },
    {
     "en": "Good morning",
     "fi": "Hyvää huomenta",
     "ipa": "/ɡʊd ˈmɔrnɪŋ/",
     "ex": "Good morning, Mr. Wilson.",
     "exFi": "Hyvää huomenta, herra Wilson."
    },
    {
     "en": "Good afternoon",
     "fi": "Hyvää iltapäivää",
     "ipa": "/ɡʊd ˌæftɚˈnun/",
     "ex": "Good afternoon. May I come in?",
     "exFi": "Hyvää iltapäivää. Saanko tulla sisään?"
    },
    {
     "en": "My name is...",
     "fi": "Nimeni on...",
     "ipa": "/maɪ neɪm ɪz/",
     "ex": "My name is Sadan.",
     "exFi": "Nimeni on Sadan."
    },
    {
     "en": "I am a student",
     "fi": "Olen opiskelija",
     "ipa": "/aɪ æm ə ˈstudənt/",
     "ex": "I am a student at Metropolia.",
     "exFi": "Olen opiskelija Metropoliassa."
    },
    {
     "en": "Biomedical laboratory science",
     "fi": "Bioanalytiikka",
     "ipa": "/ˌbaɪoʊˈmɛdɪkəl ˈlæbrəˌtɔri ˈsaɪəns/",
     "ex": "I study biomedical laboratory science.",
     "exFi": "Opiskelen bioanalytiikkaa."
    },
    {
     "en": "Laboratory",
     "fi": "Laboratorio",
     "ipa": "/ˈlæbrəˌtɔri/",
     "ex": "The sample goes to the laboratory.",
     "exFi": "Näyte menee laboratorioon."
    },
    {
     "en": "Hospital",
     "fi": "Sairaala",
     "ipa": "/ˈhɑspɪtəl/",
     "ex": "This hospital has several wards.",
     "exFi": "Tässä sairaalassa on useita osastoja."
    },
    {
     "en": "Patient",
     "fi": "Potilas",
     "ipa": "/ˈpeɪʃənt/",
     "ex": "The patient is waiting in the room.",
     "exFi": "Potilas odottaa huoneessa."
    },
    {
     "en": "Nice to meet you",
     "fi": "Hauska tavata",
     "ipa": "/naɪs tə ˈmit ju/",
     "ex": "Nice to meet you, Mr. Wilson.",
     "exFi": "Hauska tavata, herra Wilson."
    },
    {
     "en": "Thank you",
     "fi": "Kiitos",
     "ipa": "/ˈθæŋk ju/",
     "ex": "Thank you for your time.",
     "exFi": "Kiitos ajastanne."
    },
    {
     "en": "Have a nice day",
     "fi": "Mukavaa päivänjatkoa",
     "ipa": "/hæv ə naɪs deɪ/",
     "ex": "Thank you. Have a nice day.",
     "exFi": "Kiitos. Mukavaa päivänjatkoa."
    }
   ],
   "pron": {
    "text": "Harjoittele /h/ sanassa hospital, /θ/ sanassa thank ja painoa sanoissa patient sekä laboratory. Amerikkalaisessa ääntämisessä laboratory alkaa painollisella tavulla.",
    "focus": [
     {
      "en": "hospital",
      "ipa": "/ˈhɑspɪtəl/",
      "tip": "/h/ sanan alussa"
     },
     {
      "en": "thank you",
      "ipa": "/ˈθæŋk ju/",
      "tip": "/θ/: kieli kevyesti hampaiden väliin"
     },
     {
      "en": "patient",
      "ipa": "/ˈpeɪʃənt/",
      "tip": "paino ensimmäisellä tavulla"
     },
     {
      "en": "laboratory",
      "ipa": "/ˈlæbrəˌtɔri/",
      "tip": "paino ensimmäisellä tavulla: LAB-ruh-tor-ee"
     }
    ]
   },
   "scenario": "Sadan tulee ohjaajansa kanssa potilashuoneeseen ja esittelee itsensä.",
   "dialogue": [
    {
     "s": "Sadan",
     "en": "Good morning. May I come in?",
     "fi": "Hyvää huomenta. Saanko tulla sisään?"
    },
    {
     "s": "Potilas",
     "en": "Yes, please come in.",
     "fi": "Kyllä, tulkaa sisään."
    },
    {
     "s": "Sadan",
     "en": "My name is Sadan. I'm a biomedical laboratory science student at Metropolia.",
     "fi": "Nimeni on Sadan. Olen bioanalyytikko-opiskelija Metropoliassa."
    },
    {
     "s": "Potilas",
     "en": "Hello, Sadan. Nice to meet you.",
     "fi": "Hei, Sadan. Hauska tavata."
    },
    {
     "s": "Sadan",
     "en": "Nice to meet you too. I'm here with my supervisor.",
     "fi": "Hauska tavata myös. Olen täällä ohjaajani kanssa."
    },
    {
     "s": "Potilas",
     "en": "What are you here for?",
     "fi": "Miksi olette täällä?"
    },
    {
     "s": "Sadan",
     "en": "I'm here to take a blood sample.",
     "fi": "Olen täällä ottamassa verinäytteen."
    },
    {
     "s": "Potilas",
     "en": "All right. Thank you for explaining.",
     "fi": "Selvä. Kiitos, kun kerroitte."
    },
    {
     "s": "Sadan",
     "en": "You're welcome. First, we need to confirm your identity.",
     "fi": "Olkaa hyvä. Ensin meidän täytyy varmistaa henkilöllisyytenne."
    }
   ],
   "listening": [
    {
     "script": "Good morning. My name is Sadan. I am a biomedical laboratory science student at Metropolia. I am here to take a blood sample.",
     "q": [
      "Mikä opiskelijan nimi on?",
      "Missä hän opiskelee?",
      "Miksi hän tuli?"
     ],
     "a": [
      "Sadan.",
      "Metropoliassa.",
      "Ottamaan verinäytteen."
     ]
    },
    {
     "script": "Sadan: Good afternoon. May I come in? Patient: Yes, please. Sadan: Thank you. My name is Sadan. Patient: Nice to meet you.",
     "q": [
      "Mitä tervehdystä Sadan käyttää?",
      "Pyytääkö Sadan lupaa tulla sisään?",
      "Mitä potilas vastaa esittelyyn?"
     ],
     "a": [
      "Good afternoon eli hyvää iltapäivää.",
      "Kyllä, hän sanoo May I come in?",
      "Nice to meet you eli hauska tavata."
     ]
    }
   ],
   "speaking": [
    {
     "task": "Toista ääneen kolme kertaa: Good morning. My name is Sadan. Ensimmäisellä kerralla hitaasti, toisella normaalisti ja kolmannella ilman mallia.",
     "model": "Good morning. My name is Sadan."
    },
    {
     "task": "Kuvittele, että potilas kysyy 'Who are you?' Vastaa kertomalla nimesi, opiskeluroolisi ja Metropolian.",
     "model": "My name is Sadan. I'm a biomedical laboratory science student at Metropolia."
    },
    {
     "task": "Kerro potilaalle käyntisi tarkoitus ja päätä harjoituskeskustelu kohteliaasti.",
     "model": "I'm here to take a blood sample. Thank you. Have a nice day."
    }
   ],
   "match": {
    "items": [
     "Hello",
     "Good afternoon",
     "I am a student",
     "Hospital",
     "Thank you"
    ],
    "meanings": [
     "Olen opiskelija",
     "Kiitos",
     "Hei",
     "Sairaala",
     "Hyvää iltapäivää"
    ],
    "key": [
     3,
     5,
     1,
     4,
     2
    ]
   },
   "translate": {
    "items": [
     "Nimeni on...",
     "Olen opiskelija",
     "Bioanalytiikka",
     "Laboratorio"
    ],
    "key": [
     "My name is...",
     "I am a student",
     "Biomedical laboratory science",
     "Laboratory"
    ]
   },
   "fill": {
    "items": [
     "My ____ is Sadan.",
     "I am a ____ at Metropolia.",
     "Have a nice ____."
    ],
    "key": [
     "name",
     "student",
     "day"
    ]
   },
   "quiz": [
    {
     "q": "Mitä englanninkielinen ilmaus \"Hello\" tarkoittaa suomeksi?",
     "o": [
      "Hei",
      "Bioanalytiikka",
      "Hauska tavata",
      "Hyvää iltapäivää"
     ],
     "a": 0,
     "x": "\"Hello\" = \"Hei\". Esimerkkilause: Hello, my name is Sadan.",
     "ol": "fi"
    },
    {
     "q": "Mitä englanninkielinen ilmaus \"My name is...\" tarkoittaa suomeksi?",
     "o": [
      "Hei",
      "Nimeni on...",
      "Potilas",
      "Bioanalytiikka"
     ],
     "a": 1,
     "x": "\"My name is...\" = \"Nimeni on...\". Esimerkkilause: My name is Sadan.",
     "ol": "fi"
    },
    {
     "q": "Mitä englanninkielinen ilmaus \"Laboratory\" tarkoittaa suomeksi?",
     "o": [
      "Nimeni on...",
      "Mukavaa päivänjatkoa",
      "Laboratorio",
      "Potilas"
     ],
     "a": 2,
     "x": "\"Laboratory\" = \"Laboratorio\". Esimerkkilause: The sample goes to the laboratory.",
     "ol": "fi"
    },
    {
     "q": "Mitä englanninkielinen ilmaus \"Patient\" tarkoittaa suomeksi?",
     "o": [
      "Bioanalytiikka",
      "Kiitos",
      "Potilas",
      "Hyvää huomenta"
     ],
     "a": 2,
     "x": "\"Patient\" = \"Potilas\". Esimerkkilause: The patient is waiting in the room.",
     "ol": "fi"
    },
    {
     "q": "Mikä on ilmauksen \"Hyvää huomenta\" englanninkielinen vastine?",
     "o": [
      "Good morning",
      "I am a student",
      "Hospital",
      "Nice to meet you"
     ],
     "a": 0,
     "x": "Oikea ilmaus on \"Good morning\". Mallissa: Good morning, Mr. Wilson.",
     "ol": "en"
    },
    {
     "q": "Mikä on ilmauksen \"Bioanalytiikka\" englanninkielinen vastine?",
     "o": [
      "Have a nice day",
      "Patient",
      "Biomedical laboratory science",
      "Good morning"
     ],
     "a": 2,
     "x": "Oikea ilmaus on \"Biomedical laboratory science\". Mallissa: I study biomedical laboratory science.",
     "ol": "en"
    },
    {
     "q": "Mikä on ilmauksen \"Kiitos\" englanninkielinen vastine?",
     "o": [
      "Laboratory",
      "Good morning",
      "I am a student",
      "Thank you"
     ],
     "a": 3,
     "x": "Oikea ilmaus on \"Thank you\". Mallissa: Thank you for your time.",
     "ol": "en"
    },
    {
     "q": "Potilas sanoo \"Thank you.\" Mikä on luonnollinen vastaus?",
     "o": [
      "Good morning.",
      "You're welcome.",
      "My name is Sadan.",
      "I am a student."
     ],
     "a": 1,
     "x": "\"You're welcome\" on luonteva vastaus kiitokseen.",
     "ol": "en"
    },
    {
     "q": "Täydennä englanninkielinen lause suomenkielisen vihjeen perusteella: \"My ____ is Sadan.\" (\"Nimeni on Sadan.\")",
     "o": [
      "sample",
      "patient",
      "student",
      "name"
     ],
     "a": 3,
     "x": "Puuttuva sana on \"name\". Kokonainen lause: My name is Sadan.",
     "ol": "en"
    },
    {
     "q": "Kertaa oppitunnin sanastoa: Mitä \"Have a nice day\" tarkoittaa?",
     "o": [
      "Potilas",
      "Hyvää huomenta",
      "Bioanalytiikka",
      "Mukavaa päivänjatkoa"
     ],
     "a": 3,
     "x": "\"Have a nice day\" tarkoittaa \"Mukavaa päivänjatkoa\".",
     "ol": "fi"
    }
   ],
   "safety": "Esittäytyminen ei korvaa potilaan henkilöllisyyden varmistamista. Se harjoitellaan oppitunnilla 2."
  },
  {
   "id": 2,
   "title": "Potilaan kohtaaminen ja tunnistaminen",
   "titleEn": "Patient communication and identification",
   "goals": [
    "Osaat kysyä potilaan koko nimen ja syntymäajan englanniksi.",
    "Ymmärrät tunnistusrannekkeen ja henkilötietojen tarkistamisen sanaston.",
    "Osaat pysäyttää tilanteen ja pyytää ohjaajalta apua, jos tiedot eivät täsmää."
   ],
   "vocab": [
    {
     "en": "Full name",
     "fi": "Koko nimi",
     "ipa": "/fʊl neɪm/",
     "ex": "Could you tell me your full name?",
     "exFi": "Voisitteko kertoa koko nimenne?"
    },
    {
     "en": "Date of birth",
     "fi": "Syntymäaika",
     "ipa": "/deɪt əv bɝθ/",
     "ex": "What is your date of birth?",
     "exFi": "Mikä on syntymäaikanne?"
    },
    {
     "en": "Identity",
     "fi": "Henkilöllisyys",
     "ipa": "/aɪˈdɛntəti/",
     "ex": "I need to confirm your identity.",
     "exFi": "Minun täytyy varmistaa henkilöllisyytenne."
    },
    {
     "en": "Wristband",
     "fi": "Tunnistusranneke",
     "ipa": "/ˈrɪstbænd/",
     "ex": "May I check your wristband?",
     "exFi": "Saanko tarkistaa tunnistusrannekkeenne?"
    },
    {
     "en": "Patient details",
     "fi": "Potilastiedot",
     "ipa": "/ˈpeɪʃənt ˈditeɪlz/",
     "ex": "I will check your patient details.",
     "exFi": "Tarkistan potilastietonne."
    },
    {
     "en": "Confirm",
     "fi": "Vahvistaa tai varmistaa",
     "ipa": "/kənˈfɝm/",
     "ex": "Please confirm your name.",
     "exFi": "Vahvistaisitteko nimenne?"
    },
    {
     "en": "Check",
     "fi": "Tarkistaa",
     "ipa": "/tʃɛk/",
     "ex": "I need to check the request.",
     "exFi": "Minun täytyy tarkistaa tutkimuspyyntö."
    },
    {
     "en": "Could you tell me...?",
     "fi": "Voisitteko kertoa...?",
     "ipa": "/kʊd ju ˈtɛl mi/",
     "ex": "Could you tell me your date of birth?",
     "exFi": "Voisitteko kertoa syntymäaikanne?"
    },
    {
     "en": "Please say your full name",
     "fi": "Kertoisitteko koko nimenne",
     "ipa": "/pliz ˈseɪ jʊr ˈfʊl ˈneɪm/",
     "ex": "Please say your full name aloud.",
     "exFi": "Kertoisitteko koko nimenne ääneen?"
    },
    {
     "en": "Is that correct?",
     "fi": "Pitääkö se paikkansa?",
     "ipa": "/ɪz ˈðæt kəˈrɛkt/",
     "ex": "Your date of birth is June 14. Is that correct?",
     "exFi": "Syntymäaikanne on 14. kesäkuuta. Pitääkö se paikkansa?"
    },
    {
     "en": "May I...?",
     "fi": "Saanko...?",
     "ipa": "/ˈmeɪ aɪ/",
     "ex": "May I check your wristband?",
     "exFi": "Saanko tarkistaa tunnistusrannekkeenne?"
    },
    {
     "en": "One moment, please",
     "fi": "Hetkinen, olkaa hyvä",
     "ipa": "/ˈwʌn ˈmoʊmənt ˈpliz/",
     "ex": "One moment, please. I will ask my supervisor.",
     "exFi": "Hetkinen, olkaa hyvä. Kysyn ohjaajaltani."
    }
   ],
   "pron": {
    "text": "Harjoittele äänteitä /θ/ sanoissa birth ja thank sekä /ɝ/ sanassa birth. Kysymyslauseen äänenpaino on tärkeä kohteliaisuudessa.",
    "focus": [
     {
      "en": "date of birth",
      "ipa": "/ˈdeɪt əv ˈbɝθ/",
      "tip": "/ɝ/ ja /θ/ sanassa birth"
     },
     {
      "en": "thank you",
      "ipa": "/ˈθæŋk ju/",
      "tip": "/θ/ sanassa thank"
     },
     {
      "en": "Could you tell me your full name?",
      "ipa": "",
      "tip": "kohtelias kysymysintonaatio"
     }
    ]
   },
   "scenario": "Sadan tunnistaa potilaan ennen näytteenottoa ohjaajan kanssa.",
   "dialogue": [
    {
     "s": "Sadan",
     "en": "Good morning. My name is Sadan. I'm a student at Metropolia.",
     "fi": "Hyvää huomenta. Nimeni on Sadan. Olen Metropolian opiskelija."
    },
    {
     "s": "Potilas",
     "en": "Good morning.",
     "fi": "Hyvää huomenta."
    },
    {
     "s": "Sadan",
     "en": "Before we begin, could you tell me your full name?",
     "fi": "Ennen kuin aloitamme, voisitteko kertoa koko nimenne?"
    },
    {
     "s": "Potilas",
     "en": "My name is Maria Johnson.",
     "fi": "Nimeni on Maria Johnson."
    },
    {
     "s": "Sadan",
     "en": "Thank you. What is your date of birth?",
     "fi": "Kiitos. Mikä on syntymäaikanne?"
    },
    {
     "s": "Potilas",
     "en": "June fourteenth, nineteen seventy.",
     "fi": "Neljästoista kesäkuuta tuhatyhdeksänsataaseitsemänkymmentä."
    },
    {
     "s": "Sadan",
     "en": "May I check your wristband as well?",
     "fi": "Saanko tarkistaa myös tunnistusrannekkeenne?"
    },
    {
     "s": "Potilas",
     "en": "Of course.",
     "fi": "Tietenkin."
    },
    {
     "s": "Sadan",
     "en": "One moment, please. I need to confirm the details with my supervisor.",
     "fi": "Hetkinen, olkaa hyvä. Minun täytyy varmistaa tiedot ohjaajani kanssa."
    }
   ],
   "listening": [
    {
     "script": "Sadan: Could you tell me your full name? Patient: My name is Maria Johnson. Sadan: What is your date of birth? Patient: June fourteenth, nineteen seventy.",
     "q": [
      "Minkä nimen potilas kertoo?",
      "Minkä syntymäajan potilas kertoo?",
      "Mitä Sadan kysyy nimen jälkeen?"
     ],
     "a": [
      "Maria Johnson.",
      "14.6.1970.",
      "Syntymäaikaa."
     ]
    },
    {
     "script": "Sadan: May I check your wristband? Patient: Yes. Sadan: One moment, please. I need to check the patient details with my supervisor.",
     "q": [
      "Minkä Sadan pyytää saada tarkistaa?",
      "Kenen kanssa Sadan tarkistaa tiedot?",
      "Mitä tarkoittaa One moment, please?"
     ],
     "a": [
      "Tunnistusrannekkeen.",
      "Ohjaajansa kanssa.",
      "Hetkinen, olkaa hyvä."
     ]
    }
   ],
   "speaking": [
    {
     "task": "Harjoittele avoimia tunnistuskysymyksiä ääneen; älä ehdota potilaalle valmista nimeä vastaukseksi.",
     "model": "Could you tell me your full name? What is your date of birth?"
    },
    {
     "task": "Potilaan rannekkeen ja pyynnön tiedoissa näkyy ristiriita. Kerro potilaalle, että tarkistat asian.",
     "model": "One moment, please. I need to check the details with my supervisor."
    },
    {
     "task": "Yhdistä edellisen oppitunnin esittäytyminen ja tämän oppitunnin kaksi tunnistuskysymystä.",
     "model": "Good morning. My name is Sadan. Could you tell me your full name and date of birth?"
    }
   ],
   "match": {
    "items": [
     "Full name",
     "Identity",
     "Patient details",
     "Could you tell me...?",
     "May I...?"
    ],
    "meanings": [
     "Potilastiedot",
     "Saanko...?",
     "Koko nimi",
     "Voisitteko kertoa...?",
     "Henkilöllisyys"
    ],
    "key": [
     3,
     5,
     1,
     4,
     2
    ]
   },
   "translate": {
    "items": [
     "Tunnistusranneke",
     "Potilastiedot",
     "Vahvistaa tai varmistaa",
     "Tarkistaa"
    ],
    "key": [
     "Wristband",
     "Patient details",
     "Confirm",
     "Check"
    ]
   },
   "fill": {
    "items": [
     "What is your date of ____?",
     "May I check your ____?",
     "One ____, please."
    ],
    "key": [
     "birth",
     "wristband",
     "moment"
    ]
   },
   "quiz": [
    {
     "q": "Mitä englanninkielinen ilmaus \"Full name\" tarkoittaa suomeksi?",
     "o": [
      "Vahvistaa tai varmistaa",
      "Henkilöllisyys",
      "Pitääkö se paikkansa?",
      "Koko nimi"
     ],
     "a": 3,
     "x": "\"Full name\" = \"Koko nimi\". Esimerkkilause: Could you tell me your full name?",
     "ol": "fi"
    },
    {
     "q": "Mitä englanninkielinen ilmaus \"Wristband\" tarkoittaa suomeksi?",
     "o": [
      "Koko nimi",
      "Kertoisitteko koko nimenne",
      "Tunnistusranneke",
      "Vahvistaa tai varmistaa"
     ],
     "a": 2,
     "x": "\"Wristband\" = \"Tunnistusranneke\". Esimerkkilause: May I check your wristband?",
     "ol": "fi"
    },
    {
     "q": "Mitä englanninkielinen ilmaus \"Check\" tarkoittaa suomeksi?",
     "o": [
      "Tunnistusranneke",
      "Tarkistaa",
      "Hetkinen, olkaa hyvä",
      "Kertoisitteko koko nimenne"
     ],
     "a": 1,
     "x": "\"Check\" = \"Tarkistaa\". Esimerkkilause: I need to check the request.",
     "ol": "fi"
    },
    {
     "q": "Mitä englanninkielinen ilmaus \"Please say your full name\" tarkoittaa suomeksi?",
     "o": [
      "Syntymäaika",
      "Kertoisitteko koko nimenne",
      "Vahvistaa tai varmistaa",
      "Saanko...?"
     ],
     "a": 1,
     "x": "\"Please say your full name\" = \"Kertoisitteko koko nimenne\". Esimerkkilause: Please say your full name aloud.",
     "ol": "fi"
    },
    {
     "q": "Mikä on ilmauksen \"Syntymäaika\" englanninkielinen vastine?",
     "o": [
      "Is that correct?",
      "Date of birth",
      "Patient details",
      "Could you tell me...?"
     ],
     "a": 1,
     "x": "Oikea ilmaus on \"Date of birth\". Mallissa: What is your date of birth?",
     "ol": "en"
    },
    {
     "q": "Mikä on ilmauksen \"Vahvistaa tai varmistaa\" englanninkielinen vastine?",
     "o": [
      "One moment, please",
      "Date of birth",
      "Confirm",
      "Please say your full name"
     ],
     "a": 2,
     "x": "Oikea ilmaus on \"Confirm\". Mallissa: Please confirm your name.",
     "ol": "en"
    },
    {
     "q": "Mikä on ilmauksen \"Saanko...?\" englanninkielinen vastine?",
     "o": [
      "Patient details",
      "Check",
      "Date of birth",
      "May I...?"
     ],
     "a": 3,
     "x": "Oikea ilmaus on \"May I...?\". Mallissa: May I check your wristband?",
     "ol": "en"
    },
    {
     "q": "Potilas kertoo eri nimen kuin tutkimuspyynnössä. Mitä Sadan sanoo?",
     "o": [
      "Please ignore the request.",
      "Everything is correct.",
      "One moment, please. I need to check the details.",
      "We can skip identification."
     ],
     "a": 2,
     "x": "Tiedot täytyy tarkistaa ennen jatkamista; oikea lause kertoo tarkistamisesta.",
     "ol": "en"
    },
    {
     "q": "Täydennä englanninkielinen lause suomenkielisen vihjeen perusteella: \"What is your date of ____?\" (\"Mikä on syntymäaikanne?\")",
     "o": [
      "name",
      "identity",
      "birth",
      "address"
     ],
     "a": 2,
     "x": "Puuttuva sana on \"birth\". Kokonainen lause: What is your date of birth?",
     "ol": "en"
    },
    {
     "q": "Kertaa aiempaa: Mitä \"Hospital\" tarkoittaa?",
     "o": [
      "Hyvää huomenta",
      "Bioanalytiikka",
      "Sairaala",
      "Hauska tavata"
     ],
     "a": 2,
     "x": "\"Hospital\" tarkoittaa \"Sairaala\".",
     "ol": "fi"
    }
   ],
   "safety": "Todellinen tunnistus tehdään aina voimassa olevan HUS- ja yksikköohjeen mukaisesti. Jos tunnistetiedoissa on ristiriita, älä jatka näytteenottoon ennen asian selvittämistä."
  },
  {
   "id": 3,
   "title": "Sairaalan tilat ja välineet",
   "titleEn": "Hospital environments and equipment",
   "goals": [
    "Tunnistat keskeiset sairaalan tilat ja tavalliset välineet englanniksi.",
    "Osaat kysyä, missä huone tai väline sijaitsee.",
    "Ymmärrät lyhyitä ohjaajan antamia sijaintiohjeita."
   ],
   "vocab": [
    {
     "en": "Ward",
     "fi": "Vuodeosasto",
     "ipa": "/wɔrd/",
     "ex": "The patient is on the third-floor ward.",
     "exFi": "Potilas on kolmannen kerroksen osastolla."
    },
    {
     "en": "Patient room",
     "fi": "Potilashuone",
     "ipa": "/ˈpeɪʃənt ˌrum/",
     "ex": "The patient room is on the left.",
     "exFi": "Potilashuone on vasemmalla."
    },
    {
     "en": "Bed",
     "fi": "Sänky",
     "ipa": "/bɛd/",
     "ex": "The patient is sitting on the bed.",
     "exFi": "Potilas istuu sängyllä."
    },
    {
     "en": "Bedside",
     "fi": "Vuoteen vieressä",
     "ipa": "/ˈbɛdˌsaɪd/",
     "ex": "The nurse is standing by the bedside.",
     "exFi": "Hoitaja seisoo vuoteen vieressä."
    },
    {
     "en": "Nurse",
     "fi": "Sairaanhoitaja",
     "ipa": "/nɝs/",
     "ex": "Please ask the nurse for help.",
     "exFi": "Pyytäkää sairaanhoitajalta apua."
    },
    {
     "en": "Doctor",
     "fi": "Lääkäri",
     "ipa": "/ˈdɑktɚ/",
     "ex": "The doctor requested a blood test.",
     "exFi": "Lääkäri pyysi verikokeen."
    },
    {
     "en": "Medical cart",
     "fi": "Hoitovaunu",
     "ipa": "/ˈmɛdɪkəl ˈkɑrt/",
     "ex": "The medical cart is outside the room.",
     "exFi": "Hoitovaunu on huoneen ulkopuolella."
    },
    {
     "en": "Gloves",
     "fi": "Käsineet",
     "ipa": "/ɡlʌvz/",
     "ex": "I need clean gloves.",
     "exFi": "Tarvitsen puhtaat käsineet."
    },
    {
     "en": "Hand sanitizer",
     "fi": "Käsihuuhde",
     "ipa": "/ˈhænd ˈsænəˌtaɪzɚ/",
     "ex": "Hand sanitizer is by the door.",
     "exFi": "Käsihuuhde on oven vieressä."
    },
    {
     "en": "Sharps container",
     "fi": "Särmäisjäteastia",
     "ipa": "/ˈʃɑrps kənˈteɪnɚ/",
     "ex": "The sharps container is on the cart.",
     "exFi": "Särmäisjäteastia on vaunussa."
    },
    {
     "en": "Sample bag",
     "fi": "Näytepussi",
     "ipa": "/ˈsæmpəl ˌbæɡ/",
     "ex": "Please place the sample in the approved bag.",
     "exFi": "Laittakaa näyte hyväksyttyyn näytepussiin."
    },
    {
     "en": "Elevator",
     "fi": "Hissi",
     "ipa": "/ˈɛləˌveɪtɚ/",
     "ex": "The elevator is at the end of the hall.",
     "exFi": "Hissi on käytävän päässä."
    }
   ],
   "pron": {
    "text": "Harjoittele sanoja ward /wɔrd/, nurse /nɝs/ ja gloves /ɡlʌvz/. Huomaa, että englannin r ääntyy amerikanenglannissa selvästi.",
    "focus": [
     {
      "en": "ward",
      "ipa": "/wɔrd/",
      "tip": "amerikkalainen r kuuluu selvästi"
     },
     {
      "en": "nurse",
      "ipa": "/nɝs/",
      "tip": "/ɝ/-äänne"
     },
     {
      "en": "gloves",
      "ipa": "/ɡlʌvz/",
      "tip": "lopussa soinnillinen /z/"
     }
    ]
   },
   "scenario": "Sadan etsii näytteenottovälineitä ennen osastokäyntiä.",
   "dialogue": [
    {
     "s": "Sadan",
     "en": "Excuse me. Where is the medical cart?",
     "fi": "Anteeksi. Missä hoitovaunu on?"
    },
    {
     "s": "Ohjaaja",
     "en": "It's outside patient room twelve.",
     "fi": "Se on potilashuoneen kaksitoista ulkopuolella."
    },
    {
     "s": "Sadan",
     "en": "Thank you. Where can I find gloves?",
     "fi": "Kiitos. Mistä löydän käsineitä?"
    },
    {
     "s": "Ohjaaja",
     "en": "They are on the cart, next to the hand sanitizer.",
     "fi": "Ne ovat vaunussa käsihuuhteen vieressä."
    },
    {
     "s": "Sadan",
     "en": "And where is the sharps container?",
     "fi": "Entä missä särmäisjäteastia on?"
    },
    {
     "s": "Ohjaaja",
     "en": "It's also on the cart.",
     "fi": "Se on myös vaunussa."
    },
    {
     "s": "Sadan",
     "en": "Great. Shall we go to the ward now?",
     "fi": "Hienoa. Mennäänkö nyt osastolle?"
    },
    {
     "s": "Ohjaaja",
     "en": "Yes. Let me check the request first.",
     "fi": "Kyllä. Tarkistan ensin tutkimuspyynnön."
    }
   ],
   "listening": [
    {
     "script": "The medical cart is outside room twelve. The gloves are next to the hand sanitizer. The elevator is at the end of the hall.",
     "q": [
      "Minkä huoneen ulkopuolella vaunu on?",
      "Minkä vieressä käsineet ovat?",
      "Missä hissi sijaitsee?"
     ],
     "a": [
      "Huoneen 12.",
      "Käsihuuhteen vieressä.",
      "Käytävän päässä."
     ]
    },
    {
     "script": "Sadan: Where is the patient room? Nurse: It is on the left, near the elevator. Sadan: Thank you. Nurse: You're welcome.",
     "q": [
      "Millä puolella potilashuone on?",
      "Minkä lähellä huone on?",
      "Miten Sadan kiittää?"
     ],
     "a": [
      "Vasemmalla.",
      "Hissin lähellä.",
      "Hän sanoo Thank you."
     ]
    }
   ],
   "speaking": [
    {
     "task": "Nimeä ääneen kuusi välinettä tai paikkaa, joita saatat nähdä osastolla.",
     "model": "Ward, patient room, bed, gloves, medical cart, sharps container."
    },
    {
     "task": "Kysy ohjaajalta, missä hoitovaunu ja käsihuuhde ovat.",
     "model": "Where is the medical cart? Where is the hand sanitizer?"
    },
    {
     "task": "Kerro yhdellä lauseella, että potilashuone on hissin lähellä.",
     "model": "The patient room is near the elevator."
    }
   ],
   "match": {
    "items": [
     "Ward",
     "Bed",
     "Nurse",
     "Gloves",
     "Sample bag"
    ],
    "meanings": [
     "Sairaanhoitaja",
     "Näytepussi",
     "Vuodeosasto",
     "Käsineet",
     "Sänky"
    ],
    "key": [
     3,
     5,
     1,
     4,
     2
    ]
   },
   "translate": {
    "items": [
     "Vuoteen vieressä",
     "Sairaanhoitaja",
     "Lääkäri",
     "Hoitovaunu"
    ],
    "key": [
     "Bedside",
     "Nurse",
     "Doctor",
     "Medical cart"
    ]
   },
   "fill": {
    "items": [
     "Where is the medical ____?",
     "The nurse is by the ____.",
     "The elevator is at the end of the ____."
    ],
    "key": [
     "cart",
     "bedside",
     "hall"
    ]
   },
   "quiz": [
    {
     "q": "Mitä englanninkielinen ilmaus \"Ward\" tarkoittaa suomeksi?",
     "o": [
      "Särmäisjäteastia",
      "Vuodeosasto",
      "Sänky",
      "Lääkäri"
     ],
     "a": 1,
     "x": "\"Ward\" = \"Vuodeosasto\". Esimerkkilause: The patient is on the third-floor ward.",
     "ol": "fi"
    },
    {
     "q": "Mitä englanninkielinen ilmaus \"Bedside\" tarkoittaa suomeksi?",
     "o": [
      "Lääkäri",
      "Vuodeosasto",
      "Käsihuuhde",
      "Vuoteen vieressä"
     ],
     "a": 3,
     "x": "\"Bedside\" = \"Vuoteen vieressä\". Esimerkkilause: The nurse is standing by the bedside.",
     "ol": "fi"
    },
    {
     "q": "Mitä englanninkielinen ilmaus \"Medical cart\" tarkoittaa suomeksi?",
     "o": [
      "Vuoteen vieressä",
      "Hoitovaunu",
      "Hissi",
      "Käsihuuhde"
     ],
     "a": 1,
     "x": "\"Medical cart\" = \"Hoitovaunu\". Esimerkkilause: The medical cart is outside the room.",
     "ol": "fi"
    },
    {
     "q": "Mitä englanninkielinen ilmaus \"Hand sanitizer\" tarkoittaa suomeksi?",
     "o": [
      "Näytepussi",
      "Käsihuuhde",
      "Lääkäri",
      "Potilashuone"
     ],
     "a": 1,
     "x": "\"Hand sanitizer\" = \"Käsihuuhde\". Esimerkkilause: Hand sanitizer is by the door.",
     "ol": "fi"
    },
    {
     "q": "Mikä on ilmauksen \"Potilashuone\" englanninkielinen vastine?",
     "o": [
      "Gloves",
      "Sharps container",
      "Patient room",
      "Nurse"
     ],
     "a": 2,
     "x": "Oikea ilmaus on \"Patient room\". Mallissa: The patient room is on the left.",
     "ol": "en"
    },
    {
     "q": "Mikä on ilmauksen \"Lääkäri\" englanninkielinen vastine?",
     "o": [
      "Patient room",
      "Hand sanitizer",
      "Doctor",
      "Elevator"
     ],
     "a": 2,
     "x": "Oikea ilmaus on \"Doctor\". Mallissa: The doctor requested a blood test.",
     "ol": "en"
    },
    {
     "q": "Mikä on ilmauksen \"Näytepussi\" englanninkielinen vastine?",
     "o": [
      "Medical cart",
      "Patient room",
      "Nurse",
      "Sample bag"
     ],
     "a": 3,
     "x": "Oikea ilmaus on \"Sample bag\". Mallissa: Please place the sample in the approved bag.",
     "ol": "en"
    },
    {
     "q": "Sadan haluaa tietää hoitovaunun sijainnin. Mikä kysymys sopii?",
     "o": [
      "Where is the medical cart?",
      "How is your blood count?",
      "Can I take your pulse?",
      "Where is your birthday?"
     ],
     "a": 0,
     "x": "Where is... kysyy sijaintia; medical cart tarkoittaa hoitovaunua.",
     "ol": "en"
    },
    {
     "q": "Täydennä englanninkielinen lause suomenkielisen vihjeen perusteella: \"Where is the medical ____?\" (\"Missä hoitovaunu on?\")",
     "o": [
      "cart",
      "bed",
      "room",
      "ward"
     ],
     "a": 0,
     "x": "Puuttuva sana on \"cart\". Kokonainen lause: Where is the medical cart?",
     "ol": "en"
    },
    {
     "q": "Kertaa aiempaa: Mitä \"Could you tell me...?\" tarkoittaa?",
     "o": [
      "Pitääkö se paikkansa?",
      "Vahvistaa tai varmistaa",
      "Syntymäaika",
      "Voisitteko kertoa...?"
     ],
     "a": 3,
     "x": "\"Could you tell me...?\" tarkoittaa \"Voisitteko kertoa...?\".",
     "ol": "fi"
    }
   ],
   "safety": "Välineiden todelliset sijainnit ja käyttöohjeet vaihtelevat yksiköittäin. Harjoitus ei määritä käytettävää työpistettä tai suojavarustusta."
  },
  {
   "id": 4,
   "title": "Anatomia ja kehonosat",
   "titleEn": "Anatomy and body terminology",
   "goals": [
    "Osaat nimetä käsivarren ja verisuoniin liittyviä kehonosia.",
    "Osaat pyytää potilasta näyttämään käsivartensa englanniksi.",
    "Tunnistat laskimon ja valtimon englanninkieliset sanat."
   ],
   "vocab": [
    {
     "en": "Arm",
     "fi": "Käsivarsi",
     "ipa": "/ɑrm/",
     "ex": "Could I see your arm, please?",
     "exFi": "Voisinko nähdä käsivartenne?"
    },
    {
     "en": "Hand",
     "fi": "Käsi",
     "ipa": "/hænd/",
     "ex": "Please rest your hand here.",
     "exFi": "Laskekaa kätenne tähän."
    },
    {
     "en": "Wrist",
     "fi": "Ranne",
     "ipa": "/rɪst/",
     "ex": "The wrist is below the forearm.",
     "exFi": "Ranne on kyynärvarren alapuolella."
    },
    {
     "en": "Elbow",
     "fi": "Kyynärpää",
     "ipa": "/ˈɛlˌboʊ/",
     "ex": "Please keep your elbow comfortable.",
     "exFi": "Pitäkää kyynärpää mukavassa asennossa."
    },
    {
     "en": "Vein",
     "fi": "Laskimo",
     "ipa": "/veɪn/",
     "ex": "The vein is a blood vessel.",
     "exFi": "Laskimo on verisuoni."
    },
    {
     "en": "Artery",
     "fi": "Valtimo",
     "ipa": "/ˈɑrtəri/",
     "ex": "An artery carries blood away from the heart.",
     "exFi": "Valtimo kuljettaa verta sydämestä poispäin."
    },
    {
     "en": "Skin",
     "fi": "Iho",
     "ipa": "/skɪn/",
     "ex": "The skin needs to be checked.",
     "exFi": "Iho täytyy tarkistaa."
    },
    {
     "en": "Muscle",
     "fi": "Lihas",
     "ipa": "/ˈmʌsəl/",
     "ex": "Try to relax the muscle.",
     "exFi": "Yrittäkää rentouttaa lihas."
    },
    {
     "en": "Heart",
     "fi": "Sydän",
     "ipa": "/hɑrt/",
     "ex": "The heart pumps blood.",
     "exFi": "Sydän pumppaa verta."
    },
    {
     "en": "Blood vessel",
     "fi": "Verisuoni",
     "ipa": "/ˈblʌd ˌvɛsəl/",
     "ex": "A vein is a type of blood vessel.",
     "exFi": "Laskimo on eräänlainen verisuoni."
    },
    {
     "en": "Circulation",
     "fi": "Verenkierto",
     "ipa": "/ˌsɝkjəˈleɪʃən/",
     "ex": "The heart supports blood circulation.",
     "exFi": "Sydän ylläpitää verenkiertoa."
    },
    {
     "en": "Elbow crease",
     "fi": "Kyynärtaive",
     "ipa": "/ˈɛlˌboʊ ˌkris/",
     "ex": "The elbow crease is on the inside of the elbow.",
     "exFi": "Kyynärtaive on kyynärpään sisäpuolella."
    }
   ],
   "pron": {
    "text": "Harjoittele vein /veɪn/, artery /ˈɑrtəri/ ja wrist /rɪst/: sanan wrist alussa oleva w ei äänny.",
    "focus": [
     {
      "en": "vein",
      "ipa": "/veɪn/",
      "tip": "diftongi /eɪ/"
     },
     {
      "en": "artery",
      "ipa": "/ˈɑrtəri/",
      "tip": "paino ensimmäisellä tavulla"
     },
     {
      "en": "wrist",
      "ipa": "/rɪst/",
      "tip": "w ei äänny"
     }
    ]
   },
   "scenario": "Sadan kysyy potilaalta käsivarresta ennen näytteenottoa.",
   "dialogue": [
    {
     "s": "Sadan",
     "en": "Good morning. I'm Sadan, a student at Metropolia.",
     "fi": "Hyvää huomenta. Olen Sadan, Metropolian opiskelija."
    },
    {
     "s": "Potilas",
     "en": "Good morning.",
     "fi": "Hyvää huomenta."
    },
    {
     "s": "Sadan",
     "en": "Could I see your arm, please?",
     "fi": "Voisinko nähdä käsivartenne?"
    },
    {
     "s": "Potilas",
     "en": "This arm?",
     "fi": "Tämän käsivarrenko?"
    },
    {
     "s": "Sadan",
     "en": "Yes, thank you. Are you comfortable?",
     "fi": "Kyllä, kiitos. Onko teillä hyvä asento?"
    },
    {
     "s": "Potilas",
     "en": "My elbow is a little sore.",
     "fi": "Kyynärpääni on vähän kipeä."
    },
    {
     "s": "Sadan",
     "en": "Thank you for telling me. I'll ask my supervisor to check.",
     "fi": "Kiitos, kun kerroitte. Pyydän ohjaajaani tarkistamaan tilanteen."
    },
    {
     "s": "Potilas",
     "en": "All right.",
     "fi": "Selvä."
    }
   ],
   "listening": [
    {
     "script": "The patient says: My wrist hurts, but my shoulder feels fine. Sadan says: Thank you for telling me. I will check with my supervisor.",
     "q": [
      "Mikä kohta potilaalla on kipeä?",
      "Mikä kohta ei oireile?",
      "Mitä Sadan aikoo tehdä?"
     ],
     "a": [
      "Ranne.",
      "Olkapää.",
      "Tarkistaa asian ohjaajansa kanssa."
     ]
    },
    {
     "script": "Sadan: Could I see your arm? Patient: Yes. Sadan: Please rest your hand here. Patient: Like this? Sadan: Yes, thank you.",
     "q": [
      "Minkä kehonosan Sadan haluaa nähdä?",
      "Mihin potilaan tulee laskea kätensä?",
      "Mitä Sadan sanoo lopuksi?"
     ],
     "a": [
      "Käsivarren.",
      "Tähän osoitettuun paikkaan.",
      "Yes, thank you."
     ]
    }
   ],
   "speaking": [
    {
     "task": "Nimeä kuvitteellisen käsivarren osat englanniksi kyynärpäästä ranteeseen.",
     "model": "Elbow, forearm, wrist, hand."
    },
    {
     "task": "Pyydä potilasta näyttämään käsivarsi ja laskemaan käsi tuelle.",
     "model": "Could I see your arm, please? Please rest your hand here."
    },
    {
     "task": "Potilas kertoo kivusta kyynärpäässä. Kiitä tiedosta ja sano tarkistavasi asian.",
     "model": "Thank you for telling me. I'll check with my supervisor."
    }
   ],
   "match": {
    "items": [
     "Arm",
     "Wrist",
     "Vein",
     "Muscle",
     "Circulation"
    ],
    "meanings": [
     "Laskimo",
     "Verenkierto",
     "Käsivarsi",
     "Lihas",
     "Ranne"
    ],
    "key": [
     3,
     5,
     1,
     4,
     2
    ]
   },
   "translate": {
    "items": [
     "Kyynärpää",
     "Laskimo",
     "Valtimo",
     "Iho"
    ],
    "key": [
     "Elbow",
     "Vein",
     "Artery",
     "Skin"
    ]
   },
   "fill": {
    "items": [
     "Could I see your ____, please?",
     "A vein is a blood ____.",
     "Please rest your ____ here."
    ],
    "key": [
     "arm",
     "vessel",
     "hand"
    ]
   },
   "quiz": [
    {
     "q": "Mitä englanninkielinen ilmaus \"Arm\" tarkoittaa suomeksi?",
     "o": [
      "Verisuoni",
      "Käsivarsi",
      "Ranne",
      "Valtimo"
     ],
     "a": 1,
     "x": "\"Arm\" = \"Käsivarsi\". Esimerkkilause: Could I see your arm, please?",
     "ol": "fi"
    },
    {
     "q": "Mitä englanninkielinen ilmaus \"Elbow\" tarkoittaa suomeksi?",
     "o": [
      "Valtimo",
      "Kyynärpää",
      "Sydän",
      "Käsivarsi"
     ],
     "a": 1,
     "x": "\"Elbow\" = \"Kyynärpää\". Esimerkkilause: Please keep your elbow comfortable.",
     "ol": "fi"
    },
    {
     "q": "Mitä englanninkielinen ilmaus \"Skin\" tarkoittaa suomeksi?",
     "o": [
      "Kyynärtaive",
      "Kyynärpää",
      "Sydän",
      "Iho"
     ],
     "a": 3,
     "x": "\"Skin\" = \"Iho\". Esimerkkilause: The skin needs to be checked.",
     "ol": "fi"
    },
    {
     "q": "Mitä englanninkielinen ilmaus \"Heart\" tarkoittaa suomeksi?",
     "o": [
      "Sydän",
      "Valtimo",
      "Verenkierto",
      "Käsi"
     ],
     "a": 0,
     "x": "\"Heart\" = \"Sydän\". Esimerkkilause: The heart pumps blood.",
     "ol": "fi"
    },
    {
     "q": "Mikä on ilmauksen \"Käsi\" englanninkielinen vastine?",
     "o": [
      "Muscle",
      "Vein",
      "Blood vessel",
      "Hand"
     ],
     "a": 3,
     "x": "Oikea ilmaus on \"Hand\". Mallissa: Please rest your hand here.",
     "ol": "en"
    },
    {
     "q": "Mikä on ilmauksen \"Valtimo\" englanninkielinen vastine?",
     "o": [
      "Hand",
      "Elbow crease",
      "Artery",
      "Heart"
     ],
     "a": 2,
     "x": "Oikea ilmaus on \"Artery\". Mallissa: An artery carries blood away from the heart.",
     "ol": "en"
    },
    {
     "q": "Mikä on ilmauksen \"Verenkierto\" englanninkielinen vastine?",
     "o": [
      "Circulation",
      "Skin",
      "Vein",
      "Hand"
     ],
     "a": 0,
     "x": "Oikea ilmaus on \"Circulation\". Mallissa: The heart supports blood circulation.",
     "ol": "en"
    },
    {
     "q": "Potilas sanoo \"My elbow hurts.\" Mikä vastaus on sopiva?",
     "o": [
      "The blood test is finished.",
      "Your name is Sadan.",
      "You must stay silent.",
      "Thank you for telling me. I will check with my supervisor."
     ],
     "a": 3,
     "x": "Kivusta kiitetään ja se tarkistetaan ohjaajan kanssa.",
     "ol": "en"
    },
    {
     "q": "Täydennä englanninkielinen lause suomenkielisen vihjeen perusteella: \"A vein is a blood ____.\" (\"Laskimo on verisuoni.\")",
     "o": [
      "elbow",
      "vessel",
      "muscle",
      "artery"
     ],
     "a": 1,
     "x": "Puuttuva sana on \"vessel\". Kokonainen lause: A vein is a blood vessel.",
     "ol": "en"
    },
    {
     "q": "Kertaa aiempaa: Mitä \"Gloves\" tarkoittaa?",
     "o": [
      "Särmäisjäteastia",
      "Lääkäri",
      "Käsineet",
      "Potilashuone"
     ],
     "a": 2,
     "x": "\"Gloves\" tarkoittaa \"Käsineet\".",
     "ol": "fi"
    }
   ],
   "safety": "Anatomian sanat ovat kielenopiskelua. Pistokohdan valinta on kliininen päätös, joka tehdään ohjauksessa ja yksikköohjeiden mukaan."
  },
  {
   "id": 5,
   "title": "Veri ja veren osat",
   "titleEn": "Blood and blood components",
   "goals": [
    "Tunnistat veren keskeiset osat englanniksi.",
    "Osaat selittää lyhyesti punasolujen, valkosolujen ja verihiutaleiden tehtäviä.",
    "Ymmärrät seerumin ja plasman termit ilman yksityiskohtaista analytiikkaa."
   ],
   "vocab": [
    {
     "en": "Blood",
     "fi": "Veri",
     "ipa": "/blʌd/",
     "ex": "Blood carries oxygen around the body.",
     "exFi": "Veri kuljettaa happea elimistössä."
    },
    {
     "en": "Red blood cell",
     "fi": "Punasolu",
     "ipa": "/ˈrɛd ˈblʌd ˌsɛl/",
     "ex": "A red blood cell carries oxygen.",
     "exFi": "Punasolu kuljettaa happea."
    },
    {
     "en": "White blood cell",
     "fi": "Valkosolu",
     "ipa": "/ˈwaɪt ˈblʌd ˌsɛl/",
     "ex": "White blood cells help fight infections.",
     "exFi": "Valkosolut auttavat torjumaan infektioita."
    },
    {
     "en": "Platelet",
     "fi": "Verihiutale",
     "ipa": "/ˈpleɪtlət/",
     "ex": "Platelets help blood clot.",
     "exFi": "Verihiutaleet auttavat verta hyytymään."
    },
    {
     "en": "Plasma",
     "fi": "Plasma",
     "ipa": "/ˈplæzmə/",
     "ex": "Plasma is the liquid part of blood.",
     "exFi": "Plasma on veren nestemäinen osa."
    },
    {
     "en": "Serum",
     "fi": "Seerumi",
     "ipa": "/ˈsɪrəm/",
     "ex": "Serum is used in many laboratory tests.",
     "exFi": "Seerumia käytetään monissa laboratoriotutkimuksissa."
    },
    {
     "en": "Hemoglobin",
     "fi": "Hemoglobiini",
     "ipa": "/ˌhiməˈɡloʊbɪn/",
     "ex": "Hemoglobin is found in red blood cells.",
     "exFi": "Hemoglobiinia on punasoluissa."
    },
    {
     "en": "Oxygen",
     "fi": "Happi",
     "ipa": "/ˈɑksɪdʒən/",
     "ex": "Red blood cells transport oxygen.",
     "exFi": "Punasolut kuljettavat happea."
    },
    {
     "en": "Clotting",
     "fi": "Hyytyminen",
     "ipa": "/ˈklɑtɪŋ/",
     "ex": "Platelets are important in clotting.",
     "exFi": "Verihiutaleet ovat tärkeitä hyytymisessä."
    },
    {
     "en": "Antibody",
     "fi": "Vasta-aine",
     "ipa": "/ˈæntiˌbɑdi/",
     "ex": "An antibody helps the immune system recognize targets.",
     "exFi": "Vasta-aine auttaa immuunijärjestelmää tunnistamaan kohteita."
    },
    {
     "en": "Immune system",
     "fi": "Immuunijärjestelmä",
     "ipa": "/ɪˈmjun ˌsɪstəm/",
     "ex": "The immune system protects the body.",
     "exFi": "Immuunijärjestelmä suojaa elimistöä."
    },
    {
     "en": "Centrifuge",
     "fi": "Sentrifugi",
     "ipa": "/ˈsɛntrəˌfjudʒ/",
     "ex": "The laboratory uses a centrifuge to separate sample components.",
     "exFi": "Laboratorio käyttää sentrifugia näytteen osien erottamiseen."
    }
   ],
   "pron": {
    "text": "Harjoittele hemoglobin /ˌhiməˈɡloʊbɪn/, platelet /ˈpleɪtlət/ ja centrifuge /ˈsɛntrəfjudʒ/.",
    "focus": [
     {
      "en": "hemoglobin",
      "ipa": "/ˌhiməˈɡloʊbɪn/",
      "tip": "pääpaino tavulla glo"
     },
     {
      "en": "platelet",
      "ipa": "/ˈpleɪtlət/",
      "tip": "paino ensimmäisellä tavulla"
     },
     {
      "en": "centrifuge",
      "ipa": "/ˈsɛntrəˌfjudʒ/",
      "tip": "lopussa /dʒ/"
     }
    ]
   },
   "scenario": "Sadan keskustelee ohjaajan kanssa veren koostumuksesta.",
   "dialogue": [
    {
     "s": "Sadan",
     "en": "What is the difference between plasma and serum?",
     "fi": "Mitä eroa plasmalla ja seerumilla on?"
    },
    {
     "s": "Ohjaaja",
     "en": "Both are liquid sample materials, but they are prepared differently.",
     "fi": "Molemmat ovat nestemäisiä näytemateriaaleja, mutta ne valmistetaan eri tavoin."
    },
    {
     "s": "Sadan",
     "en": "And what do red blood cells do?",
     "fi": "Entä mitä punasolut tekevät?"
    },
    {
     "s": "Ohjaaja",
     "en": "They carry oxygen around the body.",
     "fi": "Ne kuljettavat happea elimistössä."
    },
    {
     "s": "Sadan",
     "en": "Do platelets help with clotting?",
     "fi": "Auttavatko verihiutaleet hyytymisessä?"
    },
    {
     "s": "Ohjaaja",
     "en": "Yes, they do. White blood cells have a different role.",
     "fi": "Kyllä auttavat. Valkosoluilla on eri tehtävä."
    },
    {
     "s": "Sadan",
     "en": "They help fight infections, right?",
     "fi": "Ne auttavat torjumaan infektioita, eikö niin?"
    },
    {
     "s": "Ohjaaja",
     "en": "Exactly. Well done.",
     "fi": "Juuri niin. Hyvin tehty."
    }
   ],
   "listening": [
    {
     "script": "Red blood cells carry oxygen. White blood cells help fight infection. Platelets are important for blood clotting.",
     "q": [
      "Mikä kuljettaa happea?",
      "Mitkä auttavat torjumaan infektioita?",
      "Mitkä ovat tärkeitä hyytymisessä?"
     ],
     "a": [
      "Punasolut.",
      "Valkosolut.",
      "Verihiutaleet."
     ]
    },
    {
     "script": "Sadan: Is this serum? Supervisor: No, this is plasma. Sadan: Thank you. I will check the sample type on the request.",
     "q": [
      "Mitä näytemateriaalia ohjaaja sanoo sen olevan?",
      "Mitä Sadan oli ensin luullut?",
      "Mistä Sadan tarkistaa näytemateriaalin?"
     ],
     "a": [
      "Plasmaa.",
      "Seerumia.",
      "Tutkimuspyynnöstä."
     ]
    }
   ],
   "speaking": [
    {
     "task": "Selitä ääneen kolmella lyhyellä englanninkielisellä lauseella punasolujen, valkosolujen ja verihiutaleiden tehtävät.",
     "model": "Red blood cells carry oxygen. White blood cells help fight infections. Platelets help blood clot."
    },
    {
     "task": "Kysy ohjaajalta, onko kuvitteellinen näyte seerumia vai plasmaa.",
     "model": "Is this serum or plasma?"
    },
    {
     "task": "Kerro, että hemoglobiinia on punasoluissa.",
     "model": "Hemoglobin is found in red blood cells."
    }
   ],
   "match": {
    "items": [
     "Blood",
     "White blood cell",
     "Plasma",
     "Oxygen",
     "Immune system"
    ],
    "meanings": [
     "Plasma",
     "Immuunijärjestelmä",
     "Veri",
     "Happi",
     "Valkosolu"
    ],
    "key": [
     3,
     5,
     1,
     4,
     2
    ]
   },
   "translate": {
    "items": [
     "Verihiutale",
     "Plasma",
     "Seerumi",
     "Hemoglobiini"
    ],
    "key": [
     "Platelet",
     "Plasma",
     "Serum",
     "Hemoglobin"
    ]
   },
   "fill": {
    "items": [
     "Red blood cells carry ____.",
     "Platelets help blood ____.",
     "The immune ____ protects the body."
    ],
    "key": [
     "oxygen",
     "clot",
     "system"
    ]
   },
   "quiz": [
    {
     "q": "Mitä englanninkielinen ilmaus \"Blood\" tarkoittaa suomeksi?",
     "o": [
      "Seerumi",
      "Veri",
      "Vasta-aine",
      "Valkosolu"
     ],
     "a": 1,
     "x": "\"Blood\" = \"Veri\". Esimerkkilause: Blood carries oxygen around the body.",
     "ol": "fi"
    },
    {
     "q": "Mitä englanninkielinen ilmaus \"Platelet\" tarkoittaa suomeksi?",
     "o": [
      "Hyytyminen",
      "Verihiutale",
      "Seerumi",
      "Veri"
     ],
     "a": 1,
     "x": "\"Platelet\" = \"Verihiutale\". Esimerkkilause: Platelets help blood clot.",
     "ol": "fi"
    },
    {
     "q": "Mitä englanninkielinen ilmaus \"Hemoglobin\" tarkoittaa suomeksi?",
     "o": [
      "Sentrifugi",
      "Verihiutale",
      "Hemoglobiini",
      "Hyytyminen"
     ],
     "a": 2,
     "x": "\"Hemoglobin\" = \"Hemoglobiini\". Esimerkkilause: Hemoglobin is found in red blood cells.",
     "ol": "fi"
    },
    {
     "q": "Mitä englanninkielinen ilmaus \"Clotting\" tarkoittaa suomeksi?",
     "o": [
      "Immuunijärjestelmä",
      "Hyytyminen",
      "Seerumi",
      "Punasolu"
     ],
     "a": 1,
     "x": "\"Clotting\" = \"Hyytyminen\". Esimerkkilause: Platelets are important in clotting.",
     "ol": "fi"
    },
    {
     "q": "Mikä on ilmauksen \"Punasolu\" englanninkielinen vastine?",
     "o": [
      "Oxygen",
      "Antibody",
      "Plasma",
      "Red blood cell"
     ],
     "a": 3,
     "x": "Oikea ilmaus on \"Red blood cell\". Mallissa: A red blood cell carries oxygen.",
     "ol": "en"
    },
    {
     "q": "Mikä on ilmauksen \"Seerumi\" englanninkielinen vastine?",
     "o": [
      "Centrifuge",
      "Clotting",
      "Serum",
      "Red blood cell"
     ],
     "a": 2,
     "x": "Oikea ilmaus on \"Serum\". Mallissa: Serum is used in many laboratory tests.",
     "ol": "en"
    },
    {
     "q": "Mikä on ilmauksen \"Immuunijärjestelmä\" englanninkielinen vastine?",
     "o": [
      "Immune system",
      "Hemoglobin",
      "Red blood cell",
      "Plasma"
     ],
     "a": 0,
     "x": "Oikea ilmaus on \"Immune system\". Mallissa: The immune system protects the body.",
     "ol": "en"
    },
    {
     "q": "Ohjaaja kysyy punasolujen tehtävää. Mikä vastaus on oikein?",
     "o": [
      "Platelets carry oxygen.",
      "Plasma is a needle.",
      "Serum is a white blood cell.",
      "Red blood cells carry oxygen."
     ],
     "a": 3,
     "x": "Punasolut kuljettavat happea. Muut vaihtoehdot sekoittavat eri käsitteet.",
     "ol": "en"
    },
    {
     "q": "Täydennä englanninkielinen lause suomenkielisen vihjeen perusteella: \"Red blood cells carry ____.\" (\"Punasolut kuljettavat happea.\")",
     "o": [
      "serum",
      "platelets",
      "oxygen",
      "clotting"
     ],
     "a": 2,
     "x": "Puuttuva sana on \"oxygen\". Kokonainen lause: Red blood cells carry oxygen.",
     "ol": "en"
    },
    {
     "q": "Kertaa aiempaa: Mitä \"Muscle\" tarkoittaa?",
     "o": [
      "Valtimo",
      "Käsi",
      "Verisuoni",
      "Lihas"
     ],
     "a": 3,
     "x": "\"Muscle\" tarkoittaa \"Lihas\".",
     "ol": "fi"
    }
   ],
   "safety": "Seerumin ja plasman erot sekä erottelukäytännöt opiskellaan erikseen laboratoriotyön ohjeiden mukaan; tässä harjoitellaan englanninkielisiä käsitteitä."
  },
  {
   "id": 6,
   "title": "Verinäytteenoton välineet",
   "titleEn": "Blood collection equipment",
   "goals": [
    "Tunnistat 12 tavallista verinäytteenottotermiä englanniksi.",
    "Osaat pyytää oikean nimistä välinettä ohjaajalta.",
    "Osaat sanoa, että välineen tai putken valinta pitää tarkistaa."
   ],
   "vocab": [
    {
     "en": "Blood sample",
     "fi": "Verinäyte",
     "ipa": "/ˈblʌd ˌsæmpəl/",
     "ex": "We need a blood sample for this test.",
     "exFi": "Tarvitsemme verinäytteen tätä tutkimusta varten."
    },
    {
     "en": "Blood collection",
     "fi": "Verinäytteenotto",
     "ipa": "/ˈblʌd kəˌlɛkʃən/",
     "ex": "Blood collection is part of laboratory work.",
     "exFi": "Verinäytteenotto kuuluu laboratoriotyöhön."
    },
    {
     "en": "Safety needle",
     "fi": "Turvaneula",
     "ipa": "/ˈseɪfti ˌnidəl/",
     "ex": "The supervisor shows Sadan a safety needle.",
     "exFi": "Ohjaaja näyttää Sadanille turvaneulan."
    },
    {
     "en": "Butterfly needle",
     "fi": "Siipineula",
     "ipa": "/ˈbʌtɚˌflaɪ ˌnidəl/",
     "ex": "A butterfly needle is also called a winged needle.",
     "exFi": "Siipineulaa kutsutaan myös siivelliseksi neulaksi."
    },
    {
     "en": "Needle holder",
     "fi": "Neulanpidike",
     "ipa": "/ˈnidəl ˌhoʊldɚ/",
     "ex": "The needle holder is on the cart.",
     "exFi": "Neulanpidike on vaunussa."
    },
    {
     "en": "Tourniquet",
     "fi": "Puristusside eli staasi",
     "ipa": "/ˈtɝnɪkɪt/",
     "ex": "The tourniquet is in the equipment tray.",
     "exFi": "Puristusside on välinetarjottimella."
    },
    {
     "en": "Collection tube",
     "fi": "Näyteputki",
     "ipa": "/kəˈlɛkʃən ˌtub/",
     "ex": "Please check the collection tube.",
     "exFi": "Tarkistakaa näyteputki."
    },
    {
     "en": "Tube label",
     "fi": "Näytetarra",
     "ipa": "/ˈtub ˌleɪbəl/",
     "ex": "The tube label must match the patient details.",
     "exFi": "Näytetarran tietojen pitää vastata potilastietoja."
    },
    {
     "en": "Antiseptic wipe",
     "fi": "Ihonpuhdistuslappu",
     "ipa": "/ˌæntəˈsɛptɪk ˈwaɪp/",
     "ex": "The antiseptic wipe is in the supply tray.",
     "exFi": "Ihonpuhdistuslappu on tarvikeastiassa."
    },
    {
     "en": "Gauze",
     "fi": "Harsotaitos",
     "ipa": "/ɡɔz/",
     "ex": "Please hand me the gauze.",
     "exFi": "Antaisitteko minulle harsotaitoksen?"
    },
    {
     "en": "Adhesive bandage",
     "fi": "Laastari",
     "ipa": "/ədˈhisɪv ˈbændɪdʒ/",
     "ex": "The adhesive bandage is in the drawer.",
     "exFi": "Laastari on laatikossa."
    },
    {
     "en": "Venipuncture",
     "fi": "Laskimopunktio",
     "ipa": "/ˈvɛnəˌpʌŋktʃɚ/",
     "ex": "Venipuncture is a way to collect a venous blood sample.",
     "exFi": "Laskimopunktiolla voidaan ottaa laskimoverinäyte."
    }
   ],
   "pron": {
    "text": "Harjoittele tourniquet /ˈtɝnɪkɪt/, venipuncture /ˈvɛnəˌpʌŋktʃɚ/ ja gauze /ɡɔz/. Äännä butterfly kahdessa osassa.",
    "focus": [
     {
      "en": "tourniquet",
      "ipa": "/ˈtɝnɪkɪt/",
      "tip": "amerikanenglannissa /ˈtɝnɪkɪt/"
     },
     {
      "en": "venipuncture",
      "ipa": "/ˈvɛnəˌpʌŋktʃɚ/",
      "tip": "paino alussa"
     },
     {
      "en": "gauze",
      "ipa": "/ɡɔz/",
      "tip": "yksi tavu"
     },
     {
      "en": "butterfly",
      "ipa": "/ˈbʌtɚˌflaɪ/",
      "tip": "kahdessa osassa: butter + fly"
     }
    ]
   },
   "scenario": "Sadan valmistelee ohjaajan kanssa työskentelyä ja kysyy välineiden nimiä.",
   "dialogue": [
    {
     "s": "Sadan",
     "en": "Could you show me the safety needle, please?",
     "fi": "Voisitko näyttää minulle turvaneulan?"
    },
    {
     "s": "Ohjaaja",
     "en": "Of course. Here it is.",
     "fi": "Tietenkin. Tässä se on."
    },
    {
     "s": "Sadan",
     "en": "Is this a butterfly needle?",
     "fi": "Onko tämä siipineula?"
    },
    {
     "s": "Ohjaaja",
     "en": "Yes. These are two different needle types.",
     "fi": "Kyllä. Nämä ovat kaksi erilaista neulatyyppiä."
    },
    {
     "s": "Sadan",
     "en": "Where can I find the collection tubes?",
     "fi": "Mistä löydän näyteputket?"
    },
    {
     "s": "Ohjaaja",
     "en": "On the cart. Check the request before selecting a tube.",
     "fi": "Vaunusta. Tarkista tutkimuspyyntö ennen putken valitsemista."
    },
    {
     "s": "Sadan",
     "en": "I will also check the tube labels.",
     "fi": "Tarkistan myös näytetarrat."
    },
    {
     "s": "Ohjaaja",
     "en": "Good. Ask me whenever you're unsure.",
     "fi": "Hyvä. Kysy aina, jos olet epävarma."
    }
   ],
   "listening": [
    {
     "script": "Supervisor: Please bring the needle holder, collection tubes, and gauze. Sadan: I will check the tubes against the request first.",
     "q": [
      "Mitä kolmea tarviketta ohjaaja pyytää?",
      "Mitä Sadan tarkistaa ensin?",
      "Sanooko ohjaaja tarvitsevansa laastaria?"
     ],
     "a": [
      "Neulanpidikkeen, näyteputket ja harsotaitoksen.",
      "Putket tutkimuspyyntöä vasten.",
      "Ei tässä lauseessa."
     ]
    },
    {
     "script": "Sadan: Is this a safety needle or a butterfly needle? Supervisor: It is a safety needle. The butterfly needle is in the other tray.",
     "q": [
      "Mikä neula Sadanilla on?",
      "Missä siipineula on?",
      "Onko kyse samasta neulatyypistä?"
     ],
     "a": [
      "Turvaneula.",
      "Toisella tarjottimella.",
      "Ei, kahdesta erilaisesta."
     ]
    }
   ],
   "speaking": [
    {
     "task": "Nimeä ääneen kaikki kahdeksan välinettä, jotka muistat ilman sanastoa.",
     "model": "Safety needle, butterfly needle, tourniquet, collection tube, needle holder, gauze, tube label, adhesive bandage."
    },
    {
     "task": "Kysy ohjaajalta, onko väline turvaneula vai siipineula.",
     "model": "Is this a safety needle or a butterfly needle?"
    },
    {
     "task": "Kerro, että tarkistat tutkimuspyynnön ennen näyteputken valintaa.",
     "model": "I will check the request before choosing a collection tube."
    }
   ],
   "match": {
    "items": [
     "Blood sample",
     "Safety needle",
     "Needle holder",
     "Tube label",
     "Adhesive bandage"
    ],
    "meanings": [
     "Neulanpidike",
     "Laastari",
     "Verinäyte",
     "Näytetarra",
     "Turvaneula"
    ],
    "key": [
     3,
     5,
     1,
     4,
     2
    ]
   },
   "translate": {
    "items": [
     "Siipineula",
     "Neulanpidike",
     "Puristusside eli staasi",
     "Näyteputki"
    ],
    "key": [
     "Butterfly needle",
     "Needle holder",
     "Tourniquet",
     "Collection tube"
    ]
   },
   "fill": {
    "items": [
     "Please check the tube ____.",
     "The ____ is in the equipment tray.",
     "I will check the collection ____."
    ],
    "key": [
     "label",
     "tourniquet",
     "tube"
    ]
   },
   "quiz": [
    {
     "q": "Mitä englanninkielinen ilmaus \"Blood sample\" tarkoittaa suomeksi?",
     "o": [
      "Verinäyte",
      "Puristusside eli staasi",
      "Turvaneula",
      "Harsotaitos"
     ],
     "a": 0,
     "x": "\"Blood sample\" = \"Verinäyte\". Esimerkkilause: We need a blood sample for this test.",
     "ol": "fi"
    },
    {
     "q": "Mitä englanninkielinen ilmaus \"Butterfly needle\" tarkoittaa suomeksi?",
     "o": [
      "Siipineula",
      "Puristusside eli staasi",
      "Verinäyte",
      "Ihonpuhdistuslappu"
     ],
     "a": 0,
     "x": "\"Butterfly needle\" = \"Siipineula\". Esimerkkilause: A butterfly needle is also called a winged needle.",
     "ol": "fi"
    },
    {
     "q": "Mitä englanninkielinen ilmaus \"Collection tube\" tarkoittaa suomeksi?",
     "o": [
      "Ihonpuhdistuslappu",
      "Laskimopunktio",
      "Siipineula",
      "Näyteputki"
     ],
     "a": 3,
     "x": "\"Collection tube\" = \"Näyteputki\". Esimerkkilause: Please check the collection tube.",
     "ol": "fi"
    },
    {
     "q": "Mitä englanninkielinen ilmaus \"Antiseptic wipe\" tarkoittaa suomeksi?",
     "o": [
      "Laastari",
      "Verinäytteenotto",
      "Ihonpuhdistuslappu",
      "Puristusside eli staasi"
     ],
     "a": 2,
     "x": "\"Antiseptic wipe\" = \"Ihonpuhdistuslappu\". Esimerkkilause: The antiseptic wipe is in the supply tray.",
     "ol": "fi"
    },
    {
     "q": "Mikä on ilmauksen \"Verinäytteenotto\" englanninkielinen vastine?",
     "o": [
      "Blood collection",
      "Needle holder",
      "Gauze",
      "Tube label"
     ],
     "a": 0,
     "x": "Oikea ilmaus on \"Blood collection\". Mallissa: Blood collection is part of laboratory work.",
     "ol": "en"
    },
    {
     "q": "Mikä on ilmauksen \"Puristusside eli staasi\" englanninkielinen vastine?",
     "o": [
      "Venipuncture",
      "Antiseptic wipe",
      "Blood collection",
      "Tourniquet"
     ],
     "a": 3,
     "x": "Oikea ilmaus on \"Tourniquet\". Mallissa: The tourniquet is in the equipment tray.",
     "ol": "en"
    },
    {
     "q": "Mikä on ilmauksen \"Laastari\" englanninkielinen vastine?",
     "o": [
      "Collection tube",
      "Blood collection",
      "Adhesive bandage",
      "Needle holder"
     ],
     "a": 2,
     "x": "Oikea ilmaus on \"Adhesive bandage\". Mallissa: The adhesive bandage is in the drawer.",
     "ol": "en"
    },
    {
     "q": "Sadan ei ole varma oikeasta putkesta. Mikä lause sopii?",
     "o": [
      "I never check the tube label.",
      "The cap color is always enough.",
      "I will check the test request with my supervisor.",
      "All samples use the same tube."
     ],
     "a": 2,
     "x": "Putkivalinta tarkistetaan pyynnöstä ja tarvittaessa ohjaajalta.",
     "ol": "en"
    },
    {
     "q": "Täydennä englanninkielinen lause suomenkielisen vihjeen perusteella: \"Please check the tube ____.\" (\"Tarkistakaa näytetarra.\")",
     "o": [
      "sample",
      "patient",
      "label",
      "needle"
     ],
     "a": 2,
     "x": "Puuttuva sana on \"label\". Kokonainen lause: Please check the tube label.",
     "ol": "en"
    },
    {
     "q": "Kertaa aiempaa: Mitä \"Oxygen\" tarkoittaa?",
     "o": [
      "Happi",
      "Punasolu",
      "Vasta-aine",
      "Seerumi"
     ],
     "a": 0,
     "x": "\"Oxygen\" tarkoittaa \"Happi\".",
     "ol": "fi"
    }
   ],
   "safety": "Älä päättele oikeaa näyteputkea pelkän korkin värin perusteella. Putken valinta, järjestys ja neulan käyttö määräytyvät voimassa olevista ohjeista ja ohjauksesta."
  },
  {
   "id": 7,
   "title": "Verinäytteenoton selittäminen",
   "titleEn": "Explaining blood collection",
   "goals": [
    "Osaat selittää lyhyesti, miksi olet ottamassa verinäytettä.",
    "Osaat kertoa toimenpiteestä rauhallisesti ja ymmärrettävästi.",
    "Osaat kysyä, onko potilas valmis, ja kuvata mahdollisen lyhyen pistotuntemuksen."
   ],
   "vocab": [
    {
     "en": "Blood test",
     "fi": "Verikoe",
     "ipa": "/ˈblʌd ˌtɛst/",
     "ex": "The doctor requested a blood test.",
     "exFi": "Lääkäri määräsi verikokeen."
    },
    {
     "en": "Procedure",
     "fi": "Toimenpide",
     "ipa": "/prəˈsidʒɚ/",
     "ex": "I will explain the procedure.",
     "exFi": "Kerron toimenpiteestä."
    },
    {
     "en": "Draw blood",
     "fi": "Ottaa verta",
     "ipa": "/ˈdrɔ ˈblʌd/",
     "ex": "I am here to draw blood.",
     "exFi": "Olen täällä ottamassa verta."
    },
    {
     "en": "Needle",
     "fi": "Neula",
     "ipa": "/ˈnidəl/",
     "ex": "I will tell you before using the needle.",
     "exFi": "Kerron ennen kuin käytän neulaa."
    },
    {
     "en": "Clean the skin",
     "fi": "Puhdistaa iho",
     "ipa": "/ˈklin ðə ˈskɪn/",
     "ex": "I will clean the skin first.",
     "exFi": "Puhdistan ihon ensin."
    },
    {
     "en": "Small pinch",
     "fi": "Pieni nipistys",
     "ipa": "/ˈsmɔl ˈpɪntʃ/",
     "ex": "You may feel a small pinch.",
     "exFi": "Saatatte tuntea pienen nipistyksen."
    },
    {
     "en": "Apply pressure",
     "fi": "Painaa",
     "ipa": "/əˈplaɪ ˈprɛʃɚ/",
     "ex": "Please apply gentle pressure here.",
     "exFi": "Painakaa kevyesti tästä."
    },
    {
     "en": "Keep still",
     "fi": "Pysyä paikallaan",
     "ipa": "/ˈkip ˈstɪl/",
     "ex": "Please keep your arm still.",
     "exFi": "Pitäkää käsivartenne paikallaan."
    },
    {
     "en": "Release",
     "fi": "Vapauttaa tai irrottaa",
     "ipa": "/rɪˈlis/",
     "ex": "I will release the tourniquet.",
     "exFi": "Vapautan puristussiteen."
    },
    {
     "en": "A few seconds",
     "fi": "Muutama sekunti",
     "ipa": "/ə ˈfju ˈsɛkəndz/",
     "ex": "This may take a few seconds.",
     "exFi": "Tämä voi kestää muutaman sekunnin."
    },
    {
     "en": "Finished",
     "fi": "Valmis",
     "ipa": "/ˈfɪnɪʃt/",
     "ex": "The collection is finished.",
     "exFi": "Näytteenotto on valmis."
    },
    {
     "en": "Are you ready?",
     "fi": "Oletteko valmis?",
     "ipa": "/ɑr ju ˈrɛdi/",
     "ex": "Are you ready to begin?",
     "exFi": "Oletteko valmis aloittamaan?"
    }
   ],
   "pron": {
    "text": "Harjoittele procedure /prəˈsidʒɚ/, pressure /ˈprɛʃɚ/ ja sample /ˈsæmpəl/. Käytä rauhallisia taukoja eikä liian nopeaa puhetta.",
    "focus": [
     {
      "en": "procedure",
      "ipa": "/prəˈsidʒɚ/",
      "tip": "paino toisella tavulla"
     },
     {
      "en": "pressure",
      "ipa": "/ˈprɛʃɚ/",
      "tip": "/ʃ/-äänne"
     },
     {
      "en": "sample",
      "ipa": "/ˈsæmpəl/",
      "tip": "/æ/-vokaali"
     }
    ]
   },
   "scenario": "Sadan selittää potilaalle suunnitellun verinäytteenoton ennen aloittamista.",
   "dialogue": [
    {
     "s": "Sadan",
     "en": "Good morning. I'm Sadan, a student at Metropolia.",
     "fi": "Hyvää huomenta. Olen Sadan, Metropolian opiskelija."
    },
    {
     "s": "Potilas",
     "en": "Good morning. What will you do?",
     "fi": "Hyvää huomenta. Mitä aiotte tehdä?"
    },
    {
     "s": "Sadan",
     "en": "I'm here to take a blood sample. I'll explain the procedure first.",
     "fi": "Olen täällä ottamassa verinäytteen. Kerron ensin toimenpiteestä."
    },
    {
     "s": "Potilas",
     "en": "Will it hurt?",
     "fi": "Sattuuko se?"
    },
    {
     "s": "Sadan",
     "en": "You may feel a small pinch. Please tell me if you're uncomfortable.",
     "fi": "Voitte tuntea pienen nipistyksen. Kertokaa, jos teillä on epämukava olo."
    },
    {
     "s": "Potilas",
     "en": "All right. Thank you.",
     "fi": "Selvä. Kiitos."
    },
    {
     "s": "Sadan",
     "en": "Are you ready? My supervisor is here with me.",
     "fi": "Oletteko valmis? Ohjaajani on täällä kanssani."
    },
    {
     "s": "Potilas",
     "en": "Yes, I'm ready.",
     "fi": "Kyllä, olen valmis."
    },
    {
     "s": "Sadan",
     "en": "Thank you. First, we will confirm your identity.",
     "fi": "Kiitos. Ensin varmistamme henkilöllisyytenne."
    }
   ],
   "listening": [
    {
     "script": "Sadan: I'm here to take a blood sample. Patient: Will it hurt? Sadan: You may feel a small pinch. Please tell me if you're uncomfortable.",
     "q": [
      "Mitä Sadan on tekemässä?",
      "Mitä potilas kysyy?",
      "Mitä Sadan pyytää potilasta kertomaan?"
     ],
     "a": [
      "Ottamassa verinäytettä.",
      "Sattuuko toimenpide.",
      "Jos potilaalla on epämukava olo."
     ]
    },
    {
     "script": "Sadan: I will explain the procedure. First, I need to confirm your identity. Then I will check the request with my supervisor.",
     "q": [
      "Mitä Sadan selittää?",
      "Mitä hän sanoo tekevänsä ensin?",
      "Kenen kanssa hän tarkistaa pyynnön?"
     ],
     "a": [
      "Toimenpiteen.",
      "Varmistavansa henkilöllisyyden.",
      "Ohjaajansa kanssa."
     ]
    }
   ],
   "speaking": [
    {
     "task": "Harjoittele 20 sekunnin rauhallinen selitys potilaalle käyttäen sanoja blood sample, procedure ja small pinch.",
     "model": "I'm here to take a blood sample. I'll explain the procedure. You may feel a small pinch."
    },
    {
     "task": "Potilas kysyy 'Will it hurt?' Vastaa rehellisesti ilman lupausta kivuttomuudesta.",
     "model": "You may feel a small pinch. Please tell me if you're uncomfortable."
    },
    {
     "task": "Kysy valmiutta ja kerro, että ohjaaja on mukana.",
     "model": "Are you ready? My supervisor is here with me."
    }
   ],
   "match": {
    "items": [
     "Blood test",
     "Draw blood",
     "Clean the skin",
     "Keep still",
     "Finished"
    ],
    "meanings": [
     "Puhdistaa iho",
     "Valmis",
     "Verikoe",
     "Pysyä paikallaan",
     "Ottaa verta"
    ],
    "key": [
     3,
     5,
     1,
     4,
     2
    ]
   },
   "translate": {
    "items": [
     "Neula",
     "Puhdistaa iho",
     "Pieni nipistys",
     "Painaa"
    ],
    "key": [
     "Needle",
     "Clean the skin",
     "Small pinch",
     "Apply pressure"
    ]
   },
   "fill": {
    "items": [
     "I will explain the ____.",
     "You may feel a small ____.",
     "Are you ____ to begin?"
    ],
    "key": [
     "procedure",
     "pinch",
     "ready"
    ]
   },
   "quiz": [
    {
     "q": "Mitä englanninkielinen ilmaus \"Blood test\" tarkoittaa suomeksi?",
     "o": [
      "Verikoe",
      "Pieni nipistys",
      "Muutama sekunti",
      "Ottaa verta"
     ],
     "a": 0,
     "x": "\"Blood test\" = \"Verikoe\". Esimerkkilause: The doctor requested a blood test.",
     "ol": "fi"
    },
    {
     "q": "Mitä englanninkielinen ilmaus \"Needle\" tarkoittaa suomeksi?",
     "o": [
      "Neula",
      "Verikoe",
      "Vapauttaa tai irrottaa",
      "Pieni nipistys"
     ],
     "a": 0,
     "x": "\"Needle\" = \"Neula\". Esimerkkilause: I will tell you before using the needle.",
     "ol": "fi"
    },
    {
     "q": "Mitä englanninkielinen ilmaus \"Apply pressure\" tarkoittaa suomeksi?",
     "o": [
      "Oletteko valmis?",
      "Neula",
      "Painaa",
      "Vapauttaa tai irrottaa"
     ],
     "a": 2,
     "x": "\"Apply pressure\" = \"Painaa\". Esimerkkilause: Please apply gentle pressure here.",
     "ol": "fi"
    },
    {
     "q": "Mitä englanninkielinen ilmaus \"Release\" tarkoittaa suomeksi?",
     "o": [
      "Toimenpide",
      "Valmis",
      "Pieni nipistys",
      "Vapauttaa tai irrottaa"
     ],
     "a": 3,
     "x": "\"Release\" = \"Vapauttaa tai irrottaa\". Esimerkkilause: I will release the tourniquet.",
     "ol": "fi"
    },
    {
     "q": "Mikä on ilmauksen \"Toimenpide\" englanninkielinen vastine?",
     "o": [
      "Keep still",
      "Procedure",
      "A few seconds",
      "Clean the skin"
     ],
     "a": 1,
     "x": "Oikea ilmaus on \"Procedure\". Mallissa: I will explain the procedure.",
     "ol": "en"
    },
    {
     "q": "Mikä on ilmauksen \"Pieni nipistys\" englanninkielinen vastine?",
     "o": [
      "Procedure",
      "Are you ready?",
      "Small pinch",
      "Release"
     ],
     "a": 2,
     "x": "Oikea ilmaus on \"Small pinch\". Mallissa: You may feel a small pinch.",
     "ol": "en"
    },
    {
     "q": "Mikä on ilmauksen \"Valmis\" englanninkielinen vastine?",
     "o": [
      "Apply pressure",
      "Finished",
      "Procedure",
      "Clean the skin"
     ],
     "a": 1,
     "x": "Oikea ilmaus on \"Finished\". Mallissa: The collection is finished.",
     "ol": "en"
    },
    {
     "q": "Potilas kysyy \"Will it hurt?\" Mikä vastaus on rehellinen ja rauhallinen?",
     "o": [
      "You will not feel anything.",
      "It always hurts a lot.",
      "Please do not ask questions.",
      "You may feel a small pinch."
     ],
     "a": 3,
     "x": "Mahdollinen pistotuntemus kerrotaan realistisesti ilman varmaa lupausta.",
     "ol": "en"
    },
    {
     "q": "Täydennä englanninkielinen lause suomenkielisen vihjeen perusteella: \"I will explain the ____.\" (\"Kerron toimenpiteestä.\")",
     "o": [
      "needle",
      "tube",
      "blood",
      "procedure"
     ],
     "a": 3,
     "x": "Puuttuva sana on \"procedure\". Kokonainen lause: I will explain the procedure.",
     "ol": "en"
    },
    {
     "q": "Kertaa aiempaa: Mitä \"Tube label\" tarkoittaa?",
     "o": [
      "Näytetarra",
      "Harsotaitos",
      "Verinäytteenotto",
      "Puristusside eli staasi"
     ],
     "a": 0,
     "x": "\"Tube label\" tarkoittaa \"Näytetarra\".",
     "ol": "fi"
    }
   ],
   "safety": "Potilaan suostumus, tunnistaminen, antiseptiikka, tarvikkeet ja työjärjestys noudattavat oikeita työohjeita. Älä lupaa, ettei näyte satu."
  },
  {
   "id": 8,
   "title": "Potilasohjeet ja kysymykset",
   "titleEn": "Patient instructions and responses",
   "goals": [
    "Osaat antaa selkeitä, kohteliaita ohjeita asennosta ja liikkumisesta.",
    "Osaat tarkistaa, että potilas ymmärtää ohjeen.",
    "Osaat vastata lyhyesti potilaan lisäkysymyksiin."
   ],
   "vocab": [
    {
     "en": "Sit comfortably",
     "fi": "Istukaa mukavasti",
     "ipa": "/ˈsɪt ˈkʌmftɚbli/",
     "ex": "Please sit comfortably.",
     "exFi": "Istukaa mukavasti."
    },
    {
     "en": "Lie down",
     "fi": "Menkää makuulle",
     "ipa": "/ˈlaɪ ˈdaʊn/",
     "ex": "Would you prefer to lie down?",
     "exFi": "Haluaisitteko mieluummin mennä makuulle?"
    },
    {
     "en": "Relax your arm",
     "fi": "Rentouttakaa käsivartenne",
     "ipa": "/rɪˈlæks jʊr ˈɑrm/",
     "ex": "Please relax your arm.",
     "exFi": "Rentouttakaa käsivartenne."
    },
    {
     "en": "Straighten your arm",
     "fi": "Ojentakaa käsivartenne",
     "ipa": "/ˈstreɪtən jʊr ˈɑrm/",
     "ex": "Could you straighten your arm?",
     "exFi": "Voisitteko ojentaa käsivartenne?"
    },
    {
     "en": "Make a fist",
     "fi": "Laittakaa käsi nyrkkiin",
     "ipa": "/ˈmeɪk ə ˈfɪst/",
     "ex": "Please make a gentle fist when asked.",
     "exFi": "Laittakaa käsi kevyesti nyrkkiin, kun pyydetään."
    },
    {
     "en": "Open your hand",
     "fi": "Avatkaa kätenne",
     "ipa": "/ˈoʊpən jʊr ˈhænd/",
     "ex": "Please open your hand now.",
     "exFi": "Avatkaa kätenne nyt."
    },
    {
     "en": "Turn your arm",
     "fi": "Kääntäkää käsivarttanne",
     "ipa": "/ˈtɝn jʊr ˈɑrm/",
     "ex": "Could you turn your arm slightly?",
     "exFi": "Voisitteko kääntää käsivarttanne hieman?"
    },
    {
     "en": "Hold still",
     "fi": "Pysykää paikallanne",
     "ipa": "/ˈhoʊld ˈstɪl/",
     "ex": "Please hold still for a moment.",
     "exFi": "Pysykää hetki paikallanne."
    },
    {
     "en": "Breathe normally",
     "fi": "Hengittäkää normaalisti",
     "ipa": "/ˈbrið ˈnɔrməli/",
     "ex": "You can breathe normally.",
     "exFi": "Voitte hengittää normaalisti."
    },
    {
     "en": "Does that hurt?",
     "fi": "Sattuuko se?",
     "ipa": "/dʌz ˈðæt ˈhɝt/",
     "ex": "Does that hurt when you move?",
     "exFi": "Sattuuko, kun liikutatte sitä?"
    },
    {
     "en": "Are you comfortable?",
     "fi": "Onko teillä hyvä asento?",
     "ipa": "/ɑr ju ˈkʌmftɚbəl/",
     "ex": "Are you comfortable in this position?",
     "exFi": "Onko teillä hyvä olla tässä asennossa?"
    },
    {
     "en": "Please tell me if...",
     "fi": "Kertokaa minulle, jos...",
     "ipa": "/pliz ˈtɛl mi ɪf/",
     "ex": "Please tell me if you feel dizzy.",
     "exFi": "Kertokaa minulle, jos teitä huimaa."
    }
   ],
   "pron": {
    "text": "Harjoittele please /pliz/ kohteliaan pyynnön alussa sekä sanoja comfortable /ˈkʌmftɚbəl/ ja straighten /ˈstreɪtən/.",
    "focus": [
     {
      "en": "please",
      "ipa": "/pliz/",
      "tip": "pitkähkö /i/ kohteliaan pyynnön alussa"
     },
     {
      "en": "comfortable",
      "ipa": "/ˈkʌmftɚbəl/",
      "tip": "kolme tavua: COMF-ter-bul"
     },
     {
      "en": "straighten",
      "ipa": "/ˈstreɪtən/",
      "tip": "gh ei äänny"
     }
    ]
   },
   "scenario": "Sadan auttaa potilasta löytämään mukavan asennon ja tarkistaa voinnin.",
   "dialogue": [
    {
     "s": "Sadan",
     "en": "Are you comfortable in this position?",
     "fi": "Onko teillä hyvä olla tässä asennossa?"
    },
    {
     "s": "Potilas",
     "en": "Not really. My arm feels uncomfortable.",
     "fi": "Ei oikein. Käsivarren asento tuntuu epämukavalta."
    },
    {
     "s": "Sadan",
     "en": "Thank you for telling me. Would you like to adjust your position?",
     "fi": "Kiitos, kun kerroitte. Haluaisitteko muuttaa asentoa?"
    },
    {
     "s": "Potilas",
     "en": "Yes, please.",
     "fi": "Kyllä, kiitos."
    },
    {
     "s": "Sadan",
     "en": "Please rest your arm here. Is that better?",
     "fi": "Laskekaa käsivartenne tähän. Onko nyt parempi?"
    },
    {
     "s": "Potilas",
     "en": "Yes, much better.",
     "fi": "Kyllä, paljon parempi."
    },
    {
     "s": "Sadan",
     "en": "Great. Please tell me if anything hurts.",
     "fi": "Hyvä. Kertokaa, jos jokin sattuu."
    },
    {
     "s": "Potilas",
     "en": "I will. Thank you.",
     "fi": "Kerron. Kiitos."
    }
   ],
   "listening": [
    {
     "script": "Sadan: Please relax your arm and breathe normally. Patient: Should I move my hand? Sadan: Please hold still for a moment.",
     "q": [
      "Mitä Sadan pyytää käsivarrelta?",
      "Miten potilaan pitää hengittää?",
      "Pitääkö potilaan liikkua juuri nyt?"
     ],
     "a": [
      "Rentouttamaan sen.",
      "Normaalisti.",
      "Ei, Sadan pyytää pysymään hetken paikallaan."
     ]
    },
    {
     "script": "Patient: I'm not comfortable. Sadan: Would you like to change position? Patient: Yes, please. Sadan: Please tell me if anything hurts.",
     "q": [
      "Miltä potilaasta tuntuu alussa?",
      "Mitä Sadan ehdottaa?",
      "Mistä potilaan tulee kertoa?"
     ],
     "a": [
      "Asento tuntuu epämukavalta.",
      "Asennon vaihtamista.",
      "Jos jokin sattuu."
     ]
    }
   ],
   "speaking": [
    {
     "task": "Anna kolme rauhallista potilasohjetta ääneen: käsivarren rentouttaminen, normaali hengitys ja asennon mukavuus.",
     "model": "Please relax your arm. Breathe normally. Are you comfortable?"
    },
    {
     "task": "Kysy, haluaako potilas mennä makuulle, ja varmista tämän vastaus.",
     "model": "Would you prefer to lie down? Is this position comfortable?"
    },
    {
     "task": "Harjoittele reagoimaan potilaan lauseeseen 'This position hurts.'",
     "model": "Thank you for telling me. Let's stop and check with my supervisor."
    }
   ],
   "match": {
    "items": [
     "Sit comfortably",
     "Relax your arm",
     "Make a fist",
     "Hold still",
     "Are you comfortable?"
    ],
    "meanings": [
     "Laittakaa käsi nyrkkiin",
     "Onko teillä hyvä asento?",
     "Istukaa mukavasti",
     "Pysykää paikallanne",
     "Rentouttakaa käsivartenne"
    ],
    "key": [
     3,
     5,
     1,
     4,
     2
    ]
   },
   "translate": {
    "items": [
     "Ojentakaa käsivartenne",
     "Laittakaa käsi nyrkkiin",
     "Avatkaa kätenne",
     "Kääntäkää käsivarttanne"
    ],
    "key": [
     "Straighten your arm",
     "Make a fist",
     "Open your hand",
     "Turn your arm"
    ]
   },
   "fill": {
    "items": [
     "Please relax your ____.",
     "You can breathe ____.",
     "Are you ____ in this position?"
    ],
    "key": [
     "arm",
     "normally",
     "comfortable"
    ]
   },
   "quiz": [
    {
     "q": "Mitä englanninkielinen ilmaus \"Sit comfortably\" tarkoittaa suomeksi?",
     "o": [
      "Sattuuko se?",
      "Avatkaa kätenne",
      "Rentouttakaa käsivartenne",
      "Istukaa mukavasti"
     ],
     "a": 3,
     "x": "\"Sit comfortably\" = \"Istukaa mukavasti\". Esimerkkilause: Please sit comfortably.",
     "ol": "fi"
    },
    {
     "q": "Mitä englanninkielinen ilmaus \"Straighten your arm\" tarkoittaa suomeksi?",
     "o": [
      "Hengittäkää normaalisti",
      "Ojentakaa käsivartenne",
      "Avatkaa kätenne",
      "Istukaa mukavasti"
     ],
     "a": 1,
     "x": "\"Straighten your arm\" = \"Ojentakaa käsivartenne\". Esimerkkilause: Could you straighten your arm?",
     "ol": "fi"
    },
    {
     "q": "Mitä englanninkielinen ilmaus \"Turn your arm\" tarkoittaa suomeksi?",
     "o": [
      "Kääntäkää käsivarttanne",
      "Kertokaa minulle, jos...",
      "Hengittäkää normaalisti",
      "Ojentakaa käsivartenne"
     ],
     "a": 0,
     "x": "\"Turn your arm\" = \"Kääntäkää käsivarttanne\". Esimerkkilause: Could you turn your arm slightly?",
     "ol": "fi"
    },
    {
     "q": "Mitä englanninkielinen ilmaus \"Breathe normally\" tarkoittaa suomeksi?",
     "o": [
      "Avatkaa kätenne",
      "Hengittäkää normaalisti",
      "Menkää makuulle",
      "Onko teillä hyvä asento?"
     ],
     "a": 1,
     "x": "\"Breathe normally\" = \"Hengittäkää normaalisti\". Esimerkkilause: You can breathe normally.",
     "ol": "fi"
    },
    {
     "q": "Mikä on ilmauksen \"Menkää makuulle\" englanninkielinen vastine?",
     "o": [
      "Does that hurt?",
      "Hold still",
      "Make a fist",
      "Lie down"
     ],
     "a": 3,
     "x": "Oikea ilmaus on \"Lie down\". Mallissa: Would you prefer to lie down?",
     "ol": "en"
    },
    {
     "q": "Mikä on ilmauksen \"Avatkaa kätenne\" englanninkielinen vastine?",
     "o": [
      "Breathe normally",
      "Open your hand",
      "Lie down",
      "Please tell me if..."
     ],
     "a": 1,
     "x": "Oikea ilmaus on \"Open your hand\". Mallissa: Please open your hand now.",
     "ol": "en"
    },
    {
     "q": "Mikä on ilmauksen \"Onko teillä hyvä asento?\" englanninkielinen vastine?",
     "o": [
      "Lie down",
      "Are you comfortable?",
      "Make a fist",
      "Turn your arm"
     ],
     "a": 1,
     "x": "Oikea ilmaus on \"Are you comfortable?\". Mallissa: Are you comfortable in this position?",
     "ol": "en"
    },
    {
     "q": "Potilas kertoo, että asento tuntuu epämukavalta. Mikä vastaus sopii?",
     "o": [
      "I need a blood culture.",
      "Would you like to change position?",
      "The result is ready.",
      "Do not move at all, ever."
     ],
     "a": 1,
     "x": "Asennon muuttamista voi tarjota ennen tilanteen jatkamista.",
     "ol": "en"
    },
    {
     "q": "Täydennä englanninkielinen lause suomenkielisen vihjeen perusteella: \"Please relax your ____.\" (\"Rentouttakaa käsivartenne.\")",
     "o": [
      "hand",
      "wrist",
      "shoulder",
      "arm"
     ],
     "a": 3,
     "x": "Puuttuva sana on \"arm\". Kokonainen lause: Please relax your arm.",
     "ol": "en"
    },
    {
     "q": "Kertaa aiempaa: Mitä \"Keep still\" tarkoittaa?",
     "o": [
      "Pysyä paikallaan",
      "Toimenpide",
      "Pieni nipistys",
      "Muutama sekunti"
     ],
     "a": 0,
     "x": "\"Keep still\" tarkoittaa \"Pysyä paikallaan\".",
     "ol": "fi"
    }
   ],
   "safety": "Ohjeiden ajoitus (esim. nyrkin teko ja puristussiteen käyttö) ratkaistaan tilanteen ja käytäntöjen mukaan. Oppitunti harjoittaa ilmaisua, ei itsenäistä tekniikkaa."
  },
  {
   "id": 9,
   "title": "Laboratoriotutkimukset",
   "titleEn": "Laboratory tests and investigations",
   "goals": [
    "Tunnistat 12 tavallista laboratoriotutkimuksiin liittyvää ilmaisua.",
    "Osaat selittää tutkimuksen tarkoituksen yleisellä tasolla.",
    "Osaat kertoa, että tulosten tulkinnasta ja aikataulusta vastaa hoitava yksikkö."
   ],
   "vocab": [
    {
     "en": "Complete blood count (CBC)",
     "fi": "Verenkuvatutkimus (esim. PVK tai PVK+T)",
     "ipa": "/kəmˈplit ˈblʌd ˌkaʊnt (ˌsi bi ˈsi)/",
     "ex": "A complete blood count measures different blood cells.",
     "exFi": "Verenkuvatutkimuksessa mitataan eri verisoluja."
    },
    {
     "en": "C-reactive protein (CRP)",
     "fi": "C-reaktiivinen proteiini",
     "ipa": "/si riˈæktɪv ˈproʊtin (ˌsi ɑr ˈpi)/",
     "ex": "CRP can help assess inflammation.",
     "exFi": "CRP voi auttaa tulehduksen arvioinnissa."
    },
    {
     "en": "Blood glucose",
     "fi": "Verensokeri",
     "ipa": "/ˈblʌd ˈɡluˌkoʊs/",
     "ex": "Blood glucose measures sugar in the blood.",
     "exFi": "Verensokeri mittaa veren glukoosipitoisuutta."
    },
    {
     "en": "Creatinine",
     "fi": "Kreatiniini",
     "ipa": "/kriˈætənin/",
     "ex": "Creatinine is used to assess kidney function.",
     "exFi": "Kreatiniinia käytetään munuaistoiminnan arvioinnissa."
    },
    {
     "en": "Electrolytes",
     "fi": "Elektrolyytit",
     "ipa": "/ɪˈlɛktrəˌlaɪts/",
     "ex": "Sodium and potassium are electrolytes.",
     "exFi": "Natrium ja kalium ovat elektrolyyttejä."
    },
    {
     "en": "Potassium",
     "fi": "Kalium",
     "ipa": "/pəˈtæsiəm/",
     "ex": "Potassium is an important electrolyte.",
     "exFi": "Kalium on tärkeä elektrolyytti."
    },
    {
     "en": "Sodium",
     "fi": "Natrium",
     "ipa": "/ˈsoʊdiəm/",
     "ex": "Sodium is measured in blood tests.",
     "exFi": "Natriumia mitataan verikokeissa."
    },
    {
     "en": "Coagulation test",
     "fi": "Hyytymistutkimus",
     "ipa": "/koʊˌæɡjəˈleɪʃən tɛst/",
     "ex": "A coagulation test assesses blood clotting.",
     "exFi": "Hyytymistutkimus arvioi veren hyytymistä."
    },
    {
     "en": "Blood culture",
     "fi": "Veriviljely",
     "ipa": "/ˈblʌd ˌkʌltʃɚ/",
     "ex": "A blood culture may help detect microbes in the blood.",
     "exFi": "Veriviljely voi auttaa havaitsemaan veressä olevia mikrobeja."
    },
    {
     "en": "Urine sample",
     "fi": "Virtsanäyte",
     "ipa": "/ˈjʊrən ˌsæmpəl/",
     "ex": "The patient provided a urine sample.",
     "exFi": "Potilas antoi virtsanäytteen."
    },
    {
     "en": "Test request",
     "fi": "Tutkimuspyyntö",
     "ipa": "/ˈtɛst rɪˌkwɛst/",
     "ex": "I need to check the test request.",
     "exFi": "Minun täytyy tarkistaa tutkimuspyyntö."
    },
    {
     "en": "Test result",
     "fi": "Tutkimustulos",
     "ipa": "/ˈtɛst rɪˌzʌlt/",
     "ex": "The care team will explain the test result.",
     "exFi": "Hoitotiimi selittää tutkimustuloksen."
    }
   ],
   "pron": {
    "text": "Harjoittele creatinine /kriˈætənin/, electrolytes /ɪˈlɛktrəˌlaɪts/, coagulation /koʊˌæɡjəˈleɪʃən/ ja culture /ˈkʌltʃɚ/.",
    "focus": [
     {
      "en": "creatinine",
      "ipa": "/kriˈætənin/",
      "tip": "paino toisella tavulla"
     },
     {
      "en": "electrolytes",
      "ipa": "/ɪˈlɛktrəˌlaɪts/",
      "tip": "paino toisella tavulla"
     },
     {
      "en": "coagulation",
      "ipa": "/koʊˌæɡjəˈleɪʃən/",
      "tip": "pääpaino tavulla la"
     },
     {
      "en": "culture",
      "ipa": "/ˈkʌltʃɚ/",
      "tip": "/tʃ/-äänne"
     }
    ]
   },
   "scenario": "Potilas kysyy Sadanilta verikokeista ja tuloksista.",
   "dialogue": [
    {
     "s": "Potilas",
     "en": "Which blood tests are you taking?",
     "fi": "Mitä verikokeita otatte?"
    },
    {
     "s": "Sadan",
     "en": "I will check the test request with my supervisor.",
     "fi": "Tarkistan tutkimuspyynnön ohjaajani kanssa."
    },
    {
     "s": "Potilas",
     "en": "What does a complete blood count measure?",
     "fi": "Mitä verenkuvatutkimuksessa mitataan?"
    },
    {
     "s": "Sadan",
     "en": "It measures different types of blood cells.",
     "fi": "Siinä mitataan erilaisia verisoluja."
    },
    {
     "s": "Potilas",
     "en": "Will you tell me the results today?",
     "fi": "Kerrotteko minulle tulokset tänään?"
    },
    {
     "s": "Sadan",
     "en": "Your care team will explain your results and when they are available.",
     "fi": "Hoitotiiminne kertoo tuloksista ja niiden valmistumisesta."
    },
    {
     "s": "Potilas",
     "en": "All right. Thank you.",
     "fi": "Selvä. Kiitos."
    },
    {
     "s": "Sadan",
     "en": "You're welcome. Do you have any other questions?",
     "fi": "Olkaa hyvä. Onko teillä muita kysymyksiä?"
    }
   ],
   "listening": [
    {
     "script": "Supervisor: Today's test request includes a complete blood count and CRP. Sadan: Thank you. I will check the sample requirements.",
     "q": [
      "Mitkä kaksi tutkimusta mainitaan?",
      "Mitä Sadan tarkistaa?",
      "Mainitaanko virtsanäyte?"
     ],
     "a": [
      "Verenkuva ja CRP.",
      "Näytevaatimukset.",
      "Ei."
     ]
    },
    {
     "script": "Patient: Will you explain my creatinine result? Sadan: Your care team will discuss the result with you. I can ask my supervisor if you need more information.",
     "q": [
      "Minkä tutkimuksen tuloksesta potilas kysyy?",
      "Kuka selittää tuloksen potilaalle?",
      "Mitä Sadan voi tehdä?"
     ],
     "a": [
      "Kreatiniinin.",
      "Hoitotiimi.",
      "Kysyä ohjaajalta lisätietoa."
     ]
    }
   ],
   "speaking": [
    {
     "task": "Kerro lyhyesti, mitä verenkuvatutkimus mittaa.",
     "model": "A complete blood count measures different types of blood cells."
    },
    {
     "task": "Potilas pyytää sinua tulkitsemaan tuloksensa. Ohjaa hänet oikean ammattilaisen puoleen.",
     "model": "Your care team will explain your test results."
    },
    {
     "task": "Pyydä saada tarkistaa tutkimuspyyntö ennen näytevaatimuksista kertomista.",
     "model": "I need to check the test request with my supervisor."
    }
   ],
   "match": {
    "items": [
     "Complete blood count (CBC)",
     "Blood glucose",
     "Electrolytes",
     "Coagulation test",
     "Test request"
    ],
    "meanings": [
     "Elektrolyytit",
     "Tutkimuspyyntö",
     "Verenkuvatutkimus (esim. PVK tai PVK+T)",
     "Hyytymistutkimus",
     "Verensokeri"
    ],
    "key": [
     3,
     5,
     1,
     4,
     2
    ]
   },
   "translate": {
    "items": [
     "Kreatiniini",
     "Elektrolyytit",
     "Kalium",
     "Natrium"
    ],
    "key": [
     "Creatinine",
     "Electrolytes",
     "Potassium",
     "Sodium"
    ]
   },
   "fill": {
    "items": [
     "The care team will explain your test ____.",
     "Sodium and potassium are ____.",
     "I need to check the test ____."
    ],
    "key": [
     "result",
     "electrolytes",
     "request"
    ]
   },
   "quiz": [
    {
     "q": "Mitä englanninkielinen ilmaus \"Complete blood count (CBC)\" tarkoittaa suomeksi?",
     "o": [
      "Virtsanäyte",
      "Verensokeri",
      "Kalium",
      "Verenkuvatutkimus (esim. PVK tai PVK+T)"
     ],
     "a": 3,
     "x": "\"Complete blood count (CBC)\" = \"Verenkuvatutkimus (esim. PVK tai PVK+T)\". Esimerkkilause: A complete blood count measures different blood cells.",
     "ol": "fi"
    },
    {
     "q": "Mitä englanninkielinen ilmaus \"Creatinine\" tarkoittaa suomeksi?",
     "o": [
      "Kalium",
      "Veriviljely",
      "Kreatiniini",
      "Verenkuvatutkimus (esim. PVK tai PVK+T)"
     ],
     "a": 2,
     "x": "\"Creatinine\" = \"Kreatiniini\". Esimerkkilause: Creatinine is used to assess kidney function.",
     "ol": "fi"
    },
    {
     "q": "Mitä englanninkielinen ilmaus \"Sodium\" tarkoittaa suomeksi?",
     "o": [
      "Natrium",
      "Tutkimustulos",
      "Veriviljely",
      "Kreatiniini"
     ],
     "a": 0,
     "x": "\"Sodium\" = \"Natrium\". Esimerkkilause: Sodium is measured in blood tests.",
     "ol": "fi"
    },
    {
     "q": "Mitä englanninkielinen ilmaus \"Blood culture\" tarkoittaa suomeksi?",
     "o": [
      "Tutkimuspyyntö",
      "Kalium",
      "C-reaktiivinen proteiini",
      "Veriviljely"
     ],
     "a": 3,
     "x": "\"Blood culture\" = \"Veriviljely\". Esimerkkilause: A blood culture may help detect microbes in the blood.",
     "ol": "fi"
    },
    {
     "q": "Mikä on ilmauksen \"C-reaktiivinen proteiini\" englanninkielinen vastine?",
     "o": [
      "Coagulation test",
      "Electrolytes",
      "Urine sample",
      "C-reactive protein (CRP)"
     ],
     "a": 3,
     "x": "Oikea ilmaus on \"C-reactive protein (CRP)\". Mallissa: CRP can help assess inflammation.",
     "ol": "en"
    },
    {
     "q": "Mikä on ilmauksen \"Kalium\" englanninkielinen vastine?",
     "o": [
      "Test result",
      "Potassium",
      "Blood culture",
      "C-reactive protein (CRP)"
     ],
     "a": 1,
     "x": "Oikea ilmaus on \"Potassium\". Mallissa: Potassium is an important electrolyte.",
     "ol": "en"
    },
    {
     "q": "Mikä on ilmauksen \"Tutkimuspyyntö\" englanninkielinen vastine?",
     "o": [
      "Test request",
      "Electrolytes",
      "C-reactive protein (CRP)",
      "Sodium"
     ],
     "a": 0,
     "x": "Oikea ilmaus on \"Test request\". Mallissa: I need to check the test request.",
     "ol": "en"
    },
    {
     "q": "Potilas pyytää Sadanilta tuloksen tulkintaa. Mikä lause sopii?",
     "o": [
      "Every CRP result means infection.",
      "I can diagnose you now.",
      "Your care team will explain the result.",
      "The laboratory never checks requests."
     ],
     "a": 2,
     "x": "Potilaan hoitotiimi vastaa tulosten selittämisestä, ei opiskelija.",
     "ol": "en"
    },
    {
     "q": "Täydennä englanninkielinen lause suomenkielisen vihjeen perusteella: \"The care team will explain your test ____.\" (\"Hoitotiimi selittää tutkimustuloksenne.\")",
     "o": [
      "culture",
      "request",
      "result",
      "tube"
     ],
     "a": 2,
     "x": "Puuttuva sana on \"result\". Kokonainen lause: The care team will explain your test result.",
     "ol": "en"
    },
    {
     "q": "Kertaa aiempaa: Mitä \"Hold still\" tarkoittaa?",
     "o": [
      "Sattuuko se?",
      "Pysykää paikallanne",
      "Avatkaa kätenne",
      "Menkää makuulle"
     ],
     "a": 1,
     "x": "\"Hold still\" tarkoittaa \"Pysykää paikallanne\".",
     "ol": "fi"
    }
   ],
   "safety": "Englanninkielinen CBC ei tarkoita aina täsmälleen samaa kuin yksittäinen suomalainen tutkimuslyhenne. Tarkista paikalliset tutkimusnimet ja näyteohjeet. Älä tulkitse potilaan tuloksia."
  },
  {
   "id": 10,
   "title": "Potilaan huoli ja äkilliset oireet",
   "titleEn": "Patient concerns and safety language",
   "goals": [
    "Tunnistat tavallisia huimauksen, kivun ja pahoinvoinnin ilmauksia.",
    "Osaat vastata potilaan huoleen empaattisesti ja lyhyesti.",
    "Osaat keskeyttää harjoitustilanteen ja pyytää ohjaajaa paikalle."
   ],
   "vocab": [
    {
     "en": "Pain",
     "fi": "Kipu",
     "ipa": "/peɪn/",
     "ex": "Please tell me if you feel pain.",
     "exFi": "Kertokaa, jos tunnette kipua."
    },
    {
     "en": "Dizzy",
     "fi": "Huimaava tai huimausta",
     "ipa": "/ˈdɪzi/",
     "ex": "I feel dizzy.",
     "exFi": "Minua huimaa."
    },
    {
     "en": "Faint",
     "fi": "Pyörtyä tai heikottaa",
     "ipa": "/feɪnt/",
     "ex": "I think I might faint.",
     "exFi": "Luulen, että saatan pyörtyä."
    },
    {
     "en": "Nauseous",
     "fi": "Pahoinvoiva",
     "ipa": "/ˈnɔʃəs/",
     "ex": "I feel nauseous.",
     "exFi": "Minua voi pahoin."
    },
    {
     "en": "Nervous",
     "fi": "Jännittynyt",
     "ipa": "/ˈnɝvəs/",
     "ex": "I'm nervous about needles.",
     "exFi": "Jännitän neuloja."
    },
    {
     "en": "Anxious",
     "fi": "Ahdistunut tai huolestunut",
     "ipa": "/ˈæŋkʃəs/",
     "ex": "The patient feels anxious.",
     "exFi": "Potilas tuntee ahdistusta."
    },
    {
     "en": "Needle phobia",
     "fi": "Neulapelko",
     "ipa": "/ˈnidəl ˈfoʊbiə/",
     "ex": "I have a needle phobia.",
     "exFi": "Minulla on neulapelko."
    },
    {
     "en": "Feel unwell",
     "fi": "Voida huonosti",
     "ipa": "/ˈfil ʌnˈwɛl/",
     "ex": "Please tell me if you feel unwell.",
     "exFi": "Kertokaa, jos voitte huonosti."
    },
    {
     "en": "I need a break",
     "fi": "Tarvitsen tauon",
     "ipa": "/aɪ ˈnid ə ˈbreɪk/",
     "ex": "I need a break, please.",
     "exFi": "Tarvitsen tauon, kiitos."
    },
    {
     "en": "Stop, please",
     "fi": "Lopettakaa, kiitos",
     "ipa": "/ˈstɑp ˈpliz/",
     "ex": "Stop, please. I feel faint.",
     "exFi": "Lopettakaa, kiitos. Minua heikottaa."
    },
    {
     "en": "I will get help",
     "fi": "Haen apua",
     "ipa": "/aɪ wɪl ˈɡɛt ˈhɛlp/",
     "ex": "I will get help right away.",
     "exFi": "Haen heti apua."
    },
    {
     "en": "Are you feeling better?",
     "fi": "Onko olonne parempi?",
     "ipa": "/ɑr ju ˈfilɪŋ ˈbɛtɚ/",
     "ex": "Are you feeling better now?",
     "exFi": "Onko olonne nyt parempi?"
    }
   ],
   "pron": {
    "text": "Harjoittele dizzy /ˈdɪzi/, anxious /ˈæŋkʃəs/, nauseous /ˈnɔʃəs/ sekä rauhallista äänenpainoa kysymyksissä.",
    "focus": [
     {
      "en": "dizzy",
      "ipa": "/ˈdɪzi/",
      "tip": "soinnillinen /z/"
     },
     {
      "en": "anxious",
      "ipa": "/ˈæŋkʃəs/",
      "tip": "x äännetään /kʃ/"
     },
     {
      "en": "nauseous",
      "ipa": "/ˈnɔʃəs/",
      "tip": "kaksi tavua"
     },
     {
      "en": "Are you feeling better?",
      "ipa": "",
      "tip": "rauhallinen, nouseva kysymysintonaatio"
     }
    ]
   },
   "scenario": "Potilas alkaa voida huonosti juuri ennen näytteenottoa.",
   "dialogue": [
    {
     "s": "Sadan",
     "en": "Are you feeling okay?",
     "fi": "Onko teillä hyvä olo?"
    },
    {
     "s": "Potilas",
     "en": "No, I feel dizzy.",
     "fi": "Ei, minua huimaa."
    },
    {
     "s": "Sadan",
     "en": "Thank you for telling me. We'll stop for now.",
     "fi": "Kiitos, kun kerroitte. Keskeytämme nyt."
    },
    {
     "s": "Potilas",
     "en": "I think I might faint.",
     "fi": "Luulen, että saatan pyörtyä."
    },
    {
     "s": "Sadan",
     "en": "I will get my supervisor right away.",
     "fi": "Haen heti ohjaajani."
    },
    {
     "s": "Potilas",
     "en": "Please don't leave me alone.",
     "fi": "Älkää jättäkö minua yksin."
    },
    {
     "s": "Sadan",
     "en": "I'll call for help immediately and stay with you while help is coming.",
     "fi": "Kutsun heti apua ja pysyn luonanne, kunnes apu tulee."
    },
    {
     "s": "Potilas",
     "en": "Thank you.",
     "fi": "Kiitos."
    }
   ],
   "listening": [
    {
     "script": "Patient: I feel nauseous and dizzy. Sadan: We will stop now. I will call my supervisor immediately.",
     "q": [
      "Mitä kahta oiretta potilas kuvaa?",
      "Jatkaako Sadan toimenpidettä?",
      "Kenelle Sadan soittaa tai pyytää apua?"
     ],
     "a": [
      "Pahoinvointia ja huimausta.",
      "Ei, hän keskeyttää.",
      "Ohjaajalle."
     ]
    },
    {
     "script": "Patient: I'm nervous about needles. Sadan: Thank you for telling me. We can talk about your concern before proceeding.",
     "q": [
      "Mitä potilas jännittää?",
      "Miten Sadan reagoi?",
      "Sanooko Sadan, että potilaan pitää vain olla hiljaa?"
     ],
     "a": [
      "Neuloja.",
      "Kiittää tiedosta ja ehdottaa keskustelua ennen jatkamista.",
      "Ei."
     ]
    }
   ],
   "speaking": [
    {
     "task": "Vastaa potilaalle, joka sanoo 'I feel dizzy.'",
     "model": "We'll stop for now. I'll get help right away."
    },
    {
     "task": "Vastaa potilaalle, joka kertoo neulapelosta.",
     "model": "Thank you for telling me. We can talk about your concern."
    },
    {
     "task": "Harjoittele avun pyytämistä ohjaajalta nopeasti ja selkeästi.",
     "model": "Please come here. The patient feels faint. We need help."
    }
   ],
   "match": {
    "items": [
     "Pain",
     "Faint",
     "Nervous",
     "Feel unwell",
     "I will get help"
    ],
    "meanings": [
     "Jännittynyt",
     "Haen apua",
     "Kipu",
     "Voida huonosti",
     "Pyörtyä tai heikottaa"
    ],
    "key": [
     3,
     5,
     1,
     4,
     2
    ]
   },
   "translate": {
    "items": [
     "Pahoinvoiva",
     "Jännittynyt",
     "Ahdistunut tai huolestunut",
     "Neulapelko"
    ],
    "key": [
     "Nauseous",
     "Nervous",
     "Anxious",
     "Needle phobia"
    ]
   },
   "fill": {
    "items": [
     "I feel ____.",
     "I will get ____ right away.",
     "Are you feeling ____ now?"
    ],
    "key": [
     "dizzy",
     "help",
     "better"
    ]
   },
   "quiz": [
    {
     "q": "Mitä englanninkielinen ilmaus \"Pain\" tarkoittaa suomeksi?",
     "o": [
      "Pyörtyä tai heikottaa",
      "Ahdistunut tai huolestunut",
      "Kipu",
      "Lopettakaa, kiitos"
     ],
     "a": 2,
     "x": "\"Pain\" = \"Kipu\". Esimerkkilause: Please tell me if you feel pain.",
     "ol": "fi"
    },
    {
     "q": "Mitä englanninkielinen ilmaus \"Nauseous\" tarkoittaa suomeksi?",
     "o": [
      "Ahdistunut tai huolestunut",
      "Tarvitsen tauon",
      "Kipu",
      "Pahoinvoiva"
     ],
     "a": 3,
     "x": "\"Nauseous\" = \"Pahoinvoiva\". Esimerkkilause: I feel nauseous.",
     "ol": "fi"
    },
    {
     "q": "Mitä englanninkielinen ilmaus \"Needle phobia\" tarkoittaa suomeksi?",
     "o": [
      "Onko olonne parempi?",
      "Neulapelko",
      "Tarvitsen tauon",
      "Pahoinvoiva"
     ],
     "a": 1,
     "x": "\"Needle phobia\" = \"Neulapelko\". Esimerkkilause: I have a needle phobia.",
     "ol": "fi"
    },
    {
     "q": "Mitä englanninkielinen ilmaus \"I need a break\" tarkoittaa suomeksi?",
     "o": [
      "Ahdistunut tai huolestunut",
      "Tarvitsen tauon",
      "Huimaava tai huimausta",
      "Haen apua"
     ],
     "a": 1,
     "x": "\"I need a break\" = \"Tarvitsen tauon\". Esimerkkilause: I need a break, please.",
     "ol": "fi"
    },
    {
     "q": "Mikä on ilmauksen \"Huimaava tai huimausta\" englanninkielinen vastine?",
     "o": [
      "Stop, please",
      "Feel unwell",
      "Nervous",
      "Dizzy"
     ],
     "a": 3,
     "x": "Oikea ilmaus on \"Dizzy\". Mallissa: I feel dizzy.",
     "ol": "en"
    },
    {
     "q": "Mikä on ilmauksen \"Ahdistunut tai huolestunut\" englanninkielinen vastine?",
     "o": [
      "Anxious",
      "Dizzy",
      "I need a break",
      "Are you feeling better?"
     ],
     "a": 0,
     "x": "Oikea ilmaus on \"Anxious\". Mallissa: The patient feels anxious.",
     "ol": "en"
    },
    {
     "q": "Mikä on ilmauksen \"Haen apua\" englanninkielinen vastine?",
     "o": [
      "I will get help",
      "Needle phobia",
      "Nervous",
      "Dizzy"
     ],
     "a": 0,
     "x": "Oikea ilmaus on \"I will get help\". Mallissa: I will get help right away.",
     "ol": "en"
    },
    {
     "q": "Potilas sanoo \"I think I might faint.\" Mitä Sadan sanoo?",
     "o": [
      "Let us continue quickly.",
      "This is not important.",
      "Please stand up now.",
      "We will stop now. I will get help."
     ],
     "a": 3,
     "x": "Pyörtymisen tunteeseen reagoidaan keskeyttämällä ja hakemalla apua.",
     "ol": "en"
    },
    {
     "q": "Täydennä englanninkielinen lause suomenkielisen vihjeen perusteella: \"I feel ____.\" (\"Minua huimaa.\")",
     "o": [
      "nauseous",
      "nervous",
      "unwell",
      "dizzy"
     ],
     "a": 3,
     "x": "Puuttuva sana on \"dizzy\". Kokonainen lause: I feel dizzy.",
     "ol": "en"
    },
    {
     "q": "Kertaa aiempaa: Mitä \"Coagulation test\" tarkoittaa?",
     "o": [
      "C-reaktiivinen proteiini",
      "Kalium",
      "Hyytymistutkimus",
      "Virtsanäyte"
     ],
     "a": 2,
     "x": "\"Coagulation test\" tarkoittaa \"Hyytymistutkimus\".",
     "ol": "fi"
    }
   ],
   "safety": "Jos potilas kertoo pyörtymisen tunteesta tai muusta äkillisestä oireesta, keskeytä ja toimi todellisen yksikön hätä- ja avunpyyntöohjeen mukaan. Tämä on viestintäharjoitus, ei ensiapuohje."
  },
  {
   "id": 11,
   "title": "Työyhteisön viestintä ja näyteongelmat",
   "titleEn": "Professional communication and handover",
   "goals": [
    "Osaat pyytää ohjaajaa tarkistamaan epäselvän tilanteen.",
    "Osaat kuvailla näyte- ja tunnistusongelman lyhyesti.",
    "Ymmärrät kiireelliseen näytteeseen ja näytteiden kuljetukseen liittyviä ilmauksia."
   ],
   "vocab": [
    {
     "en": "Supervisor",
     "fi": "Ohjaaja",
     "ipa": "/ˈsupɚˌvaɪzɚ/",
     "ex": "My supervisor will check the request.",
     "exFi": "Ohjaajani tarkistaa tutkimuspyynnön."
    },
    {
     "en": "Colleague",
     "fi": "Työkaveri",
     "ipa": "/ˈkɑliɡ/",
     "ex": "I will ask my colleague for help.",
     "exFi": "Pyydän työkaveriltani apua."
    },
    {
     "en": "Shift",
     "fi": "Työvuoro",
     "ipa": "/ʃɪft/",
     "ex": "My shift starts in the morning.",
     "exFi": "Työvuoroni alkaa aamulla."
    },
    {
     "en": "Handover",
     "fi": "Luovutus tai raportointi",
     "ipa": "/ˈhændˌoʊvɚ/",
     "ex": "We will discuss the sample at handover.",
     "exFi": "Keskustelemme näytteestä luovutuksen yhteydessä."
    },
    {
     "en": "Sample transport",
     "fi": "Näytekuljetus",
     "ipa": "/ˈsæmpəl ˈtrænspɔrt/",
     "ex": "The sample transport schedule needs to be checked.",
     "exFi": "Näytekuljetuksen aikataulu pitää tarkistaa."
    },
    {
     "en": "Urgent sample",
     "fi": "Kiireellinen näyte",
     "ipa": "/ˈɝdʒənt ˈsæmpəl/",
     "ex": "This is marked as an urgent sample.",
     "exFi": "Tämä on merkitty kiireelliseksi näytteeksi."
    },
    {
     "en": "Sample handling",
     "fi": "Näytteen käsittely",
     "ipa": "/ˈsæmpəl ˈhændlɪŋ/",
     "ex": "The handling instructions are in the laboratory guide.",
     "exFi": "Käsittelyohjeet ovat laboratorion ohjeessa."
    },
    {
     "en": "Label mismatch",
     "fi": "Näytetarran tietojen ristiriita",
     "ipa": "/ˈleɪbəl ˈmɪsˌmætʃ/",
     "ex": "I noticed a label mismatch.",
     "exFi": "Huomasin näytetarran tietojen ristiriidan."
    },
    {
     "en": "Repeat sample",
     "fi": "Uusintanäyte",
     "ipa": "/rɪˈpit ˈsæmpəl/",
     "ex": "A repeat sample may be requested.",
     "exFi": "Uusintanäytettä voidaan pyytää."
    },
    {
     "en": "Could you help me?",
     "fi": "Voisitko auttaa minua?",
     "ipa": "/kʊd ju ˈhɛlp mi/",
     "ex": "Could you help me check this label?",
     "exFi": "Voisitko auttaa tarkistamaan tämän tarran?"
    },
    {
     "en": "I need to check",
     "fi": "Minun täytyy tarkistaa",
     "ipa": "/aɪ ˈnid tə ˈtʃɛk/",
     "ex": "I need to check the patient's details.",
     "exFi": "Minun täytyy tarkistaa potilaan tiedot."
    },
    {
     "en": "Please clarify",
     "fi": "Voisitko selventää",
     "ipa": "/pliz ˈklærəˌfaɪ/",
     "ex": "Please clarify which request is correct.",
     "exFi": "Voisitko selventää, mikä tutkimuspyyntö on oikea?"
    }
   ],
   "pron": {
    "text": "Harjoittele supervisor /ˈsupɚˌvaɪzɚ/, urgent /ˈɝdʒənt/, colleague /ˈkɑliɡ/ ja clarify /ˈklærəˌfaɪ/.",
    "focus": [
     {
      "en": "supervisor",
      "ipa": "/ˈsupɚˌvaɪzɚ/",
      "tip": "paino ensimmäisellä tavulla"
     },
     {
      "en": "urgent",
      "ipa": "/ˈɝdʒənt/",
      "tip": "/ɝ/ ja /dʒ/"
     },
     {
      "en": "colleague",
      "ipa": "/ˈkɑliɡ/",
      "tip": "kaksi tavua"
     },
     {
      "en": "clarify",
      "ipa": "/ˈklærəˌfaɪ/",
      "tip": "paino ensimmäisellä tavulla"
     }
    ]
   },
   "scenario": "Sadan huomaa näytetarran ja tutkimuspyynnön tietojen ristiriidan ja kertoo asiasta ohjaajalle.",
   "dialogue": [
    {
     "s": "Sadan",
     "en": "Could you help me check this sample label?",
     "fi": "Voisitko auttaa tarkistamaan tämän näytetarran?"
    },
    {
     "s": "Ohjaaja",
     "en": "Of course. What is the problem?",
     "fi": "Tietenkin. Mikä ongelma on?"
    },
    {
     "s": "Sadan",
     "en": "I noticed a mismatch between the label and the request.",
     "fi": "Huomasin ristiriidan tarran ja pyynnön tietojen välillä."
    },
    {
     "s": "Ohjaaja",
     "en": "Thank you for telling me. Do not proceed until we check it.",
     "fi": "Kiitos, kun kerroit. Älä jatka ennen kuin tarkistamme asian."
    },
    {
     "s": "Sadan",
     "en": "I understand. I will keep the sample separate while we follow the procedure.",
     "fi": "Ymmärrän. Pidän näytteen erillään, kun toimimme ohjeen mukaan."
    },
    {
     "s": "Ohjaaja",
     "en": "Good. Let's check the identification and the unit instructions.",
     "fi": "Hyvä. Tarkistetaan tunnistustiedot ja yksikön ohjeet."
    },
    {
     "s": "Sadan",
     "en": "Please clarify what I should do next.",
     "fi": "Voisitko selventää, mitä teen seuraavaksi?"
    },
    {
     "s": "Ohjaaja",
     "en": "I will guide you through the next step.",
     "fi": "Ohjaan sinua seuraavassa vaiheessa."
    }
   ],
   "listening": [
    {
     "script": "Supervisor: The request is marked urgent. Please check the transport instructions. Sadan: I will check them before we send the sample.",
     "q": [
      "Miten tutkimuspyyntö on merkitty?",
      "Mitä ohjaaja pyytää tarkistamaan?",
      "Milloin Sadan tarkistaa ohjeet?"
     ],
     "a": [
      "Kiireelliseksi.",
      "Kuljetusohjeet.",
      "Ennen lähettämistä."
     ]
    },
    {
     "script": "Sadan: I noticed a label mismatch. Supervisor: Thank you for reporting it. We need to check the details before proceeding.",
     "q": [
      "Minkä ongelman Sadan huomasi?",
      "Mitä ohjaaja tekee ennen jatkamista?",
      "Miten ohjaaja suhtautuu ilmoitukseen?"
     ],
     "a": [
      "Tarran tietojen ristiriidan.",
      "Tarkistaa tiedot.",
      "Kiittää ilmoituksesta."
     ]
    }
   ],
   "speaking": [
    {
     "task": "Kerro ohjaajalle yhdellä lauseella, että havaitsit näytetarran tietojen ristiriidan.",
     "model": "I noticed a label mismatch."
    },
    {
     "task": "Pyydä apua tutkimuspyynnön tarkistamiseen.",
     "model": "Could you help me check this test request?"
    },
    {
     "task": "Kerro, että tarkistat kiireellisen näytteen kuljetusohjeen ennen lähettämistä.",
     "model": "I will check the transport instructions before sending the urgent sample."
    }
   ],
   "match": {
    "items": [
     "Supervisor",
     "Shift",
     "Sample transport",
     "Label mismatch",
     "I need to check"
    ],
    "meanings": [
     "Näytekuljetus",
     "Minun täytyy tarkistaa",
     "Ohjaaja",
     "Näytetarran tietojen ristiriita",
     "Työvuoro"
    ],
    "key": [
     3,
     5,
     1,
     4,
     2
    ]
   },
   "translate": {
    "items": [
     "Luovutus tai raportointi",
     "Näytekuljetus",
     "Kiireellinen näyte",
     "Näytteen käsittely"
    ],
    "key": [
     "Handover",
     "Sample transport",
     "Urgent sample",
     "Sample handling"
    ]
   },
   "fill": {
    "items": [
     "I noticed a label ____.",
     "Could you ____ me, please?",
     "This is marked as an ____ sample."
    ],
    "key": [
     "mismatch",
     "help",
     "urgent"
    ]
   },
   "quiz": [
    {
     "q": "Mitä englanninkielinen ilmaus \"Supervisor\" tarkoittaa suomeksi?",
     "o": [
      "Voisitko auttaa minua?",
      "Kiireellinen näyte",
      "Työvuoro",
      "Ohjaaja"
     ],
     "a": 3,
     "x": "\"Supervisor\" = \"Ohjaaja\". Esimerkkilause: My supervisor will check the request.",
     "ol": "fi"
    },
    {
     "q": "Mitä englanninkielinen ilmaus \"Handover\" tarkoittaa suomeksi?",
     "o": [
      "Uusintanäyte",
      "Kiireellinen näyte",
      "Ohjaaja",
      "Luovutus tai raportointi"
     ],
     "a": 3,
     "x": "\"Handover\" = \"Luovutus tai raportointi\". Esimerkkilause: We will discuss the sample at handover.",
     "ol": "fi"
    },
    {
     "q": "Mitä englanninkielinen ilmaus \"Sample handling\" tarkoittaa suomeksi?",
     "o": [
      "Uusintanäyte",
      "Voisitko selventää",
      "Luovutus tai raportointi",
      "Näytteen käsittely"
     ],
     "a": 3,
     "x": "\"Sample handling\" = \"Näytteen käsittely\". Esimerkkilause: The handling instructions are in the laboratory guide.",
     "ol": "fi"
    },
    {
     "q": "Mitä englanninkielinen ilmaus \"Repeat sample\" tarkoittaa suomeksi?",
     "o": [
      "Työkaveri",
      "Uusintanäyte",
      "Kiireellinen näyte",
      "Minun täytyy tarkistaa"
     ],
     "a": 1,
     "x": "\"Repeat sample\" = \"Uusintanäyte\". Esimerkkilause: A repeat sample may be requested.",
     "ol": "fi"
    },
    {
     "q": "Mikä on ilmauksen \"Työkaveri\" englanninkielinen vastine?",
     "o": [
      "Could you help me?",
      "Colleague",
      "Sample transport",
      "Label mismatch"
     ],
     "a": 1,
     "x": "Oikea ilmaus on \"Colleague\". Mallissa: I will ask my colleague for help.",
     "ol": "en"
    },
    {
     "q": "Mikä on ilmauksen \"Kiireellinen näyte\" englanninkielinen vastine?",
     "o": [
      "Urgent sample",
      "Colleague",
      "Repeat sample",
      "Please clarify"
     ],
     "a": 0,
     "x": "Oikea ilmaus on \"Urgent sample\". Mallissa: This is marked as an urgent sample.",
     "ol": "en"
    },
    {
     "q": "Mikä on ilmauksen \"Minun täytyy tarkistaa\" englanninkielinen vastine?",
     "o": [
      "Colleague",
      "I need to check",
      "Sample transport",
      "Sample handling"
     ],
     "a": 1,
     "x": "Oikea ilmaus on \"I need to check\". Mallissa: I need to check the patient's details.",
     "ol": "en"
    },
    {
     "q": "Sadan huomaa näytetarran ristiriidan. Mikä ilmaus sopii?",
     "o": [
      "The sample is definitely correct.",
      "I will guess the identity.",
      "No need to check the request.",
      "I noticed a label mismatch."
     ],
     "a": 3,
     "x": "Label mismatch kertoo näytetarran tietojen ristiriidasta.",
     "ol": "en"
    },
    {
     "q": "Täydennä englanninkielinen lause suomenkielisen vihjeen perusteella: \"I noticed a label ____.\" (\"Huomasin näytetarran tietojen ristiriidan.\")",
     "o": [
      "shift",
      "mismatch",
      "sample",
      "transport"
     ],
     "a": 1,
     "x": "Puuttuva sana on \"mismatch\". Kokonainen lause: I noticed a label mismatch.",
     "ol": "en"
    },
    {
     "q": "Kertaa aiempaa: Mitä \"Feel unwell\" tarkoittaa?",
     "o": [
      "Ahdistunut tai huolestunut",
      "Voida huonosti",
      "Lopettakaa, kiitos",
      "Huimaava tai huimausta"
     ],
     "a": 1,
     "x": "\"Feel unwell\" tarkoittaa \"Voida huonosti\".",
     "ol": "fi"
    }
   ],
   "safety": "Epäselvästi tunnistettua tai virheellisesti merkittyä näytettä ei korjata arvaamalla. Seuraa vastuuhenkilön ja paikallisen laatujärjestelmän ohjeita."
  },
  {
   "id": 12,
   "title": "Kertaus ja käytännön näyttö",
   "titleEn": "Integrated revision and practical assessment",
   "goals": [
    "Osaat yhdistää tervehdyksen, tunnistamisen ja toimenpiteen selittämisen.",
    "Osaat reagoida potilaan tavalliseen huoleen ja pyytää apua.",
    "Osaat tunnistaa omat vahvuutesi ja asiat, joita pitää vielä harjoitella."
   ],
   "vocab": [
    {
     "en": "I'm here to collect a blood sample",
     "fi": "Olen täällä ottamassa verinäytteen",
     "ipa": "/aɪm ˈhɪr tə kəˈlɛkt ə ˈblʌd ˌsæmpəl/",
     "ex": "I'm here to collect a blood sample today.",
     "exFi": "Olen täällä ottamassa verinäytteen tänään."
    },
    {
     "en": "Could you confirm your full name?",
     "fi": "Voisitteko vahvistaa koko nimenne?",
     "ipa": "/kʊd ju kənˈfɝm jʊr ˈfʊl ˈneɪm/",
     "ex": "Could you confirm your full name, please?",
     "exFi": "Voisitteko vahvistaa koko nimenne?"
    },
    {
     "en": "Could you tell me your date of birth?",
     "fi": "Voisitteko kertoa syntymäaikanne?",
     "ipa": "/kʊd ju ˈtɛl mi jʊr ˈdeɪt əv ˈbɝθ/",
     "ex": "Could you tell me your date of birth?",
     "exFi": "Voisitteko kertoa syntymäaikanne?"
    },
    {
     "en": "I'll explain the procedure",
     "fi": "Kerron toimenpiteestä",
     "ipa": "/aɪl ɪkˈspleɪn ðə prəˈsidʒɚ/",
     "ex": "I'll explain the procedure before we begin.",
     "exFi": "Kerron toimenpiteestä ennen aloittamista."
    },
    {
     "en": "Do you have any questions?",
     "fi": "Onko teillä kysyttävää?",
     "ipa": "/də ju ˈhæv ˌɛni ˈkwɛstʃənz/",
     "ex": "Do you have any questions before we begin?",
     "exFi": "Onko teillä kysyttävää ennen aloittamista?"
    },
    {
     "en": "Please relax your arm",
     "fi": "Rentouttakaa käsivartenne",
     "ipa": "/pliz rɪˈlæks jʊr ˈɑrm/",
     "ex": "Please relax your arm on the support.",
     "exFi": "Rentouttakaa käsivartenne tuen päälle."
    },
    {
     "en": "You may feel a small pinch",
     "fi": "Voitte tuntea pienen nipistyksen",
     "ipa": "/ju meɪ ˈfil ə ˈsmɔl ˈpɪntʃ/",
     "ex": "You may feel a small pinch for a moment.",
     "exFi": "Voitte tuntea hetken pienen nipistyksen."
    },
    {
     "en": "Tell me if you feel dizzy",
     "fi": "Kertokaa, jos teitä huimaa",
     "ipa": "/ˈtɛl mi ɪf ju ˈfil ˈdɪzi/",
     "ex": "Tell me if you feel dizzy or unwell.",
     "exFi": "Kertokaa, jos teitä huimaa tai voitte huonosti."
    },
    {
     "en": "I need to check the request",
     "fi": "Minun täytyy tarkistaa tutkimuspyyntö",
     "ipa": "/aɪ ˈnid tə ˈtʃɛk ðə rɪˈkwɛst/",
     "ex": "I need to check the request with my supervisor.",
     "exFi": "Minun täytyy tarkistaa tutkimuspyyntö ohjaajani kanssa."
    },
    {
     "en": "I'll ask my supervisor",
     "fi": "Kysyn ohjaajaltani",
     "ipa": "/aɪl ˈæsk maɪ ˈsupɚˌvaɪzɚ/",
     "ex": "I'll ask my supervisor to help.",
     "exFi": "Pyydän ohjaajaani auttamaan."
    },
    {
     "en": "The sample will go to the laboratory",
     "fi": "Näyte toimitetaan laboratorioon",
     "ipa": "/ðə ˈsæmpəl wɪl ˈɡoʊ tə ðə ˈlæbrəˌtɔri/",
     "ex": "The sample will go to the laboratory for testing.",
     "exFi": "Näyte toimitetaan laboratorioon tutkittavaksi."
    },
    {
     "en": "Thank you for your cooperation",
     "fi": "Kiitos yhteistyöstä",
     "ipa": "/ˈθæŋk ju fɚ jʊr koʊˌɑpəˈreɪʃən/",
     "ex": "Thank you for your cooperation today.",
     "exFi": "Kiitos tämänpäiväisestä yhteistyöstä."
    }
   ],
   "pron": {
    "text": "Kertaa henkilökohtaisesti vaikeimmat sanat: laboratory, date of birth, tourniquet, venipuncture, dizzy ja supervisor. Keskity ymmärrettävyyteen ja amerikkalaisen englannin rytmiin.",
    "focus": [
     {
      "en": "laboratory",
      "ipa": "/ˈlæbrəˌtɔri/",
      "tip": ""
     },
     {
      "en": "date of birth",
      "ipa": "/ˈdeɪt əv ˈbɝθ/",
      "tip": ""
     },
     {
      "en": "tourniquet",
      "ipa": "/ˈtɝnɪkɪt/",
      "tip": ""
     },
     {
      "en": "venipuncture",
      "ipa": "/ˈvɛnəˌpʌŋktʃɚ/",
      "tip": ""
     },
     {
      "en": "dizzy",
      "ipa": "/ˈdɪzi/",
      "tip": ""
     },
     {
      "en": "supervisor",
      "ipa": "/ˈsupɚˌvaɪzɚ/",
      "tip": ""
     }
    ]
   },
   "scenario": "Koko osastokäynti: Sadan esittelee itsensä, varmistaa tunnistamisen, selittää näytteenoton ja pyytää apua potilaan voidessa huonosti.",
   "dialogue": [
    {
     "s": "Sadan",
     "en": "Good morning. My name is Sadan. I'm a biomedical laboratory science student at Metropolia.",
     "fi": "Hyvää huomenta. Nimeni on Sadan. Olen bioanalyytikko-opiskelija Metropoliassa."
    },
    {
     "s": "Potilas",
     "en": "Good morning. Are you here for my blood test?",
     "fi": "Hyvää huomenta. Oletteko täällä verikoettani varten?"
    },
    {
     "s": "Sadan",
     "en": "Yes. Before we begin, could you tell me your full name and date of birth?",
     "fi": "Kyllä. Ennen kuin aloitamme, voisitteko kertoa koko nimenne ja syntymäaikanne?"
    },
    {
     "s": "Potilas",
     "en": "My name is Daniel Brown. My date of birth is May fifth, nineteen sixty-eight.",
     "fi": "Nimeni on Daniel Brown. Olen syntynyt 5. toukokuuta 1968."
    },
    {
     "s": "Sadan",
     "en": "Thank you. I'll also check your wristband and the request with my supervisor.",
     "fi": "Kiitos. Tarkistan myös tunnistusrannekkeen ja pyynnön ohjaajani kanssa."
    },
    {
     "s": "Potilas",
     "en": "What will happen next?",
     "fi": "Mitä seuraavaksi tapahtuu?"
    },
    {
     "s": "Sadan",
     "en": "I'll explain the procedure. You may feel a small pinch. Please tell me if you feel unwell.",
     "fi": "Kerron toimenpiteestä. Voitte tuntea pienen nipistyksen. Kertokaa, jos voitte huonosti."
    },
    {
     "s": "Potilas",
     "en": "Actually, I feel a little dizzy.",
     "fi": "Minua itse asiassa huimaa vähän."
    },
    {
     "s": "Sadan",
     "en": "Thank you for telling me. We'll stop now and get help.",
     "fi": "Kiitos, kun kerroitte. Keskeytämme nyt ja haemme apua."
    },
    {
     "s": "Potilas",
     "en": "Thank you.",
     "fi": "Kiitos."
    },
    {
     "s": "Sadan",
     "en": "I'll call my supervisor right away and stay with you.",
     "fi": "Kutsun ohjaajani heti ja pysyn luonanne."
    }
   ],
   "listening": [
    {
     "script": "Sadan: Good morning. My name is Sadan. I'm a student at Metropolia. Could you tell me your full name and date of birth? Patient: My name is Daniel Brown. I was born on May fifth, nineteen sixty-eight.",
     "q": [
      "Mikä opiskelijan nimi ja koulu ovat?",
      "Mitä kahta tunnistetietoa kysytään?",
      "Mikä potilaan syntymäaika on?"
     ],
     "a": [
      "Sadan ja Metropolia.",
      "Koko nimi ja syntymäaika.",
      "5.5.1968."
     ]
    },
    {
     "script": "Patient: I'm feeling dizzy. Sadan: We'll stop now. I'll call my supervisor immediately. Patient: Thank you. Sadan: I'll stay with you while help comes.",
     "q": [
      "Mistä oireesta potilas kertoo?",
      "Jatkaako Sadan näytteenottoa?",
      "Mitä Sadan tekee?"
     ],
     "a": [
      "Huimauksesta.",
      "Ei, hän keskeyttää.",
      "Kutsuu ohjaajan ja jää potilaan luo avun saapumiseen."
     ]
    }
   ],
   "speaking": [
    {
     "task": "Esittele itsesi 20-30 sekunnissa ja kerro käynnin tarkoitus ilman sanastoa.",
     "model": "Good morning. My name is Sadan. I'm a biomedical laboratory science student at Metropolia. I'm here to collect a blood sample."
    },
    {
     "task": "Tee potilaan tunnistamisen kieliharjoitus: kysy koko nimi ja syntymäaika ja sano tarkistavasi rannekkeen.",
     "model": "Could you tell me your full name and date of birth? May I check your wristband?"
    },
    {
     "task": "Potilas sanoo 'I feel dizzy.' Keskeytä tilanne ja kutsu ohjaaja englanniksi.",
     "model": "We'll stop now. I'll call my supervisor right away and stay with you."
    }
   ],
   "match": {
    "items": [
     "I'm here to collect a blood sample",
     "Could you tell me your date of birth?",
     "Do you have any questions?",
     "Tell me if you feel dizzy",
     "The sample will go to the laboratory"
    ],
    "meanings": [
     "Onko teillä kysyttävää?",
     "Näyte toimitetaan laboratorioon",
     "Olen täällä ottamassa verinäytteen",
     "Kertokaa, jos teitä huimaa",
     "Voisitteko kertoa syntymäaikanne?"
    ],
    "key": [
     3,
     5,
     1,
     4,
     2
    ]
   },
   "translate": {
    "items": [
     "Kerron toimenpiteestä",
     "Onko teillä kysyttävää?",
     "Rentouttakaa käsivartenne",
     "Voitte tuntea pienen nipistyksen"
    ],
    "key": [
     "I'll explain the procedure",
     "Do you have any questions?",
     "Please relax your arm",
     "You may feel a small pinch"
    ]
   },
   "fill": {
    "items": [
     "I'll explain the ____ before we begin.",
     "Tell me if you feel ____.",
     "Thank you for your ____."
    ],
    "key": [
     "procedure",
     "dizzy",
     "cooperation"
    ]
   },
   "quiz": [
    {
     "q": "Mitä englanninkielinen ilmaus \"I'm here to collect a blood sample\" tarkoittaa suomeksi?",
     "o": [
      "Rentouttakaa käsivartenne",
      "Kysyn ohjaajaltani",
      "Voisitteko kertoa syntymäaikanne?",
      "Olen täällä ottamassa verinäytteen"
     ],
     "a": 3,
     "x": "\"I'm here to collect a blood sample\" = \"Olen täällä ottamassa verinäytteen\". Esimerkkilause: I'm here to collect a blood sample today.",
     "ol": "fi"
    },
    {
     "q": "Mitä englanninkielinen ilmaus \"I'll explain the procedure\" tarkoittaa suomeksi?",
     "o": [
      "Minun täytyy tarkistaa tutkimuspyyntö",
      "Rentouttakaa käsivartenne",
      "Olen täällä ottamassa verinäytteen",
      "Kerron toimenpiteestä"
     ],
     "a": 3,
     "x": "\"I'll explain the procedure\" = \"Kerron toimenpiteestä\". Esimerkkilause: I'll explain the procedure before we begin.",
     "ol": "fi"
    },
    {
     "q": "Mitä englanninkielinen ilmaus \"You may feel a small pinch\" tarkoittaa suomeksi?",
     "o": [
      "Voitte tuntea pienen nipistyksen",
      "Kerron toimenpiteestä",
      "Minun täytyy tarkistaa tutkimuspyyntö",
      "Kiitos yhteistyöstä"
     ],
     "a": 0,
     "x": "\"You may feel a small pinch\" = \"Voitte tuntea pienen nipistyksen\". Esimerkkilause: You may feel a small pinch for a moment.",
     "ol": "fi"
    },
    {
     "q": "Mitä englanninkielinen ilmaus \"I need to check the request\" tarkoittaa suomeksi?",
     "o": [
      "Näyte toimitetaan laboratorioon",
      "Minun täytyy tarkistaa tutkimuspyyntö",
      "Rentouttakaa käsivartenne",
      "Voisitteko vahvistaa koko nimenne?"
     ],
     "a": 1,
     "x": "\"I need to check the request\" = \"Minun täytyy tarkistaa tutkimuspyyntö\". Esimerkkilause: I need to check the request with my supervisor.",
     "ol": "fi"
    },
    {
     "q": "Mikä on ilmauksen \"Voisitteko vahvistaa koko nimenne?\" englanninkielinen vastine?",
     "o": [
      "Could you confirm your full name?",
      "I'll ask my supervisor",
      "Do you have any questions?",
      "Tell me if you feel dizzy"
     ],
     "a": 0,
     "x": "Oikea ilmaus on \"Could you confirm your full name?\". Mallissa: Could you confirm your full name, please?",
     "ol": "en"
    },
    {
     "q": "Mikä on ilmauksen \"Rentouttakaa käsivartenne\" englanninkielinen vastine?",
     "o": [
      "Could you confirm your full name?",
      "Please relax your arm",
      "Thank you for your cooperation",
      "I need to check the request"
     ],
     "a": 1,
     "x": "Oikea ilmaus on \"Please relax your arm\". Mallissa: Please relax your arm on the support.",
     "ol": "en"
    },
    {
     "q": "Mikä on ilmauksen \"Näyte toimitetaan laboratorioon\" englanninkielinen vastine?",
     "o": [
      "Could you confirm your full name?",
      "Do you have any questions?",
      "You may feel a small pinch",
      "The sample will go to the laboratory"
     ],
     "a": 3,
     "x": "Oikea ilmaus on \"The sample will go to the laboratory\". Mallissa: The sample will go to the laboratory for testing.",
     "ol": "en"
    },
    {
     "q": "Potilas kertoo huimauksesta ennen näytteenottoa. Mikä on sopiva vastaus?",
     "o": [
      "The test result is normal.",
      "We should ignore your symptoms.",
      "Please stand up immediately.",
      "We will stop and call my supervisor."
     ],
     "a": 3,
     "x": "Turvallinen vastaus keskeyttää ja hakee vastuuhenkilöltä apua.",
     "ol": "en"
    },
    {
     "q": "Täydennä englanninkielinen lause suomenkielisen vihjeen perusteella: \"I'll explain the ____ before we begin.\" (\"Kerron toimenpiteestä ennen aloittamista.\")",
     "o": [
      "result",
      "request",
      "procedure",
      "sample"
     ],
     "a": 2,
     "x": "Puuttuva sana on \"procedure\". Kokonainen lause: I'll explain the procedure before we begin.",
     "ol": "en"
    },
    {
     "q": "Kertaa aiempaa: Mitä \"Label mismatch\" tarkoittaa?",
     "o": [
      "Voisitko auttaa minua?",
      "Työkaveri",
      "Näytetarran tietojen ristiriita",
      "Kiireellinen näyte"
     ],
     "a": 2,
     "x": "\"Label mismatch\" tarkoittaa \"Näytetarran tietojen ristiriita\".",
     "ol": "fi"
    }
   ],
   "safety": "Lopputesti mittaa englannin kielen valmiuksia; se ei anna lupaa toimia itsenäisesti laboratorio- tai potilastyössä."
  }
 ],
 "pretest": {
  "items": [
   {
    "t": "mc",
    "q": "Mitä \"hospital\" tarkoittaa?",
    "o": [
     "sairaala",
     "laboratorio",
     "potilas"
    ],
    "a": 0
   },
   {
    "t": "mc",
    "q": "Mitä \"patient\" tarkoittaa?",
    "o": [
     "opiskelija",
     "potilas",
     "sairaanhoitaja"
    ],
    "a": 1
   },
   {
    "t": "typeEn",
    "q": "Käännä englanniksi: \"Hyvää huomenta.\"",
    "key": [
     "Good morning"
    ]
   },
   {
    "t": "typeEn",
    "q": "Käännä englanniksi: \"Nimeni on Sadan.\"",
    "key": [
     "My name is Sadan",
     "I'm Sadan"
    ]
   },
   {
    "t": "typeEn",
    "q": "Miten kysyisit englanniksi potilaan koko nimeä?",
    "key": [
     "Could you tell me your full name?",
     "What is your full name?",
     "Could you confirm your full name?",
     "Please say your full name"
    ]
   },
   {
    "t": "mc",
    "q": "Mitä \"blood sample\" tarkoittaa?",
    "o": [
     "verinäyte",
     "verisuoni",
     "verihiutale"
    ],
    "a": 0
   },
   {
    "t": "mc",
    "q": "Mitä \"I feel dizzy\" tarkoittaa?",
    "o": [
     "minua huimaa",
     "minulla on nälkä",
     "olen valmis"
    ],
    "a": 0
   },
   {
    "t": "mc",
    "q": "Mitä \"supervisor\" tarkoittaa?",
    "o": [
     "potilas",
     "ohjaaja",
     "naapuri"
    ],
    "a": 1
   },
   {
    "t": "listenFi",
    "q": "Kuuntele lause. Mikä on puhujan rooli?",
    "audio": "I am a student at Metropolia.",
    "key": [
     "opiskelija"
    ]
   },
   {
    "t": "listenFi",
    "q": "Kuuntele lause. Mitä puhuja aikoo tehdä?",
    "audio": "I need to check the request.",
    "key": [
     "tarkistaa tutkimuspyynnön",
     "tarkistaa pyynnön"
    ]
   }
  ],
  "speaking": [
   "Oma nimi ja rooli",
   "Käynnin tarkoitus",
   "Kohtelias kiitos"
  ],
  "speakingModels": [
   "My name is Sadan. I'm a biomedical laboratory science student at Metropolia.",
   "I'm here to take a blood sample.",
   "Thank you. Have a nice day."
  ],
  "note": "Hyväksy myös muut luontevat ja merkitykseltään oikeat ilmaisut."
 },
 "final": {
  "partA": [
   {
    "en": "Laboratory",
    "key": [
     "Laboratorio"
    ]
   },
   {
    "en": "Full name",
    "key": [
     "Koko nimi"
    ]
   },
   {
    "en": "Sharps container",
    "key": [
     "Särmäisjäteastia",
     "Särmäjäteastia",
     "Särmäisastia"
    ]
   },
   {
    "en": "Vein",
    "key": [
     "Laskimo"
    ]
   },
   {
    "en": "Platelet",
    "key": [
     "Verihiutale"
    ]
   },
   {
    "en": "Tourniquet",
    "key": [
     "Puristusside eli staasi",
     "Puristusside",
     "Staasi"
    ]
   },
   {
    "en": "Procedure",
    "key": [
     "Toimenpide"
    ]
   },
   {
    "en": "Are you comfortable?",
    "key": [
     "Onko teillä hyvä asento?",
     "Onko teillä mukava olla?",
     "Onko sinulla hyvä asento?"
    ]
   },
   {
    "en": "Blood culture",
    "key": [
     "Veriviljely"
    ]
   },
   {
    "en": "Dizzy",
    "key": [
     "Huimaava tai huimausta",
     "Huimaava",
     "Huimaus",
     "Huimaa"
    ]
   }
  ],
  "listening": [
   {
    "script": "Sadan: Good morning. My name is Sadan. I'm a student at Metropolia. Could you tell me your full name? Patient: My name is Helen Carter. Sadan: Thank you. What is your date of birth? Patient: August twenty-first, nineteen sixty-five.",
    "q": [
     "Mikä potilaan nimi on?",
     "Mitä kahta tunnistetietoa Sadan kysyy?",
     "Mikä potilaan syntymäaika on?"
    ],
    "a": [
     "Helen Carter.",
     "Koko nimi ja syntymäaika.",
     "21.8.1965."
    ]
   },
   {
    "script": "Patient: I feel dizzy and nauseous. Sadan: Thank you for telling me. We will stop now. I'll call my supervisor. Patient: Please stay with me. Sadan: I will stay with you while help arrives.",
    "q": [
     "Mitä kahta oiretta potilas kertoo?",
     "Mitä Sadan tekee toimenpiteelle?",
     "Mitä Sadan lupaa tehdä avun saapumiseen asti?"
    ],
    "a": [
     "Huimausta ja pahoinvointia.",
     "Keskeyttää sen.",
     "Pysyä potilaan luona."
    ]
   }
  ],
  "partC": [
   {
    "q": "Potilas kysyy, miksi olet huoneessa. Kirjoita sopiva englanninkielinen vastaus.",
    "model": "I am here to take a blood sample."
   },
   {
    "q": "Potilaan ranneketiedot eivät täsmää. Kirjoita englanniksi, että tarkistat asian ohjaajalta.",
    "model": "One moment, please. I need to check the details with my supervisor."
   },
   {
    "q": "Potilas kysyy, milloin verikoetulokset tulevat ja mitä ne tarkoittavat. Vastaa ammatillisesti.",
    "model": "Your care team will explain your results and when they are available."
   },
   {
    "q": "Potilas sanoo, että häntä huimaa. Kirjoita keskeyttävä ja apua hakeva vastaus.",
    "model": "We will stop now. I will call my supervisor right away."
   }
  ],
  "partD": [
   "Esittäytyminen ja Metropolia",
   "Avoimet tunnistuskysymykset",
   "Näytteenoton yksinkertainen selittäminen",
   "Potilaan oireeseen reagointi ja avun pyytäminen"
  ],
  "scoring": "Hyväksy merkitykseltään vastaavat käännökset ja luonnolliset vaihtoehtoiset englanninkieliset lauseet. Kielioppivirheestä voi vähentää pisteitä vain, jos se vaikeuttaa ymmärtämistä. Turvallisuuteen liittyvässä tilanteessa väärä toimintaviesti on korjattava erikseen."
 },
 "guide": [
  {
   "label": "Esittäytyminen",
   "en": "Good morning. My name is Sadan. I am a biomedical laboratory science student at Metropolia."
  },
  {
   "label": "Tarkistuksen aloitus",
   "en": "Could you tell me your full name and date of birth?"
  },
  {
   "label": "Käynnin tarkoitus",
   "en": "I am here to take a blood sample."
  },
  {
   "label": "Selittäminen",
   "en": "I will explain the procedure before we begin."
  },
  {
   "label": "Voinnin tarkistus",
   "en": "Are you comfortable? Please tell me if you feel unwell."
  },
  {
   "label": "Keskeyttäminen",
   "en": "We will stop now. I will get my supervisor."
  },
  {
   "label": "Lopetus",
   "en": "Thank you for your cooperation. Have a nice day."
  }
 ],
 "sources": [
  {
   "title": "HUS – Tietoa laboratorio- ja kuvantamistutkimuksiin tulevalle",
   "desc": "Potilaan valmistautuminen ja tutkimuskäynnin yleiset ohjeet.",
   "url": "https://www.hus.fi/potilaalle/hoidot-ja-tutkimukset/laboratorio-ja-kuvantaminen/tietoa-laboratorio-ja-kuvantamistutkimuksiin-tulevalle"
  },
  {
   "title": "HUS – Diagnostiikkakeskus",
   "desc": "Diagnostiikkakeskuksen toiminta ja ammattilaisohjeiden sijainti.",
   "url": "https://www.hus.fi/tietoa-meista/potilashoidon-organisaatio/diagnostiikkakeskus"
  },
  {
   "title": "HUSLAB – Preanalytiikan käsikirja: verinäytteenotto",
   "desc": "Julkinen verinäytteenottoon liittyvien ohjeiden hakemisto.",
   "url": "https://www.huslab.fi/preanalytiikan_kasikirja/verinaytteenotto/index.html"
  },
  {
   "title": "HUS – Diagnostiikkakeskuksen putkikartta (29.2.2024)",
   "desc": "Putki- ja tutkimuskohtaiset ohjeet; taulukon yksityiskohtia ei tule päätellä ulkomuistista.",
   "url": "https://diagnostiikka.hus.fi/documents/20117/87761/putkikartta_diagnostiikkakeskuksen_asiakkaiden_kayttoon.pdf"
  }
 ],
 "reviewNote": {
  "1": "Ensimmäisellä oppitunnilla ei ole aiempaa kerrattavaa. Lue tavoitteet ja aloita sanastosta."
 }
};
