//nav固定
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var nav = document.getElementById('mainNav');
    var headerOffset = header.offsetHeight; // 假設 header 的高度是 800px

    if (window.scrollY >= headerOffset) {
        nav.classList.add('fixed');
    } else {
        nav.classList.remove('fixed');
    }
});


//輪播圖
document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const radios = document.querySelectorAll('input[name="slide"]');
    let currentIndex = 0;
    let autoSlideInterval;
  
    function showSlide(index) {
      const translateValue = -index * 100 + "%";
      carousel.style.transform = "translateX(" + translateValue + ")";
      radios[index].checked = true; // 更新radio的狀態
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % carousel.children.length;
      showSlide(currentIndex);
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
      showSlide(currentIndex);
    }
  
    // 自動輪播
    autoSlideInterval = setInterval(nextSlide, 3000); // 每3秒切換一次
  
    // 手動控制
    document.querySelector(".carousel-container").addEventListener("mouseover", function() {
      clearInterval(autoSlideInterval);
    });
  
    document.querySelector(".carousel-container").addEventListener("mouseout", function() {
      autoSlideInterval = setInterval(nextSlide, 3000);
    });
  
    document.querySelector(".carousel-container").addEventListener("click", function(e) {
      const { target } = e;
      if (target.classList.contains("slide") || target.tagName === "IMG") {
        // 點擊圖片或滑片時切換到下一張
        nextSlide();
      }
    });
  
    // 手動切換頁面

    radios.forEach((radio, index) => {
        radio.addEventListener("change", function() {
        currentIndex = index;
        showSlide(currentIndex);
        });
    });
    
  
    // 初始顯示第一張
    showSlide(currentIndex);
  });
  
  



//加入購物車
function addToCart(productName) {
    alert('已將商品 ' + productName + ' 加入購物車！');
}