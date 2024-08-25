let greeting = '{"greetText":"Wishing that the new year will bring joy, love, peace, and happiness to you.","from":"Rahul","to":"Varakumar"}';
let parsedgreeting = JSON.parse(greeting);
let from = document.getElementById("from");
let to = document.getElementById("to");
let greettext = document.getElementById('greet-text');
from.textContent = "From: " + parsedgreeting.from;
to.textContent = "To: " + parsedgreeting.to;
greettext.textContent = parsedgreeting.greetText;