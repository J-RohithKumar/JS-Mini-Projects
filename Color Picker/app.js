let a = document.getElementById("colorPickerContainer");
let u = document.getElementById("button1");
let v = document.getElementById("button2");
let w = document.getElementById("button3");
let x = document.getElementById("button4");
let b = document.getElementById("selectedColorHexCode");
a.style.backgroundColor = "#ffffff";
b.textContent = "#ffffff";
b.style.color = "#49a6e9";

function color1() {
    a.style.backgroundColor = u.textContent;
    b.textContent = u.textContent;

}

function color2() {
    a.style.backgroundColor = v.textContent;
    b.textContent = v.textContent;
}

function color3() {
    a.style.backgroundColor = w.textContent;
    b.textContent = w.textContent;
}

function color4() {
    a.style.backgroundColor = x.textContent;
    b.textContent = x.textContent;
}