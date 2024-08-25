let profileDetails = {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "RAHUL ATTULURI",
    age: 25
};
let profileContainer = document.getElementById("profileContainer");
let imgContainer = document.getElementById("imgContainer");
let a = document.createElement('h1');
a.textContent = profileDetails.name;
a.classList.add('cs');
let b = document.createElement('h1');
b.textContent = "Age : " + profileDetails.age;
b.classList.add('cs');
imgContainer.classList.add('cs');
let c = document.createElement('img');
c.src = profileDetails.imgSrc;
imgContainer.appendChild(c);
profileContainer.appendChild(a);
profileContainer.appendChild(b);