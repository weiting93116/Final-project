const images = ["image/greentea.jpg", "image/Jingshenyu1.jpg", "image/Jingshenyu3.jpg"];
    let currentImageIndex = 0;

    // 更換圖片
    function changeImage(offset) {

        // 計算新的圖片索引，確保在圖片數組之內循環
        currentImageIndex = (currentImageIndex + offset + images.length) % images.length;
        
        // 將主圖片的 src 更改為新的圖片
        document.getElementById("main-image").src = images[currentImageIndex];
        
    }

    // 更新主圖片和縮略圖
    function updateImages(thumbnailIndex) {
        // 更新主圖片
        document.getElementById("main-image").src = images[thumbnailIndex];

        // 更新當前圖片索引
        currentImageIndex = thumbnailIndex;
    }
