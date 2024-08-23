let imageElement = document.getElementById("image");
let originalImageWidth = 200;
imageElement.style.width = originalImageWidth + "px";
let a = document.getElementById("warningMessage");
let imag_width = document.getElementById("imageWidth");
imag_width.textContent = originalImageWidth + "px";

function warn() {
    let s = "";
    if (originalImageWidth === 100) {
        s = "Can't Visible. Increase the size of Image.";
    } else {
        s = "Too Big. Increase the size of Image.";
    }
    a.textContent = s;
}

function increase() {
    if (originalImageWidth + 5 <= 300) {
        a.textContent = "";
        originalImageWidth += 5;
        imageElement.style.width = originalImageWidth + "px";
    } else {
        warn();
    }
    imag_width.textContent = originalImageWidth + "px";
}

function decrease() {
    if (originalImageWidth - 5 >= 100) {
        originalImageWidth -= 5;
        a.textContent = "";
        imageElement.style.width = originalImageWidth + "px";
    } else {
        warn();
    }
    imag_width.textContent = originalImageWidth + "px";
}