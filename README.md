# Sadan's Medical English

Sairaalan englantia bioanalytiikan opiskelijalle (Metropolia ammattikorkeakoulu).
12 oppituntia, 144 ilmausta, 12 keskustelua, 24 kuuntelutekstiä, 120 testikysymystä sekä alku- ja lopputesti.
Ohjeet ovat suomeksi, ääntämismalli on amerikanenglanti (en-US).

Sivusto on tavallinen staattinen verkkosivu: ei tilejä, ei palvelinta, ei maksuja, ei seurantaa.
Edistyminen tallentuu vain käyttäjän omaan selaimeen.

> Tämä on itsenäisen kielenopiskelun harjoitusmateriaali. Se ei ole Metropolian tai HUSin virallinen palvelu eikä kliininen työohje.

---

## 1. Kokeile omalla koneella

Helpoin tapa: avaa `index.html` kaksoisklikkaamalla. Sivusto toimii suoraan tiedostosta.

Jos selain rajoittaa jotain (esim. tallennusta), käynnistä pieni paikallinen palvelin kansiossa, jossa `index.html` on:

```bash
python3 -m http.server 8000
```

Avaa sitten selaimessa osoite <http://localhost:8000>.

## 2. Julkaise ilmaiseksi GitHub Pagesissa

1. Luo tili osoitteessa <https://github.com>, jos sinulla ei vielä ole sitä.
2. Valitse **New repository**. Anna nimeksi esimerkiksi `medical-english` ja valitse **Public**. Paina **Create repository**.
3. Valitse uudella sivulla **uploading an existing file**.
4. Raahaa selaimeen **tämän kansion sisältö** (ei itse kansiota): `index.html`, `manifest.webmanifest`, `.nojekyll`, `README.md` sekä kansiot `css`, `js`, `assets` ja `docs`.
   - Vinkki: `.nojekyll` on piilotiedosto. Jos se ei näy, sivusto toimii silti.
5. Paina **Commit changes**.
6. Avaa **Settings → Pages**. Valitse kohdassa *Build and deployment*: Source = **Deploy from a branch**, Branch = **main** ja kansio **/(root)**. Paina **Save**.
7. Odota 1–2 minuuttia. Sivun yläreunaan ilmestyy osoite, esimerkiksi
   `https://kayttajanimi.github.io/medical-english/`.
8. Avaa osoite Android-puhelimen Chromessa. Valikosta (⋮) voi valita **Lisää aloitusnäyttöön**, jolloin sivu aukeaa kuin sovellus.

Kaikki polut ovat suhteellisia, joten sivusto toimii myös repositorion alikansiossa (`/medical-english/`).

**Päivittäminen:** lataa muuttunut tiedosto samalla tavalla uudelleen (*Add file → Upload files*). Käyttäjän edistyminen säilyy, koska se on hänen selaimessaan.

## 3. Ääni: mikä riippuu selaimesta?

Ääni tehdään laitteen omalla puhesynteesillä (Web Speech API). Siksi:

- **Android + Chrome** toimii yleensä hyvin. Jos ääntä ei kuulu: *Asetukset → Järjestelmä → Kielet → Tekstistä puheeksi* ja varmista, että englanti (Yhdysvallat) on asennettu.
- Sivusto valitsee automaattisesti luonnollisimman **naisäänen** (en-US). Äänen voi vaihtaa: *Edistyminen → Ääniasetukset*, jossa on myös ohjeet luonnollisempien äänten asentamiseen.
- Nimi *Sadan* luetaan suomalaisittain ”SAH-dahn” (tiedostossa `js/speech.js`, muuttuja `NAME_SPOKEN`). Näytöllä nimi on aina Sadan.
- Sivusto käyttää **vain en-US-ääniä**. Jos laitteessa on vain brittiläinen ääni, sivu kertoo sen suomeksi eikä toista ääntä brittiläisenä.
- Jos selain ei kerro äänilistaansa, ääni pyydetään silti kielellä en-US, ja sivu kertoo, ettei murretta voitu tarkistaa.
- Äänen laatu ja äänien määrä vaihtelevat laitteittain. Kuuntelutehtävissä toinen puhuja saa eri äänen, jos laitteessa on vähintään kaksi en-US-ääntä.
- Ääni ei käynnisty itsestään; se alkaa vain painikkeesta. Uusi toisto pysäyttää edellisen, ja sivulta poistuminen pysäyttää äänen.
- Sivusto **ei arvioi ääntämistä**. Puheharjoitukset tehdään kuuntelemalla, toistamalla ja arvioimalla itse – mikrofonia ei tarvita.
- Jos ääni ei toimi lainkaan, kaikki tekstit ovat luettavissa (*Näytä käsikirjoitus*, *Näytä mallivastaus*).

## 4. Tallennus ja yksityisyys

- Edistyminen tallentuu selaimen `localStorage`-muistiin avaimella `sadan-medical-english.v1`.
- Tiedot eivät liiku minnekään. Ne voivat kadota, jos selaimen tiedot tyhjennetään tai käytetään yksityistä selausta.
- *Edistyminen*-sivulla voi ladata varmuuskopion (JSON) ja palauttaa sen toisella laitteella, sekä nollata kaiken (vahvistuksen kanssa).
- Sivusto ei kerää eikä tallenna potilastietoja. Kaikki potilaat ovat keksittyjä.

## 5. Tiedostot

```
index.html               Sivun runko
manifest.webmanifest     "Lisää aloitusnäyttöön" -tiedot
.nojekyll                Estää GitHubia käsittelemästä tiedostoja
css/styles.css           Ulkoasu (värit, typografia, mobiili/työpöytä)
js/course-data.js        KAIKKI kurssisisältö (12 oppituntia, testit)
js/store.js              Paikallinen tallennus
js/speech.js             en-US-puhesynteesi
js/app.js                Näkymät, harjoitukset, pisteytys, reititys
assets/icon.svg          Kuvake
docs/DESIGN.md           Suunnitteluperusteet ja sivukartta
docs/SCHEMA.md           Sisällön tietorakenne
docs/MUUTOKSET.md        Kaikki työkirjaan tehdyt korjaukset
```

Sisältöä voi muokata suoraan tiedostossa `js/course-data.js` (rakenne: `docs/SCHEMA.md`).
