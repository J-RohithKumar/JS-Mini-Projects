let tab1 = document.getElementById("aboutTab");
let tab2 = document.getElementById("timeToVisitTab");
let tab3 = document.getElementById("attractionsTab");
let b1 = document.getElementById("aboutButton");
let b2 = document.getElementById("timeToVisitButton");
let b3 = document.getElementById("attractionsButton");

tab2.classList.add("d-none");
tab3.classList.add("d-none");

function about() {
    b1.classList.add("selected-button");
    b2.classList.remove("selected-button");
    b3.classList.remove("selected-button");
    tab1.classList.remove("d-none");
    tab2.classList.add("d-none");
    tab3.classList.add("d-none");
}

function timetovisit() {
    b2.classList.add("selected-button");
    b1.classList.remove("selected-button");
    b3.classList.remove("selected-button");
    tab2.classList.remove("d-none");
    tab1.classList.add("d-none");
    tab3.classList.add("d-none");
}

function attractions() {
    b3.classList.add("selected-button");
    b2.classList.remove("selected-button");
    b1.classList.remove("selected-button");
    tab3.classList.remove("d-none");
    tab2.classList.add("d-none");
    tab1.classList.add("d-none");
}