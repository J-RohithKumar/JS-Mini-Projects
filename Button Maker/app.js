let a = document.getElementById("bgColorInput");
let b = document.getElementById("fontColorInput");
let c = document.getElementById("fontSizeInput");
let d = document.getElementById("fontWeightInput");
let e = document.getElementById("paddingInput");
let f = document.getElementById("borderRadiusInput");
let x = document.getElementById("customButton");

function apply() {
    x.style.backgroundColor = a.value;
    x.style.color = b.value;
    x.style.fontSize = c.value;
    x.style.fontWeight = d.value;
    x.style.padding = e.value;
    x.style.borderRadius = f.value;

}