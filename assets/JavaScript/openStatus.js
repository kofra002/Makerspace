// Importerer arrays fra /assets/JSON/schedule.json 
import schedule from "/assets/JSON/schedule.json" with { type: 'json' }

// Finner hvor statusen og pulsen skal plasseres
let openStatus = document.querySelector(".open-status h2")
let pulse = document.querySelector(".open-status-icon")

// Kjorer funksjonene nar started, deretter hvert minutt
checkOpenStatus()
setInterval(() => checkOpenStatus(), 60000)

// Sjekker forst om timen er enten lik eller hoyere enn malet.
// Dersom dette stemmer gjor den det samme med minutter og 
// finner hvilket interval det er (viktig! Kronologisk JSON fil)
function targetTime(sequence, day, hour, minute) {
    let time = schedule[day][sequence].time
    let hourRef = time.match(/^[^:]*/)[0]

    if (hour <= hourRef) {
        let minuteRef = time.match(/[^:]*$/)[0]
        if (hour < hourRef || minute <= minuteRef) {
            return true
        }
    }

    return false
}

// Setter statusen i nettsiden
function setOpenStatus(sequence, day) {
    let status = schedule[day][sequence - 1].status
    let since = schedule[day][sequence - 1].time
    let until = schedule[day][sequence].time
    let color = schedule[day][sequence - 1].color

    openStatus.innerHTML = `${status}: ${since} -> ${until}`
    pulse.innerHTML = `<img src="/assets/pulses/${color}Pulse.svg" alt="open-status-icon">`
}

// Hoved skriptet som sjekker nå tid og starter de andre skriptene
function checkOpenStatus() {
    let date = new Date()
    let day = date.getDay() - 1 // - 1 fordi den begyner på sondag
    let hour = date.getHours()
    let minute = date.getMinutes()

    for (let i = 0; i < schedule.length; i++) {
        // Den finner intervalet etter navaerende tidspukt.
        // Sa "setOpenStatus()" har "i - 1" for a fikse dette
        if (targetTime(i, day, hour, minute)) {
            setOpenStatus(i, day)
            break
        }
    }
}