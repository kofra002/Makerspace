# Makerspace
Makerspace informasjons nettside

## Vedlikehold
### Åpningstider
Åpningstider er bestemt i ```/assets/JSON/schedule.json``` her er det strukturert i 7 forskjellige arrays (altså mandag, tirsdag, onsdag, osv.), men søndag er indeks 0 på grunn av JavaScript. Dermed vil strukturen se lignende:
```
[
    [], // Søndag
    ["08:15-bemannet", "09:00-stengt"], //Mandag
    ["08:15-bemannet", "10:00-Send melding"]", //Tirsdag
    ... //Onsdag, torsdag, fredag
    [] //lørdag
]
```

Istedenfor å skrive timeplanen i en kalender, spesifiserer man bare når statusen endres (f.eks. stengt -> åpent). Dette er for at vedlikehold skal kreve mindre arbeid men også visse slutten av perioden/intervalet med å ta utgangspunkt i starten av den neste perioden. **Derfor MÅ det være kronologisk rekkefølge**.

Syntaksen må bli skrevet på følgende måte: ```HH:mm-STATUS``` Dette er på grunn av Regex skiller med : og - for å få riktig informasjon.