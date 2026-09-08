# Balina – Hestelogbog v9.0.2

Denne version bygger videre på Balinas specialkalibrerede dækkenlogik ("guldprofilen") og gør sammenhængen mellem aktuelle forhold, optimalt dækkenbehov og Balinas konkrete garderobe tydeligere.

## Nyt i v9.0.2

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
