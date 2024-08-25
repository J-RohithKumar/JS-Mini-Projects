let twentySecondsBtn = document.getElementById('twentySecondsBtn');
let thirtySecondsBtn = document.getElementById('thirtySecondsBtn');
let fortySecondsBtn = document.getElementById('fortySecondsBtn');
let oneMinuteBtn = document.getElementById('oneMinuteBtn');
let timerText = document.getElementById('timerText');
let arr = {
    twentySecondsBtn: 20,
    thirtySecondsBtn: 30,
    fortySecondsBtn: 40,
    oneMinuteBtn: 60,
}
timerText.textContent = "";
let uid = null;

function timer() {
    clearInterval(uid);
    let time = arr[event.target.id];
    timerText.textContent = time + "seconds left";
    uid = setInterval(function() {
        if (timerText.textContent === "-1") {
            timerText.textContent = "Your moment is complete";
            clearInterval(uid);
        } else {
            timerText.textContent = time + "seconds left";
            time -= 1;
        }
    }, 1000);
}
oneMinuteBtn.addEventListener("click", timer);
twentySecondsBtn.addEventListener("click", timer);
thirtySecondsBtn.addEventListener("click", timer);
fortySecondsBtn.addEventListener("click", timer);