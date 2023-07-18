const newYears = '1 Jan 2024'

function countdown() {
    const newYearsDate = new Date(newYears)
    const currentDate = new Date()
    const diff = newYearsDate - currentDate
    const secondsAll = diff / 1000
    const days = Math.floor(secondsAll / 3600 / 24)
    const hours = Math.floor(secondsAll / 3600) % 24
    const minutes = Math.floor(secondsAll / 60) % 60
    const seconds = Math.floor(secondsAll % 60)

    document.getElementById('days').innerHTML = days
    document.getElementById('hours').innerHTML = hours
    document.getElementById('minutes').innerHTML = minutes
    document.getElementById('seconds').innerHTML = seconds
    
}

// initial call 

countdown()

setInterval(countdown, 1000)