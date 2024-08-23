let a = document.getElementById("firstNumber");
let b = document.getElementById("secondNumber");
a.textContent = Math.ceil(Math.random() * 100);
b.textContent = Math.ceil(Math.random() * 100);
let c = document.getElementById("userInput");
let p = document.getElementById("gameResult");

function restart() {
    a.textContent = Math.ceil(Math.random() * 100);
    b.textContent = Math.ceil(Math.random() * 100);
    c.value = "";
    p.textContent = "";
}

function check() {
    let u = parseInt(a.textContent);
    let v = parseInt(b.textContent);
    let x = parseInt(c.value);
    if (x === (u + v)) {
        p.textContent = "Congratulations! You got it right.";
        p.style.backgroundColor = "#028a0f";
    } else {
        p.textContent = "Please Try Again!";
        p.style.backgroundColor = "#1e217c";
    }
}