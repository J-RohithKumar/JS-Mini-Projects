let timer = document.getElementById("timer");
let defuser = document.getElementById("defuser");
let text = null;
let counter = 10;
let uid = setInterval(function() {
    timer.textContent = counter;
    if (counter === 0) {
        timer.textContent = "BOOM";
        clearInterval(uid);
    }
    counter -= 1;
}, 1000);

function tiktik() {
    text = defuser.value;
    if (text === "defuse" && event.key === "Enter" && (parseInt(timer.textContent) > 0)) {
        timer.textContent = "You did it!";
        clearInterval(uid);
    }
}

defuser.addEventListener("keydown", tiktik);