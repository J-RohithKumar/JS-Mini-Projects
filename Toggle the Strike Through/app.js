let inputElement = document.createElement('input');
inputElement.setAttribute('id', 'checkbox');
inputElement.setAttribute('type', 'checkbox');
let labelElement = document.createElement('label');
labelElement.setAttribute('id', 'checkboxLabel');
labelElement.setAttribute('for', 'checkbox');
labelElement.textContent = "I am a label";
let container = document.getElementById('checkBoxWithLabelContainer');
container.appendChild(inputElement);
container.appendChild(labelElement);
inputElement.onclick = function() {
    labelElement.classList.toggle('strike');
    console.log("box Clicked");
};