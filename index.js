let homeScore = 0
let guestScore = 0

function homeOne() {
    homeScore += 1
    document.getElementById("home-score").textContent = homeScore
    console.log("one point for home")
}

function homeTwo() {
    homeScore += 2
    document.getElementById("home-score").textContent = homeScore
    console.log("two points for home")
}

function homeThree() {
    homeScore += 3
    document.getElementById("home-score").textContent = homeScore
    console.log("three points for home")
}

function guestOne() {
    guestScore += 1
    document.getElementById("guest-score").textContent = guestScore
    console.log("one point for guest")
}

function guestTwo() {
    guestScore += 2
    document.getElementById("guest-score").textContent = guestScore
    console.log("two points for guest")
}

function guestThree() {
    guestScore += 3
    document.getElementById("guest-score").textContent = guestScore
    console.log("three points for guest")
}

function resetScore() {
    homeScore = 0
    guestScore = 0
    document.getElementById("home-score").textContent = homeScore
    document.getElementById("guest-score").textContent = guestScore
    console.log("score has been set to 0")
}


