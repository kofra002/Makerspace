// Importerer arrays fra /assets/JSON/schedule.json 
import schedule from "/assets/JSON/schedule.json" with { type: 'json' }

let date = new Date()
let i = 0
let found = false
let status, since, until, color = ""

let openStatus = document.querySelector(".open-status h2")
let pulse = document.querySelector(".open-status-icon")

let minuteTime = date.getHours() * 60 + date.getMinutes()

while (i < schedule.length && found === false) {
    // - 1 fordi den begyner på søndag
    let day = date.getDay() - 1
    // Her finner programmet dagen i array, deretter går den gradvis oppover fra bunnen i while løkken og gir tidspunkt som 09:15
    let targetTime = schedule[day][i].time
    // For å sammenlikne nåtid med tidspunkt for Makerspace er det overført til minutter etter midnatt, som 'minuteTime'
    let targetMinute = Number(targetTime.match(/^[^:]*/)[0]) * 60 + Number(targetTime.match(/[^:]*$/)[0])
    
    if (targetMinute >= minuteTime) {
        status = schedule[day][i - 1].status
        since = schedule[day][i - 1].time
        until = schedule[day][i].time
        color = schedule[day][i - 1].color

        openStatus.innerHTML = `${status}: ${since} -> ${until}`
        pulse.innerHTML = `<img src="/assets/pulses/${color}Pulse.svg" alt="open-status-icon">`

        found = true
    }

    i++
}

// if (found === false) {
//     status = schedule[7].status
//     color = schedule[7].color
//     isItOpen.innerHTML = `${status} <img src="/assets/pulses/${color}Pulse.svg"/>`

//     found = true
// }