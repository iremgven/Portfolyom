let body = document.querySelector("body")
let switchBtn = document.querySelector(".switchBtn")

let secondHand = document.querySelector(".second")
let minuteHand = document.querySelector(".minute")
let hourHand = document.querySelector(".hour")

switchBtn.onclick = () => {
    body.classList.toggle("dark")
}

const updateTime = () => {
    let date = new Date()
    secToDeg = ((date.getSeconds() / 60) * 360)
    secondHand.style.transform = `rotate(${secToDeg}deg)`

    minToDeg = ((date.getMinutes() / 60) * 360)
    minuteHand.style.transform = `rotate(${minToDeg}deg)`

    hourToDeg = ((date.getHours() / 12) * 360)
    HourHand.style.transform = `rotate(${hourToDeg}deg)`
}

setInterval(updateTime,1000);