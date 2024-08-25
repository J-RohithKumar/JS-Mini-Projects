let userInput = document.getElementById('userInput');
let keyCodeList = document.getElementById('keyCodeList');

function addkeycode() {
    let Element = document.createElement("li");
    Element.textContent = event.keyCode;
    keyCodeList.appendChild(Element);
}

userInput.addEventListener('keydown', addkeycode);