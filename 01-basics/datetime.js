const date = new Date()
// console.log(date.toDateString())
// console.log(date.toString())
// console.log(date.toTimeString())
// console.log(date.toLocaleTimeString('en-JP'))
// console.log(date.toLocaleDateString('en-JP'))
// console.log(date.toLocaleString('en-JP'))
// console.log(date.getDay())
console.log(date.toLocaleDateString('default', {
    weekday: "long",
    month: "long",
    year: "numeric",
    hourCycle: "h12",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "asia/kolkata"

}))