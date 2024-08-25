let reviewsContainer = document.getElementById("reviewsContainer");
let titleInput = document.getElementById('titleInput');
let reviewTextarea = document.getElementById('reviewTextarea');
let addBtn = document.getElementById("addBtn");

addBtn.onclick = function() {
    if (titleInput.value === "") {
        alert("Enter Valid Movie Name");
        return;
    } else {
        let title = document.createElement('h2');
        let review = document.createElement('p');
        let line = document.createElement('hr');
        title.textContent = "Movie Title:" + titleInput.value;
        review.textContent = reviewTextarea.value;
        reviewsContainer.appendChild(title);
        reviewsContainer.appendChild(review);
        reviewsContainer.appendChild(line);
        titleInput.value = "";
        reviewTextarea.value = '';
    }
};