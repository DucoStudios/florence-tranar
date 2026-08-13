# Florence tränar

Florences egen app för rörelse och enkla vanor. Inget med vikt eller kalorier att göra –
bara ett träningsval för dagen, några enkla kryssrutor och en frivillig kul utmaning.

**Live:** https://ducostudios.github.io/florence-tranar/

## Innehåll

- **Dagens rörelse:** fyra träningspass att välja mellan (Crosstrainer, Hoppa & studsa,
  Balans & stretch, Lek ute). Ett val per dag räcker.
- **Enkla vanor:** fyra kryssrutor (vatten, utomhus, skärmpaus, läggtid) med en kort rad
  om varför det är bra, hämtat från allmän barnhälsoforskning (WHO:s rörelserekommendation,
  sömnrekommendationer för barn 6–12 år, dygnsrytm/dagsljus).
- **Veckan:** en enkel överblick över de senaste sju dagarna.
- **Utmaning:** en frivillig "inget-socker"-utmaning med en positiv, skambefriad ton –
  ingen bestraffning om hon hoppar av en dag.
- **Färgtema:** fem färgval (Solsken, Havet, Skogen, Rymden, Korall) plus ljust/mörkt/auto.

Inget vikt-, kalori- eller kroppsmåttspårande finns i appen, och ska inte läggas till.

## Mobil och offline

Installerbar PWA, låst till stående läge (`orientation: portrait` i manifestet).
Sparas som offline-reserv efter första besöket.

## Lagring

Sparas i `localStorage` på enheten, med JSON-backup/återställning på inställningssidan.
Ingen molnsynk är inkopplad ännu – kan läggas till senare med samma Google Sheets-mönster
som i `visceral-fat-app`, kopplat till Florences eget Google-konto, om hon vill det.

## Kontroll före publicering

```bash
npm run typecheck
npm test
```

`npm test` innehåller bland annat en innehållskontroll som stoppar bygget om vikt-,
kalori- eller BMI-terminologi råkar smyga sig in – appen ska hålla sig till rörelse och
vanor, inte kroppsmått.
