let skillList = [{
    skillName: "HTML",
    uniqueNo: 1,
},
{
    skillName: "CSS",
    uniqueNo: 2,
},
{
    skillName: "JavaScript",
    uniqueNo: 3,
}
];

let container = document.getElementById('list');
for (let i of skillList) {
let Element = document.createElement("li");
let inputElement = document.createElement('input');
inputElement.setAttribute('type', "checkbox");
inputElement.setAttribute('id', "checkbox" + i.uniqueNo);
let labelElement = document.createElement('label');
labelElement.setAttribute('id', "label" + i.uniqueNo);
labelElement.textContent = i.skillName;
labelElement.setAttribute('for', "checkbox" + i.uniqueNo);
Element.appendChild(inputElement);
Element.appendChild(labelElement);
container.appendChild(Element);
inputElement.onclick = function() {
    labelElement.classList.toggle('color');
};
}   