# Balina – Hestelogbog v9.3.2

## Rettet i v9.3.2

- Grønt hovedtema erstattet af lys pastelpalette med creme, pudderrosa, lavendel og diskrete blå nuancer.
- Vindfølsom Balina i boks 18–08 kan få Wug 50 g anbefalet ved køligt, blæsende foldvejr, selv uden regn og med ideelt huld.
- Dette er en betinget vurdering: solrige, varmere perioder kan stadig give intet dækken.
- Regressionstest med forholdene fra skærmbilledet 27/10 (10–14 °C, vindstød 11 m/s, 0 mm regn) og modtest med lun sol.
- Opdateringen ændrer ikke brugerens gemte kalender, foder, garderobe eller øvrige data.

## Det nye i v9.3

- Lyst, mobilvenligt design med creme, pudderrosa og lavendel, tydelig hovedanbefaling og et kort vejr-overblik med ikoner.
- Lange vejrtabeller, detaljerede beregninger og indstillinger er foldet sammen, men er stadig tilgængelige.
- Kort juridisk information kan foldes ud; appens anbefaling er vejledende og erstatter ikke kontrol af hesten eller faglig rådgivning.
- Klipning registreres efter **seks områder**, hvert med bevaret, delvist klippet eller klippet pels: halsens overside, halsens underside, ryg/lænd, bryst/sider, mave/underside og bagpart. Den gamle kliptype migreres automatisk til et omtrentligt områdevalg, som bør kontrolleres.
- Klippede områder påvirker den beregnede kuldeeksponering; klipning af halsen påvirker særskilt ønsket om halsbeskyttelse. Hals udløser ikke automatisk flere gram.
- Ny garderobe: Rambo Summer Series Turnout V-front med separat 100 g **rygliner**, Amigo Wug 50 g, Amigo AmECO 12 Plus 100 g og Amigo Bravo 12 Plus Heavy 400 g. De gamle standarddækkener er fjernet fra den aktive garderobe. Egne tilføjede dækkener bevares.
- Bravo 400 g er linerkompatibel. Denne rettelse opdateres også i allerede gemte v9.3.0-garderober ved første åbning af v9.3.2.
- Linere registreret som ejet: Horseware Liner 100 g, Horseware Liner 400 g og Horseware Dry Liner 50 g. Dry Liner anvendes som midlertidig tørreløsning, ikke som permanent varmeliner.
- Summer Series' 100 g rygliner modelleres som isolering **kun over ryggen**, ikke som et almindeligt fuldt 100 g dækken. Begge tilstande (med og uden rygliner) kan vælges i anbefalingslogikken.
- Ny standard for Balina: fold 08–18 og boks 18–08 i uisoleret stald. Vejr i boksen vægtes anderledes end ude på folden.
- Profil, klipning, garderobe, linerstatus og andre indstillinger gemmes lokalt og genberegner anbefalingen med den seneste cachede prognose (eller henter ny).
- Eksisterende kalender, økonomi, foder, observationer og andre data bevares ved migration fra v9.2.1.

## Bemærk før brug

1. **Eksportér en backup fra den eksisterende app** under "Backup / flyt til ny telefon" før du skifter version.
2. Hvis du åbner appen under en **anden adresse eller som en anden lokal fil**, er browserens localStorage ikke automatisk delt. Importér din JSON-backup i den nye version.
3. Kontrollér klipområderne efter første åbning. Gamle kliptyper er kun omtrentligt oversat.
4. Kontrollér, at linerfæsterne passer til de konkrete dækkener. Både AmECO 100 g og Bravo 400 g er markeret linerkompatible efter ejerens bekræftelse. Dry Liner 50 g er til midlertidig tørring og må ikke få appen til at vælge 400 g, hvis det er for varmt.
5. Appen kræver internetforbindelse til livevejr fra Open-Meteo. De medfølgende automatiske tests kører offline med syntetiske vejrtimer. De er ikke en veterinær validering af gram-anbefalingerne.
6. Der er stadig kun én hesteprofil. Flere heste, racer og livsfaser er en senere udvidelse.

## Test

Kør `node tests/regression.mjs` og `node tests/startup.mjs` i mappen med `index.html`.

## Data

Appen gemmer data lokalt under `localStorage`-nøglen `balinaHQ`. Eksportér en JSON-backup regelmæssigt. Ingen live-synkronisering eller egentligt brugerlogin i denne udgave.
