let bikes = ["Hero", "Honda", "Bajaj", "Suzuki", "Yamaha"];
let person = {
    name: "Rahul",
    age: 25,
    gender: "Male",
};
let todos = [{
        todo: "Attending CCBP sessions",
        todoStatus: "Completed",
    },
    {
        todo: "Completing practice sets",
        todoStatus: "Not Completed",
    },
    {
        todo: "Asking doubts",
        todoStatus: "Completed",
    },
];
let jsonContainer = document.getElementById("jsonContainer");
let stringifiedbikes = JSON.stringify(bikes);
let stringifiedperson = JSON.stringify(person);
let stringifiedtodos = JSON.stringify(todos);

function create(string) {
    let Element = document.createElement('p');
    Element.textContent = string;
    Element.classList.add("element", 'm-3', 'p-3');
    jsonContainer.appendChild(Element);
}
create(stringifiedbikes);
create(stringifiedperson);
create(stringifiedtodos);