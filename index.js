let homeScore = 0;
let guestScore = 0;
let msg = document.getElementById("msg")
let homeWin = "Congratulations!! Home is the Winner!"
let awayWin = "Congratulations!! Away is the Winner!"

document.getElementById("home-points").textContent = homeScore
document.getElementById("guest-points").textContent = guestScore

function addOne() {
    homeScore += 1;
    document.getElementById("home-points").textContent = homeScore;
}

function addTwo() {
    homeScore += 2;
    document.getElementById("home-points").textContent = homeScore;
}

function addThree() {
    homeScore += 3;
    document.getElementById("home-points").textContent = homeScore;
}

function addOneG() {
    guestScore += 1;
    document.getElementById("guest-points").textContent = guestScore;
}

function addTwoG() {
    guestScore += 2;
    document.getElementById("guest-points").textContent = guestScore;
}

function addThreeG() {
    guestScore += 3;
    document.getElementById("guest-points").textContent = guestScore;
}

function newGame() {
    // homeScore = 0;
    // guestScore = 0
    location.reload();
}

function end() {
    if (homeScore > guestScore) {
        // console.log("Congartulations! Home is the Winner!!!🏆🎉")
        msg.textContent = homeWin
    } else{
        console.log("Congartulations! Guest is the Winner!!!🏆🎉")
    }
}

msg.textContent