# Makerspace
Makerspace informasjons nettside

## Vedlikehold
### Åpningstider
Åpningstider er bestemt i ```/assets/JSON/schedule.json``` her er det strukturert i 6 forskjellige arrays (altså mandag, tirsdag, onsdag, osv.). Dermed vil strukturen se lignende:
```
[
    [
        {"time": "08:15", "status": "Bemannet", "color": "green"},
        {"time": "10:00", "status": "Send melding", "color": "yellow"}
        ...
    ], // Mandag
    ... // Tirsdag, onsdag, torsdag, fredag
    [] // Reserve (altså dersom ingen andre passer som lørdag og sandag)
]
```

Istedenfor å skrive timeplanen i en kalender, spesifiserer man bare når statusen endres (f.eks. stengt -> åpent). Dette er for at vedlikehold skal kreve mindre arbeid men også visse slutten av perioden/intervalet med å ta utgangspunkt i starten av den neste perioden. **Derfor MÅ det være kronologisk rekkefølge**.

### Varsling
Nettsiden har en innebygd varslings funksjon for besøkende, denne er håndeet utelukkende i ```/assets/JavaScript/warning.js```. Scripten sjekker om en variabel inneholder noe, derfor **pass på mellomrom** som at den ikke blir plassert tom. Variablen som må endres heter ```content``` og kan inneholde hva som helst.