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

## Lisens
Prosjektet er lisensert under GPLv3 på grunn av at JavaScript biblioteket lightGallery blir brukt. Men det er også lisensiert sånn for å la nettsiden være åpent å endre på og brukes for elever. Andre ting å være obs på er at _**ikke**_ alt er lisensiert under GPLv3, _alt_ under delmappen `photos` er lisensiert under "All Rights Reserved", og skal _**ikke**_ bli brukt til andre formål enn denne nettsiden. Dette gjelder hvilket som helst bilder som inneholder noen som helst elever, men er organisert på denne måten for å gjøre det lettere å skille mellom. Det kan også være tilfeller hvor noen ressurser er lisensiert under andre betingelser, så se kommentarer!

Alle bidrag til dette GitHub arkivet vil også gi Elvebakken Skaperverksted samme rettigheter som forfatteren, noe som lar oss endre lisens når som helst vi ønsker og gjør oss _ikke_ pliktig til å oppgi ditt navn som en av forfatterene. Derfor er det viktig at alle bidrag tilhørerer enten forfatteren eller har en lisens som passer til GPLv3.
