# Sisällön tietorakenne (`js/course-data.js`)

`window.COURSE` = olio:

| Kenttä | Sisältö |
|---|---|
| `version` | Skeeman versio (1) |
| `lessons[12]` | Oppitunnit (alla) |
| `pretest` | `items[10]` (`t`: `mc` \| `typeEn` \| `listenFi`; `q`, `o`, `a` tai `key[]`, `audio`), `speaking[3]`, `speakingModels[3]`, `note` |
| `final` | `partA[10]` {`en`, `key[]`}, `listening[2]` {`script`, `q[3]`, `a[3]`}, `partC[4]` {`q`, `model`}, `partD[4]`, `scoring` |
| `guide[7]` | Kertauksen pikaopas {`label`, `en`} |
| `sources[4]` | HUSin julkiset lähteet {`title`, `desc`, `url`} |

## Oppitunti
```
{
  id, title (fi), titleEn, goals[3],
  vocab[12]: { en, fi, ipa (en-US), ex (EN-esimerkki), exFi },
  pron: { text (työkirjan ohje), focus[]: { en, ipa, tip } },
  scenario, dialogue[]: { s: "Sadan"|"Potilas"|"Ohjaaja", en, fi },
  listening[2]: { script (EN, puhujat "Sadan:"/"Patient:"/"Supervisor:"/"Nurse:"), q[3] (fi), a[3] (fi) },
  speaking[3]: { task (fi), model (EN) },
  match: { items[5] (EN), meanings[5] (fi), key[5] (meanings-indeksi 1–5) },
  translate: { items[4] (fi), key[4] (EN) },
  fill: { items[3] (EN, aukko "____"), key[3] },
  quiz[10]: { q (fi), o[4], a (0–3), x (selitys fi), ol: "fi"|"en" (vaihtoehtojen kieli) },
  safety (fi)
}
```

Vain `en`-kentät lähetetään puhesynteesille. Sanaston avain on `"<oppitunti>-<indeksi>"` (esim. `"6-5"` = tourniquet).

## Tallennus (`localStorage["sadan-medical-english.v1"]`)
`{ v:1, lessons:{ "<id>": { steps[], quiz:{attempts,best,last}, ex:{match,tr,fill}, listen:{}, speak:{}, self:{checks[],words,conf}, done } }, bookmarks[], practice[], audio:{rate,voiceURI}, pretest, final, last }`
