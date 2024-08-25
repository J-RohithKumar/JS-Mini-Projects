let groceryList = ["Apples", "Boost Drink", "Butterscotch Ice Cream", "Tomato Ketchup", "Dairy Milk Chocolates", "Pasta"];
let listContainer = document.getElementById("groceryListContainer");
listContainer.classList.add("list-container");
let listElement = document.createElement('ul');
listContainer.appendChild(listElement);
for (let i of groceryList) {
    let Element = document.createElement('li');
    Element.textContent = i;
    listElement.appendChild(Element);
}