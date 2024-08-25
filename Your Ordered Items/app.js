let itemList = [{
    itemName: "Veg Biryani",
    uniqueNo: 1,
},
{
    itemName: "Chicken 65",
    uniqueNo: 2,
},
{
    itemName: "Paratha",
    uniqueNo: 3,
}
];
let container = document.getElementById('list');

function remove(id) {
let Element = document.getElementById("Element" + id);
container.removeChild(Element);
}
for (let i of itemList) {
let Element = document.createElement("li");
let labelElement = document.createElement('li');
labelElement.setAttribute('id', "item" + i.uniqueNo);
labelElement.textContent = i.itemName;
labelElement.setAttribute('for', "checkbox" + i.uniqueNo);
let button = document.createElement('button');
button.setAttribute('id', "button" + i.uniqueNo);
button.classList.add('btn', 'btn-danger', 'ml-3');
button.textContent = "Cancel";
Element.appendChild(labelElement);
Element.appendChild(button);
Element.setAttribute('id', "Element" + i.uniqueNo);
Element.classList.add('m-3', 'row');
container.appendChild(Element);
button.onclick = function() {
    remove(i.uniqueNo);
};
}