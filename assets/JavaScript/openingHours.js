// Importerer arrays fra /assets/JSON/schedule.json 
import schedule from '/assets/JSON/schedule.json' with { type: 'json' }

let date = new Date(2026, 2, 6, 13, 0)
let i = 0
let found = false
let status, since, until, color = ""

let isItOpen = document.getElementById("isItOpen")

let minuteTime = date.getHours() * 60 + date.getMinutes()

while (i < schedule.length && found === false) {
    // Her finner programmet dagen i array, deretter går den gradvis oppover fra bunnen i while løkken og gir tidspunkt som 09:15
    let targetTime = schedule[date.getDay()][i].time
    // For å sammenlikne nåtid med tidspunkt for Makerspace er det overført til minutter etter midnatt, som 'minuteTime'
    let targetMinute = Number(targetTime.match(/^[^:]*/)[0]) * 60 + Number(targetTime.match(/[^:]*$/)[0])
    
    if (targetMinute >= minuteTime) {
        status = schedule[date.getDay()][i - 1].status
        since = schedule[date.getDay()][i - 1].time
        until = schedule[date.getDay()][i].time
        color = schedule[date.getDay()][i - 1].color
        isItOpen.innerHTML = `${status}: ${since} &rarr; ${until} <img src="/assets/pulses/${color}Pulse.svg"/>`

        found = true
    }

    i++
}

if (found === false) {
    status = schedule[7].status
    color = schedule[7].color
    isItOpen.innerHTML = `${status} <img src="/assets/pulses/${color}Pulse.svg"/>`

    found = true
}