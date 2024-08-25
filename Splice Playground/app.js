let arr = [1, 7, 3, 1, 0, 20, 77];
let stringified = JSON.stringify(arr);
let updatedArray = document.getElementById("updatedArray");
updatedArray.textContent = stringified;
let spliceBtn = document.getElementById("spliceBtn");
let startIndexInput = document.getElementById("startIndexInput");
let deleteCountInput = document.getElementById("deleteCountInput");
let itemToAddInput = document.getElementById("itemToAddInput");
spliceBtn.onclick = function() {
    if (startIndexInput.value === "") {
        console.log("Empty");
    } else {
        let parsed = JSON.parse(stringified);
        console.log("Done2");
        let a = parseInt(startIndexInput.value);
        console.log("Done3");
        if (deleteCountInput.value === "") {
            deleteCountInput.value = "0";
        }
        console.log("Done4");
        let b = parseInt(deleteCountInput.value);

        if (itemToAddInput.value === "") {
            parsed.splice(a, b);
        } else {
            let c = itemToAddInput.value;
            parsed.splice(a, b, c);
        }
        stringified = JSON.stringify(parsed);
        updatedArray.textContent = stringified;
        deleteCountInput.textContent === "";
        itemToAddInput.textContent === "";
    }
    startIndexInput.textContent === "";

};