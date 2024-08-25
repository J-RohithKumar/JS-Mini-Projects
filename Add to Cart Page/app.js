let input = document.getElementById("cartItemTextInput");
let addBtn = document.getElementById("addBtn");
let list = document.getElementById("list");

addBtn.onclick = function() {
    let Element = document.createElement('li');
    Element.textContent = input.value;
    if (input.value === "") {
        alert("Enter Valid Item");
        return;
    } else {
        list.appendChild(Element);
        input.value = "";
    }
}