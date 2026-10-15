# Balina – Hestelogbog v9.2.0

Version 9.2 omsætter de seneste erfaringer fra Balina Dækkenvagt til en mere præcis døgnvurdering. Anbefalingen gælder fra nu til det registrerede næste dækkenskift og tager højde for, at Balina normalt kun får skiftet dækken én gang i døgnet.

## Nyt i v9.2.0

- **Næste dækkenskift** registreres med dato og tidspunkt. Standard er næste dag kl. 15.
- Kulde og varme vurderes efter **varighed**: kuldetimer, varme timer og soltimer tæller sammen med minimum og maksimum.
- Den kolde nat vægtes tydeligt. Kontrolscenariet 3 °C/føles 0 °C, maks. 12 °C og ingen sol giver behov omkring **100 g med fuld hals**.
- 10–12 °C om natten og cirka 14–17 °C om dagen uden stærk sol giver som udgangspunkt **Amigo Wug 50 g**.
- Sol kræver flere relevante soltimer; en enkelt lys time nedgraderer ikke længere hele perioden.
- Ved boksordning opdeles døgnet: fold kl. 08–18 vægtes fuldt, mens boks kl. 18–08 kun bruger faktisk nattemperatur og meget kraftig vind med reduceret vægt.
- Balinas faste staldprofil er **uisoleret, højloftet, lukket og trækfri stald på ca. 100 m² med seks heste**.
- Nye profildata: kuldefølsomhed, vindfølsomhed, staldprofil, dækken i boksen og Balinas tørre/fugtige tilstand.
- Sne, slud og frysende nedbør indgår i vejrvurderingen.
- Vejrmodellerne blandes ikke længere til et kunstigt timeforløb. Én sammenhængende, forsigtig model bruges, mens den anden bruges som kontrol og til sikkerhedsscoren.
- Hals vises som en konkret konfiguration: uden hals, halvhøj hals eller fuld hals på.
- Linere er et fælles lager. Balina har Horseware 100 g og 400 g liner. Dry Liner 0 g kan registreres særskilt som tørring og tæller ikke som varme.
- Dækkener har status: aktiv, reserve, til salg, ødelagt, solgt eller planlagt køb.
- Vandtæthed kan registreres som sikker i kraftig regn, brugbar i almindelig regn, usikker eller ikke regnsikker.
- Et manglende idealdækken giver stadig ét konkret sikkert garderobematch med en tydelig kompromisforklaring.
- Efterkontrol kan gemme om Balina var kold, behageligt lun, varm eller svedig samt tør/fugtig under dækkenet.
- Profilen minder om kontrol efter 14 dage.

## Aktuel garderobelogik

- Amigo Wug 50 g, str. 145: aktivt førstevalg i lette, kølige forhold.
- Amigo Wug 250 g: til salg og indgår ikke i anbefalinger.
- Rambo Summer Series 155: ødelagt og indgår kun som erfaring for det ideelle 0 g-hybridbehov.
- Ældre Amigo 100 g, str. 145: aktivt med aftagelig fuld hals og liner-system; vandtæthed er registreret med forbehold.
- Amigo 400 g, str. 145: aktivt vinterdækken med V-front og aftagelig fuld hals.
- Mellemtrinnet er 100 g-dækken + 100 g liner = 200 g.
- 400 g-lineren findes i lageret, men kombinationer over 500 g genereres ikke automatisk.

## Princip

**Vejr gennem hele perioden + Balinas aktuelle forhold + opstaldning + Balinas dokumenterede reaktioner = optimalt behov.**

Derefter matches behovet mod aktive eller relevante reservedækkener. Ødelagte, solgte, planlagte og dækkener til salg indgår ikke i anbefalingen.

## Data

Data gemmes lokalt i browserens `localStorage` under `balinaHQ`. Migrationen til v9.2 bevarer eksisterende poster og opdaterer garderobestatus, linere og Balinas nye profilfelter. Brug Backup/flyt-funktionen før telefonskift.
