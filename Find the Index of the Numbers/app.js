let numbers = [17, 31, 77, 20, 63];

let findBtn = document.getElementById("findBtn");
let userInput = document.getElementById("userInput");
let indexOfNumber = document.getElementById("indexOfNumber");
findBtn.onclick = function() {
    indexOfNumber.textContent = numbers.findIndex(function(i) {
        if (i === parseInt(userInput.value)) {
            return true;
        } else {
            return false;
        }
    });
}