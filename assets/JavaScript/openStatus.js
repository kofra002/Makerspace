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

    let color = ""
    let status = ""

    if (alert.overrideStatus) {
        color = alert.color
        status = alert.status
    }
    else if (schedule[day] === null || lateTime(day, hour, minute)) {
        let newScheduleDay = newDay(day)
        let openingTime = schedule[newScheduleDay[0]][0].time

        let opens = ""

        if (newScheduleDay[1] <= 1) {
            opens = `imorgen ${openingTime}`
        }
        else if (newScheduleDay[0] === 1 ) {
            opens = `mandag ${openingTime}`
        }

        color = "red"
        status = `Åpner ${opens}`
    }
    else if (earlyTime(day, hour, minute)) {
        let opens = schedule[day][0].time

        color = "red"
        status = `Åpner ${opens}`
    }
    else {
        for (let i = 0; i < schedule[day].length; i++) {
            // Finds the status after the current time interval.
            // Therefore "setOpenStatus()" contains "i - 1" to
            // offset this effect
            if (targetTime(i, day, hour, minute)) {
                if (schedule[day][i - 1].open) {
                    let content = schedule[day][i - 1].status
                    let since = schedule[day][i - 1].time
                    let until = schedule[day][i].time

                    status = `${content}: ${since} -> ${until}`
                }
                else if (schedule[day][i - 1].open === false) {
                    let opens = schedule[day][i].time

                    status = `Åpner ${opens}`
                }
                color = schedule[day][i - 1].color

                break
            }
        }
    }

    pulse.innerHTML = `<img src="/assets/pulses/${color}Pulse.svg" alt="open-status-icon">`
    openStatus.innerHTML = `${status}`  
}

function lateTime(day, hour, minute) {
    let lateTime = schedule[day][schedule[day].length - 1].time
    let lateHour = lateTime.match(/^[^:]*/)[0]

    if (hour >= lateHour) {
        let lateMinute = lateTime.match(/[^:]*$/)[0]
        if (minute > lateMinute) {
            return true
        }
    }

    return false
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

function earlyTime(day, hour, minute) {
    let earlyTime = schedule[day][0].time
    let earlyHour = earlyTime.match(/^[^:]*/)[0]
    
    if (hour <= earlyHour) {
        let earlyMinute = earlyTime.match(/[^:]*$/)[0]
        if (minute < earlyMinute) {
            return true
        }
    }

    return false
}

// Checks first whether the time equals or is higher than the
// designated target. If true, it does the same for minutes.
// Then it finds the current interval (important! chronologic JSON)
function targetTime(sequence, day, hour, minute) {
    let time = schedule[day][sequence].time
    let hourRef = time.match(/^[^:]*/)[0]

    if (hour <= hourRef) {
        let minuteRef = time.match(/[^:]*$/)[0]
        if (hour < hourRef || minute < minuteRef) {
            return true
        }
    }

    return false
}