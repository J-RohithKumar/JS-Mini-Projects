let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];
let b = document.getElementById("bgContainer");

function change() {
    let a = Math.ceil(Math.random() * 10) % 8;
    b.style.backgroundColor = bgColorsArray[a];
}