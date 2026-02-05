// Importerer arrays fra ./schedule.json 
import schedule from './schedule.json' with { type: 'json' }

let date = new Date()
let i = 0
let found = false
let status, since, until = ""

let isItOpen = document.getElementById("isItOpen")

let minuteTime = date.getHours() * 60 + date.getMinutes()

while (i < schedule.length && found === false) {
    // Her finner programmet dagen i array, deretter går den gradvis oppover fra bunnen og gir tidspunkt som 09:15
    let targetTime = schedule[date.getDay()][i].match(/^[^-]*/)
    // For å sammenlikne nåtid med tidspunkt for Makerspace er det overført til minutter etter midnatt
    let targetMinute = Number(targetTime[0].match(/^[^:]*/)[0]) * 60 + Number(targetTime[0].match(/[^:]*$/)[0])
    
    if (targetMinute >= minuteTime) {
        status = schedule[date.getDay()][i - 1].match(/[^-]*$/)[0]
        since = schedule[date.getDay()][i - 1].match(/^[^-]*/)
        until = schedule[date.getDay()][i].match(/^[^-]*/)
        isItOpen.innerHTML = `${status}: ${since} &rarr; ${until}`

        found = true
    }

    i++
}