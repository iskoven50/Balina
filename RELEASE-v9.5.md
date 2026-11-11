# Balina v9.5 – uploadpakke

Ændringer: 10 forklaringspaneler til profilparametre, valgfri huldscore 3–7 i halve trin, mere præcis håndtering af regnfølsomhed som krav om vejrbeskyttelse, særskilt forklaring af varme og vejrbeskyttelse, og justeret sikkerhedsskala. Kun én tilgængelig vejrmodel kan højst give 3/5.

Databevarelse: `balinaHQ` og `balinaWeatherDualModelV89` er uændrede. Behold samme GitHub Pages-adresse. Tag JSON-backup før opdatering.

Test: JavaScript bestod `node --check`. Appen blev indlæst i Chromium uden sidefejl, 10 forklaringspaneler blev verificeret, og fire syntetiske vejrsituationer (køligt, regnfuldt, varmt og frost) gennemførte dækkenberegningen uden JavaScript-fejl. Én vejrmodel gav 3/5 i sikkerhed i testen. 

Begrænsninger: Browsermiljøet blokerede lokal HTTP-navigation; derfor er fuld slut-til-slut-test med faktisk Open-Meteo, rigtig browserlagring og import/eksport ikke gennemført. Beregningen er ikke veterinærvalideret, og anbefalinger skal altid kontrolleres mod hestens komfort. Vejrbeskyttelse og isolering vises som særskilte forklaringer, men beregnes fortsat i én samlet model.

Upload: Pak ZIP ud og upload indholdet til roden af GitHub-repositoriet, erstat eksisterende filer, og vælg Commit changes. Upload ikke ZIP-filen direkte.
