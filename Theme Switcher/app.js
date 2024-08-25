let themeUserInput = document.getElementById('themeUserInput');
let bgContainer = document.getElementById('bgContainer');
let heading = document.getElementById('heading');
let text = null;

function change() {
    text = themeUserInput.value;
    if (event.key === "Enter") {
        if (text === "Dark") {
            heading.style.color = "#ffffff";
            bgContainer.style.backgroundImage = 'url("https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png")';
            themeUserInput.value = "";
        } else if (text === "Light") {
            heading.style.color = "#014d40";
            themeUserInput.value = "";
            bgContainer.style.backgroundImage = 'url("https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png")';
        } else {
            alert('Enter the valid theme');
        }
    }
}
themeUserInput.addEventListener('keydown', change);