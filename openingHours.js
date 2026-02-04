let date = new Date()

let phase = Math.floor((date.getHours() * 60 + date.getMinutes()) / 15)

console.log(date.getDay())
console.log(phase)
