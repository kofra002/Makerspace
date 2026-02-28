// Importerer arrays fra /assets/JSON/schedule.json 
import schedule from "/assets/JSON/schedule.json" with { type: 'json' }

let date = new Date(2026, 2, 12, 44)
let day = date.getDay() - 1 // - 1 fordi den begyner på søndag
//let minuteTime = date.getHours() * 60 + date.getMinutes()

let openStatus = document.querySelector(".open-status h2")
let pulse = document.querySelector(".open-status-icon")

let found = false
let status, since, until, color = ""


// Find the time where it becomes too low
function targetTime (seq) {
    let time = schedule[day][seq].time.match(/^[^:]*/)[0]
    let ref = date.getHours()

    console.log(seq)

    if (time < ref) {
        return true
    }

    return false
}

for (let i = schedule.length; 0 < i < schedule.length; i--) {
    // Her finner programmet dagen i array, deretter går den gradvis oppover fra bunnen i while løkken og gir tidspunkt som 09:15
    //let targetTime = schedule[day][i].time
    // For å sammenlikne nåtid med tidspunkt for Makerspace er det overført til minutter etter midnatt, som 'minuteTime'
    //let targetMinute = Number(targetTime.match(/^[^:]*/)[0]) * 60 + Number(targetTime.match(/[^:]*$/)[0])
    
    // Hvis "targetMinute" er større enn eller lik "minuteTime" (altså nå) vet man at den forrige fasen er den nåværende fasen på grunn av tidene er plassert kronologisk
    if (targetTime(i)) {
        status = schedule[day][i - 1].status
        since = schedule[day][i - 1].time
        until = schedule[day][i].time
        color = schedule[day][i - 1].color

        openStatus.innerHTML = `${status}: ${since} -> ${until}`
        pulse.innerHTML = `<img src="/assets/pulses/${color}Pulse.svg" alt="open-status-icon">`

        //found = true
    }


}