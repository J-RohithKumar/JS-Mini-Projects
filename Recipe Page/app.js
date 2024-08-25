let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};
let a = document.getElementById("heading");
a.textContent = recipeObj.title;
let b = document.getElementById("image");
b.src = recipeObj.imgSrc;
let p = document.getElementById('list');
for (let i of recipeObj.ingredients) {
    let c = document.createElement('li');
    c.textContent = i;
    c.classList.add('text-white');
    p.appendChild(c);
}