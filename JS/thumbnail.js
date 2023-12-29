const images = ["../image/greentea.jpg", "../image/jingshenyu1.jpg", "../image/jingshenyu3.jpg"]; // Add more image URLs as needed
    let currentImageIndex = 0;

    function changeImage(offset) {
        currentImageIndex = (currentImageIndex + offset + images.length) % images.length;
        document.getElementById("main-image").src = images[currentImageIndex];
        updateCurrentImageText();
    }

    function updateCurrentImageText() {
        document.getElementById("current-image").innerText = "Current Image: " + (currentImageIndex + 1);
    }