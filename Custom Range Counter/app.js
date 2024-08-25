let fromUserInput = document.getElementById('fromUserInput');
let toUserInput = document.getElementById('toUserInput');
let startBtn = document.getElementById('startBtn');
let counterText = document.getElementById('counterText');

function start() {
    if (fromUserInput.value === "" || toUserInput.value === "") {
        alert("Enter the Input Value");
        return;
    } else {
        let a = parseInt(fromUserInput.value);
        let b = parseInt(toUserInput.value);
        counterText.textContent = a;
        let eid = setInterval(function() {
            if (a > b) {
                clearInterval(eid);
            } else {
                counterText.textContent = a;
                a += 1;
            }

        }, 1000);
    }
}
startBtn.addEventListener("click", start);