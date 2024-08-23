let a = document.getElementById("puppyImage");
let b = document.getElementById("likeIcon");
let c = document.getElementById("likeButton");

let like = false;

function onClickLikeButton() {
    if (!like) {
        a.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        b.style.color = "#0967d2";
        c.style.backgroundColor = "#0967d2";
        c.style.color = "#cbd2d9";
        like = true;
    } else {
        a.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        b.style.color = "#cbd2d9";
        c.style.backgroundColor = "#cbd2d9";
        c.style.color = "#9aa5b1";

        like = false;
    }
}