# Balina – Hestelogbog v9.4.0

## Hvad er nyt?

Balina er bygget om til en enkel, mobilvenlig pastelapp med tydelig navigation, én hovedopgave ad gangen og bevaret eksisterende dækkenlogik, økonomi, kalender, foder, sundhed og hesteprofil.

- Fem faste menupunkter: Hjem, Dækkener, Kalender, Pleje, Mere. Mobilmenuen ligger nederst og er tilgængelig på alle sider.
- Hjem viser dagens dækkenanbefaling, næste aftale og smedepåmindelse.
- Under Mere ligger Balinas profil (fold, boks, pels og klipning), foderplan, hestekonto, størrelser samt backup.
- De gamle direkte links (#daekken, #status, #foder, #konto osv.) fungerer stadig og åbner den relevante side.
- Pastelpalette: creme, pudderrosa, lavendel, fersken og lyseblå. Større klikområder og mindre tekst på forsiden.
- Dækkenberegning og personlige Balina-parametre fra v9.3.2 er bevaret. Dækkenets bedste match vises før det tekniske beregnede behov.
- Vejrforbindelsen er mere robust: Hvis én af to prognosemodeller svigter, bruges den anden med tydelig besked om øget usikkerhed. Hvis begge svigter, opfindes ingen anbefaling.
- Import af backup beder nu om bekræftelse, før eksisterende lokale data overskrives.

## VIGTIGT: Sådan bevarer du dine data

1. Åbn din **nuværende Balina-hjemmeside** i den browser/enhed, hvor dine registreringer ligger.
2. Gå til **Backup / flyt til ny telefon** og vælg **Eksportér data**. Gem JSON-filen et sikkert sted.
3. Udskift `index.html` og de øvrige filer på GitHub Pages med indholdet af ZIP-filen. GitHub Pages skal beholde samme adresse: `https://iskoven50.github.io/Balina/`.
4. Åbn siden igen i **samme browser på samme enhed**. Da appen stadig bruger `localStorage`-nøglen `balinaHQ`, bør alle registreringer følge med automatisk.
5. Hvis du bruger en anden browser, en anden telefon eller åbner HTML-filen direkte fra computeren, bliver browserlageret ikke automatisk overført. Brug da **Mere → Backup & indstillinger → Importér data** og vælg JSON-filen.
6. Kontrollér dine aftaler, hestekonto, foder, garderobe og profil, før du sletter din gamle backup.

**Vigtigt:** GitHub Pages er ikke en database. Der er ingen cloud-synkronisering mellem forskellige enheder eller brugere. Opdatering af selve hjemmesiden ændrer ikke automatisk de lokale browserdata, så længe domæne og browser er uændret. Rydning af browserdata kan slette dine registreringer.

## Teknisk

- Ren HTML/CSS/JavaScript, uden eksterne UI-biblioteker.
- Vejr via Open-Meteo kræver internet.
- Lagringsnøgle: `balinaHQ` (uændret), vejr-cache `balinaWeatherDualModelV89` (uændret).
- Automatisk migration fra ældre versioner fortsat aktiv.
- Anbefalingerne er vejledende. Kontroller altid hestens komfort og tilstand.
- Testet med headless Chromium for navigation, redigering af profil, browserlager og én fungerende vejrmodel. Dette er ikke veterinær validering af dækkenmodellen.
