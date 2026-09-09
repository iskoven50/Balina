# Balina – Hestelogbog v9.1.0

Denne version bygger videre på Balinas specialkalibrerede dækkenlogik ("guldprofilen") og gør sammenhængen mellem aktuelle forhold, optimalt dækkenbehov og Balinas konkrete garderobe tydeligere.

## Nyt i v9.1.0

- Ny **aktuel sæsonpels**: sommerpels, tidlig overgangspels, overgangspels eller fuld vinterpels.
- **Pelsfylde** bevares som en separat finjustering: tynd, normal eller tyk.
- Balinas dokumenterede **regnfølsomhed** indgår nu sammen med regnens varighed, intensitet og adgang til læ.
- Balina starter i denne version som **tidlig overgangspels · normal pelsfylde · regnfølsom**.
- Mange regntimer om natten uden læ kan nu udløse let lukket 0–50 g beskyttelse, selv om den samlede regnmængde ligger under den tidligere hårde 2 mm-grænse.
- Sikkerhedsskalaen viser både prognoseusikkerhed og hvor entydigt valget er mellem mere eller mindre dækken.
- Sol og 17–18 °C efter en våd nat sænker derfor sikkerheden, selv når 50 g er det bedste samlede valg.
- Langvarig let/moderat regn beskrives ikke længere automatisk som kraftig regn.

### Kontrolscenarier fra 8. september 2026

- 1,3 mm over 6 timer, nat 14 °C, ingen læ, efterfulgt af 17 °C og sol: **let vandtæt beskyttelse 0–50 g · Amigo 50 g · 3/5**.
- 3,0 mm over 7 timer, nat 14 °C/føles 13 °C, ingen læ, efterfulgt af 18 °C og sol: **let vandtæt beskyttelse 0–50 g · Amigo 50 g · 4/5**.

## Videreført fra v9.0.2

- Standard anbefalingsperiode er igen **frem til kl. 15 næste dag**. Tidspunktet kan ændres manuelt.
- Dækkenguiden viser nu først **Optimalt behov** og derefter **Bedste match i Balinas garderobe**.
- Garderoben må aldrig bestemme behovet. Hvis der ikke findes et tilstrækkeligt godt aktivt match, gives **ingen konkret dækkenanbefaling**.
- Den eksisterende 1–5 sikkerhedsskala er bevaret.
- Balinas aktuelle forhold vises tydeligt som input til anbefalingen og kan redigeres: opstaldning, læ, huld, pels og kliptype.
- Balinas guldlogik bevares. De redigerbare parametre justerer den; de erstatter den ikke med en generel varmblodsregel.
- Kliptype-kortene er samlet i én guide med titel, illustration og kort forklaring. Den ekstra dobbelte kliptype-guide er fjernet.
- "Uklippet" har nu en neutral brun hesteillustration i samme stil som de øvrige klip.
- Klippeillustrationerne er beskåret, så hesten passer bedre i kortene.
- **Balinas garderobe er nu redigerbar**: tilføj, redigér, aktivér/deaktivér eller slet dækkener.
- Hvert dækken kan registreres med gram, hals, regnbeskyttelse, liner-kompatibilitet, registrerede liners, mesh/sommer-type, pasformsprioritet og note.
- Kun aktive dækkener indgår i Dækkenguidens match.
- Hals og liner indgår i matchlogikken, når vejret gør dem relevante.
- Sundhedsguiden har mere separate alarmsignaler ved sår: varme, hævelse, pus, smerte og feber/almen påvirkning.
- Foderplanen er fortsat en ren manuel oversigt uden automatisk foderrådgivning.

## Princip

**Vejr + Balinas aktuelle forhold + Balinas guldlogik = optimalt behov.**

Først derefter matches behovet mod de aktive dækkener i garderoben.

Hvis garderoben ikke har et forsvarligt match, viser appen behovet og forklarer hvorfor den ikke anbefaler et konkret dækken.

## Data

Data gemmes fortsat lokalt i browserens localStorage under `balinaHQ`. Brug Backup/flyt-funktionen før større ændringer eller telefonskift.
