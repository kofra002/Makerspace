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
    ] //Mandag
    ... // Tirsdag, onsdag, torsdag, fredag
    [] //reserve
]
```

Istedenfor å skrive timeplanen i en kalender, spesifiserer man bare når statusen endres (f.eks. stengt -> åpent). Dette er for at vedlikehold skal kreve mindre arbeid men også visse slutten av perioden/intervalet med å ta utgangspunkt i starten av den neste perioden. **Derfor MÅ det være kronologisk rekkefølge**.