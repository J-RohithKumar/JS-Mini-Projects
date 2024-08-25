let msg = document.getElementById("msg");
let saveBtn = document.getElementById("saveBtn");
let clearBtn = document.getElementById("clearBtn");
let data = localStorage.getItem("userInput");
msg.value = data;
saveBtn.onclick = function() {
    if (msg.value === "") {
        localStorage.removeItem("userInput");
        return;
    } else {
        localStorage.setItem("userInput", msg.value);
    }
}
clearBtn.onclick = function() {
    localStorage.removeItem("userInput");
}