let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let userInput = document.getElementById("userInput");
let sendMsgBtn = document.getElementById("sendMsgBtn");
let chatContainer = document.getElementById("chatContainer");
let counter = 0;
sendMsgBtn.onclick = function() {
    let msgcontainer = document.createElement("div");
    let userElement = document.createElement("span");
    userElement.textContent = userInput.value;
    userElement.classList.add("msg-to-chatbot");
    msgcontainer.classList.add("msg-to-chatbot-container");
    msgcontainer.appendChild(userElement);
    chatContainer.appendChild(msgcontainer);
    userInput.value = "";
    let msgcontainer2 = document.createElement("div");
    let botElement = document.createElement("span");
    botElement.textContent = chatbotMsgList[counter];
    botElement.classList.add("msg-from-chatbot");
    msgcontainer2.classList.add("msg-from-chatbot-container");
    msgcontainer2.appendChild(botElement);
    chatContainer.appendChild(botElement);
    counter += 1;
}