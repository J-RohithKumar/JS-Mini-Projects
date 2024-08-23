function stop() {
    let a = document.getElementById("stopButton");
    a.style.backgroundColor = "red";
    let b = document.getElementById("stopLight");
    b.style.backgroundColor = "red";
    let c = document.getElementById("readyButton");
    c.style.backgroundColor = "#1f1d41";
    let d = document.getElementById("readyLight");
    d.style.backgroundColor = "#4b5069";
    let e = document.getElementById("goButton");
    e.style.backgroundColor = "#1f1d41";
    let f = document.getElementById("goLight");
    f.style.backgroundColor = "#4b5069";
}

function ready() {
    let a = document.getElementById("readyButton");
    a.style.backgroundColor = "#f7c948";
    let b = document.getElementById("readyLight");
    b.style.backgroundColor = "#f7c948";
    let c = document.getElementById("stopButton");
    c.style.backgroundColor = "#1f1d41";
    let d = document.getElementById("stopLight");
    d.style.backgroundColor = "#4b5069";
    let e = document.getElementById("goButton");
    e.style.backgroundColor = "#1f1d41";
    let f = document.getElementById("goLight");
    f.style.backgroundColor = "#4b5069";
}

function go() {
    let a = document.getElementById("goButton");
    a.style.backgroundColor = "#199473";
    let b = document.getElementById("goLight");
    b.style.backgroundColor = "#199473";
    let c = document.getElementById("readyButton");
    c.style.backgroundColor = "#1f1d41";
    let d = document.getElementById("readyLight");
    d.style.backgroundColor = "#4b5069";
    let e = document.getElementById("stopButton");
    e.style.backgroundColor = "#1f1d41";
    let f = document.getElementById("stopLight");
    f.style.backgroundColor = "#4b5069";
}