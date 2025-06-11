let homeScore = 12
let guestScore = 5

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








// ="homeOne()">+1</button>
//                 <button onclick="homeTwo()">+2</button>
//                 <button onclick="homeThree()">+3</button>
//             </div>
//             <div>
//                 <h3>GUEST</h3>
//                 <button onclick="guestOne()">+1</button>
//                 <button onclick="guestTwo()">+2</button>
//                 <button onclick="guestThree()