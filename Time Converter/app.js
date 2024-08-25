let hoursInput = document.getElementById("hoursInput");
let minutesInput = document.getElementById("minutesInput");
let timeInSeconds = document.getElementById("timeInSeconds");
let convertBtn = document.getElementById("convertBtn");
let errorMsg = document.getElementById("errorMsg");

function convert() {
    if (hoursInput.value === "") {
        errorMsg.textContent = "Please enter a valid number of hours.";
        timeInSeconds.classList.add("d-none");
    } else if (minutesInput.value === "") {
        errorMsg.textContent = "Please enter a valid number of minutes.";
        timeInSeconds.classList.add("d-none");
    } else {
        let h = parseInt(hoursInput.value);
        let m = parseInt(minutesInput.value);
        let s = h * 60 * 60 + m * 60;
        timeInSeconds.classList.remove("d-none");
        timeInSeconds.textContent = s + "S";
        errorMsg.textContent = "";
        hoursInput.value = "";
        minutesInput.value = "";
    }

}
convertBtn.addEventListener("click", convert);