import schedule from "/assets/JSON/schedule.json" with { type: 'json' }
import alert from "/assets/JSON/alert.json" with { type: 'json' }

const openStatus = document.querySelector(".open-status h2")
const pulse = document.querySelector(".open-status-icon")

// Runs `checkOpenStatus()` during load, then each 30 seconds
checkOpenStatus()
setInterval(() => checkOpenStatus(), 30000)

// Main script acting as initializer for all functions
function checkOpenStatus(date = new Date()) {
    let day = date.getDay()
    let hour = date.getHours()
    let minute = date.getMinutes()

    if (alert.overrideStatus) {
        setStatus(alert.color, alert.status)
    }
    else if (schedule[day] === null || lateTime(day, hour, minute)) {
        let newScheduleDay = newDay(day)
        let openingTime = schedule[newScheduleDay[0]][0].time

        let until = null

        if (newScheduleDay[1] <= 1) {
            until = `imorgen ${openingTime}`
        }
        else if (newScheduleDay[0] === 1 ) {
            until = `mandag ${openingTime}`
        }

        setStatus("red", "Åpner", null, until)
    }
    else if (earlyTime(day, hour, minute)) {
        let postContent = schedule[day][0].time

        setStatus("red", "Åpner", postContent)
    }
    else {
        for (let i = 0; i < schedule[day].length; i++) {
            // Finds the status after the current time interval.
            // Therefore "setOpenStatus()" contains "i - 1" to
            // offset this effect
            if (targetTime(i, day, hour, minute)) {
                let color = schedule[day][i - 1].color
                let status = schedule[day][i - 1].status
                let since = schedule[day][i - 1].time
                let until = schedule[day][i].time

                let preContent = `${status}:`
                let postContent = ` ${since} -> ${until}`

                setStatus(color, preContent, postContent)
                break
            }
        }
    }
}

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

function earlyTime(day, hour, minute) {
    let earlyTime = schedule[day][0].time
    let earlyHour = earlyTime.match(/^[^:]*/)[0]
    
    if (hour <= earlyHour) {
        let earlyMinute = earlyTime.match(/[^:]*$/)[0]
        if (minute <= earlyMinute) {
            return true
        }
    }

    return false
}

function lateTime(day, hour, minute) {
    let lateTime = schedule[day][schedule[day].length - 1].time
    let lateHour = lateTime.match(/^[^:]*/)[0]

    if (hour >= lateHour) {
        let lateMinute = lateTime.match(/[^:]*$/)[0]
        if (minute >= lateMinute) {
            return true
        }
    }

    return false
}

function setStatus(color = "red", content = "") {
    if (open) {
        openStatus.innerHTML = `${status}: ${since} -> ${until}`
        pulse.innerHTML = `<img src="/assets/pulses/${color}Pulse.svg" alt="open-status-icon">`
    }
    else {
        openStatus.innerHTML = `${status} ${until}`
        pulse.innerHTML = `<img src="/assets/pulses/${color}Pulse.svg" alt="open-status-icon">`
    }
}

function newDay(day) {
    for (let i = 1; i < 7; i++) {
        let dayCheck = (day + i) % 7
        if (schedule[dayCheck] !== null) {
            return [dayCheck, i]
        }
    }

    return null
}