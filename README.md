# Balina – Hestelogbog v9.0.0

**Din hests hverdag samlet ét sted**

Denne version bygger videre på v8.12.1 og bevarer Balinas specialkalibrerede dækkenlogik som en særskilt “guldprofil”. Nye profilvalg må kun justere Balina-logikken – de erstatter den ikke med en generel varmblodsregel.

## Implementeret i v9.0.0

### Dækkenguide
- Anbefalingsperioden går fra nu til **kl. 15 næste dag**.
- Balinas aktive garderobe er opdateret:
  - Amigo 50 g med halvhøj hals.
  - Amigo 250 g med halvhøj hals.
  - Rambo Summer Series 155, tilpasset, med/uden hals og 100 g rygliner.
  - Amigo 100 g med aftagelig hals og 100/400 g liner.
  - Amigo 400 g vinterdækken med aftagelig hals og 100/400 g liner.
- Rambo Duo 155 og Summer Series 145 er taget ud af motoren. Bucas er foreløbig ikke aktiv.
- Kraftig/vedvarende regn + vind diskvalificerer Summer Series som hovedvalg.
- Det nye Amigo 50 g prioriteres ved behov for let, lukket regn-/vindbeskyttelse.
- Det nye Amigo 250 g prioriteres frem for 100 + 100 g liner ved overlap.
- Balinas læring om kølig nat + lun dag kan vælge Summer Series som rygvarme/ventilations-kompromis.
- Kliptype, huld og seniorstatus bruges som støtteparametre oven på Balinas eksisterende logik.

### Profil og klipning
- Hestetype, senior ja/nej, huld 1–9, pels og konkret kliptype.
- Visuelle klippevalg med illustrationer.
- Full, Hunter, Trace, Hunter/Chaser, Irish, Blanket og Bib Clip.

### Kalender og vedligehold
- Kalenderaftaler kan have påmindelse i appen: ingen, samme dag, 1, 2 eller 7 dage før.
- Det står tydeligt, at der **ikke sendes push-notifikationer** i denne version.
- Kalenderaftaler kan mærkes fælles, privat/“Optaget” eller skjult som forberedelse til senere delt adgang.
- Smed viser nu dage til / i dag / overskredet med X dage ud fra 6 uger.
- Sadelpudsning er tilføjet med 28 dages interval og starter som “Overskredet med 1 dag”, indtil en dato registreres.

### Foder
- Ny vejledende fodervurdering baseret på huld, græsmængde, grovfoderadgang og arbejdsniveau.
- Særligt fokus på forskellen mellem tilbudt grovfoder og faktisk indtag ved konkurrence i flokken.
- Balinas eksisterende aktuelle foderplan bevares.

### Sundhed
- Sundhedsguiden er tydeligere opdelt i egen pleje/observation, tæt opfølgning og kontakt dyrlæge.
- Insektbid/stik og hudafskrabning/irritation er tilføjet.
- Foto kan vælges og forhåndsvises lokalt til vurdering/historik-flowet.
- Medicinskabet bevares.

### Privatliv og ansvar
- Tydelig disclaimer: appen er vejledende og erstatter ikke dyrlæge/fagperson.
- Brugere opfordres til ikke at registrere personfølsomme oplysninger om mennesker.
- Hestekontoen er markeret som privat ejerområde. Den nuværende statiske version har dog ikke rigtig login/adgangskontrol.

## Forberedt til senere version
- Onboarding som spørgsmål, der udfylder en ny hesteprofil.
- Flere heste med fuldstændig separate data.
- Ejer/part/passer-rettigheder med adgang pr. modul.
- Rigtig deling mellem enheder kræver backend/database.
- Cloud-historik, delte billeder og AI-assistent kræver backend og sikker API-integration.
- Budget og medicinskab skal være valgfrie moduler for andre heste.
- Andre heste skal bruge en neutral generel dækkenmotor, mens Balina fortsat bruger sin guldprofil.

## Data
Appen gemmer fortsat lokale data i browserens localStorage under `balinaHQ`. Brug Eksportér data regelmæssigt som backup.
