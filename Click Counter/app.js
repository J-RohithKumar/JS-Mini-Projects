let clickCount = localStorage.getItem('clickCount');
let counterValue = document.getElementById("counterValue");
let incrementBtn = document.getElementById("incrementBtn");
if (clickCount === null) {
    counterValue.textContent = 0;
} else {
    counterValue.textContent = clickCount;
}
incrementBtn.onclick = function() {
    let x = parseInt(counterValue.textContent) + 1;
    counterValue.textContent = x;
    localStorage.setItem('clickCount', counterValue.textContent);
};