# Balina v9.6.4 – udvidet sne- og frostkontrol

Status: TESTET KODE, IKKE FAGLIGT GODKENDT TIL AUTOMATISK DÆKKENVALG.

Nye kontroller: 64 simulerede kombinationer af nattemperatur (-6, -3, 0, 3 °C), dagtemperatur (-2, 0, 3, 6 °C), sne/ingen sne og vind/roligt. Sne simuleres som 0,5 cm/time på foldtimer med vejrkode 71.
Resultat: Ingen af de 64 kombinationer anbefalede 50 g Wug ved sne og dagtemperatur højst 3 °C.
Behovsfordeling: 100 g: 28; 200 g: 30; 250 g: 4; 400 g: 2. Fire scenarier mangler præcist garderobematch og giver manuel vurdering i stedet for automatisk opgradering.
Alle tidligere gram-, regression- og vinter-sweep-tests bestod også.
Ingen ændringer i appens beregningskode i denne revision; kun ekstra test og dokumentation.
Begrænsning: Tests bruger syntetiske vejrdata og en simuleret profil, ikke brugerens faktisk gemte profil, virkelige Open-Meteo-prognoser eller iPhone-visning.
GitHub Pages er ikke ændret af denne test.
