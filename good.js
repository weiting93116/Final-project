document.addEventListener('DOMContentLoaded', function () {
    // 库存数量
    let stock = 50;

    // 加减按钮和数量输入框
    const decrementBtn = document.getElementById('decrement');
    const incrementBtn = document.getElementById('increment');
    const quantityInput = document.getElementById('quantity');

    // 购物车按钮
    const addToCartBtn = document.getElementById('addToCart');

    // 库存显示
    const stockDisplay = document.getElementById('stock');

    // 初始化库存显示
    stockDisplay.textContent = `庫存: ${stock}`;

    // 减少数量按钮点击事件
    decrementBtn.addEventListener('click', function () {
        if (quantityInput.value > 1) {
            quantityInput.value--;
            stock++;
            updateStockDisplay();
        }
    });

    // 增加数量按钮点击事件
    incrementBtn.addEventListener('click', function () {
        if (quantityInput.value < 50 && stock > 0) {
            quantityInput.value++;
            stock--;
            updateStockDisplay();
        }
    });

    // 加入购物车按钮点击事件
    addToCartBtn.addEventListener('click', function () {
        const quantity = parseInt(quantityInput.value, 10);
        if (quantity > 0 && quantity <= stock) {
            alert('已加入購物車');
            // 在此添加实际加入购物车的逻辑
        } else {
            alert('庫存不足');
        }
    });

    // 更新库存显示
    function updateStockDisplay() {
        stockDisplay.textContent = `庫存: ${stock}`;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const thumbnails = document.querySelectorAll(".thumbnail-container img");
    const carouselImages = document.querySelectorAll(".carousel img");
  
    thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener("click", () => {
        showImage(index);
      });
    });
  
    let currentIndex = 0;
  
    function showImage(index) {
      carouselImages.forEach((image) => {
        image.classList.remove("active");
      });
  
      carouselImages[index].classList.add("active");
      currentIndex = index;
    }
  
    function autoSlide() {
      currentIndex = (currentIndex + 1) % carouselImages.length;
      showImage(currentIndex);
    }
  
    // 啟用自動輪播，每3秒換一張
    setInterval(autoSlide, 3000);
  });
  