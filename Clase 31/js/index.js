const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')

let timeHours = 0
let timeMinutes = 0
let timeSeconds = 0

let secInterval = setInterval(() => {
    timeSeconds++
    seconds.innerHTML = timeSeconds
}, 1000)

clearInterval(secInterval)