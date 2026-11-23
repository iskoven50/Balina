# Balina v9.6.4 – vintertest, endnu ikke produktionsgodkendt

- 12 gramtests bestået.
- 17 eksisterende regressions-/scenariekontroller bestået.
- 80 nye kombinationer af vintertemperatur, regn og vind gennemkørt uden ugyldigt output.
- 3 af 80 scenarier giver et beregnet 250 g behov uden præcist match i garderoben. Appen viser nu de faktisk tilgængelige 200 g og 300 g nabotrin som **manuelle sammenligningsmuligheder**, uden at anbefale nogen af dem automatisk.
- Ingen automatisk opgradering fra 250 g til 400 g i de gennemførte scenarier.
- Den nye 200 g liner er registreret i testkoden.
- Python v0.4 er ikke integreret; appens øvrige funktioner er bevaret.
- **VIGTIGT:** Tests bekræfter beregnerens interne konsistens, ikke at grambehovet er fysiologisk korrekt. Ingen livevejrs-/iPhone-validering. Den aktive GitHub Pages-app er ikke ændret.
- Test på særskilt adresse, kontrollér profilen og tag JSON-backup før eventuel offentliggørelse.
