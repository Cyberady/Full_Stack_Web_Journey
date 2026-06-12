let homeCount = 0;
let guestCount = 0;

// HOME
function increment1Home() {
    homeCount += 1;
    document.getElementById("scorehome").textContent = homeCount;
}

function increment2Home() {
    homeCount += 2;
    document.getElementById("scorehome").textContent = homeCount;
}

function increment3Home() {
    homeCount += 3;
    document.getElementById("scorehome").textContent = homeCount;
}

// GUEST
function increment1Guest() {
    guestCount += 1;
    document.getElementById("scoreguest").textContent = guestCount;
}

function increment2Guest() {
    guestCount += 2;
    document.getElementById("scoreguest").textContent = guestCount;
}

function increment3Guest() {
    guestCount += 3;
    document.getElementById("scoreguest").textContent = guestCount;
}