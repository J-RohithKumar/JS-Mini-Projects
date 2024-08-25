let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];
let wordsContainer = document.getElementById("wordsContainer");
let userInput = document.getElementById("userInput");
let addBtn = document.getElementById("addBtn");
let errorMsg = document.getElementById("errorMsg");
for (let i of wordCloud) {
    let size = Math.ceil(Math.random() * 50);
    let Element = document.createElement("span");
    Element.style.fontSize = size + "px";
    Element.textContent = i;
    Element.classList.add("word");
    wordsContainer.appendChild(Element);
}
addBtn.onclick = function() {
    if (userInput.value === "") {
        errorMsg.textContent = "Please Enter a word";
        return;
    } else {
        let size = Math.ceil(Math.random() * 50);
        let Element = document.createElement("span");
        Element.style.fontSize = size + "px";
        Element.textContent = userInput.value;
        Element.classList.add("word");
        wordsContainer.appendChild(Element);
        userInput.value = "";
    }

}