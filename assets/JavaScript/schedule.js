// Importerer arrays fra /assets/JSON/schedule.json 
import schedule from '/assets/JSON/schedule.json' with { type: 'json' }

let date = new Date
let targetMinute, referenceMinute, duration = ""
let flex, flexTotal = 0

let days = ["", document.getElementById('mon'), document.getElementById('tue'), document.getElementById('wed'), document.getElementById('thu'), document.getElementById('fri'), ""]

for (let i = 1; i < schedule.length - 1; i++) {
    flexTotal = 0
    for (let j = 0; j < schedule[i].length - 1; j++) {
        targetMinute = Number(schedule[i][j].time.match(/^[^:]*/)[0]) * 60 + Number(schedule[i][j].time.match(/[^:]*$/)[0])
        referenceMinute = Number(schedule[i][j + 1].time.match(/^[^:]*/)[0]) * 60 + Number(schedule[i][j + 1].time.match(/[^:]*$/)[0])
        duration = referenceMinute - targetMinute
        flex = duration / 15
        flexTotal += flex
        console.log(flex)
        days[i].innerHTML += `<div class="flex-cell" style="flex:${flex};"></div>`
    }
}

// Flex = 70 ${schedule[i][j].status}