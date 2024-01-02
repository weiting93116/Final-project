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


// 輪播圖
document.addEventListener("DOMContentLoaded", function() {
    // 取得輪播容器元素
    const carousel = document.querySelector(".carousel");
    // 取得所有輪播圖片的選擇器單選按鈕
    const radios = document.querySelectorAll('input[name="slide"]');
    // 目前顯示輪播圖片的索引
    let currentIndex = 0;
    // 設定自動輪播的間隔時間為 3000 毫秒
    let autoSlideInterval = setInterval(nextSlide, 3000);
  
    // 顯示指定索引的輪播圖片
    function showSlide(index) {
      // 計算位移值，使指定索引的圖片顯示在輪播容器中央
      const translateValue = -index * 100 + "%";
      carousel.style.transform = "translateX(" + translateValue + ")";
      // 將對應的單選按鈕勾選上
      radios[index].checked = true;
    }
  
    // 切換至下一張輪播圖片
    function nextSlide() {
      // 循環更新索引，達到從最後一張跳至第一張的效果
      currentIndex = (currentIndex + 1) % carousel.children.length;
      // 顯示下一張輪播圖片
      showSlide(currentIndex);
    }
  
    // 切換至上一張輪播圖片
    function prevSlide() {
      // 循環更新索引，達到從第一張跳至最後一張的效果
      currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
      // 顯示上一張輪播圖片
      showSlide(currentIndex);
    }
  
    // 手動控制
    // 滑鼠移入停止自動輪播
    document.querySelector(".carousel-container").addEventListener("mouseover", function() {
      clearInterval(autoSlideInterval);
    });
  
    // 滑鼠移出重新啟動自動輪播
    document.querySelector(".carousel-container").addEventListener("mouseout", function() {
      autoSlideInterval = setInterval(nextSlide, 3000);
    });
  
    // 監聽單選按鈕的變動，手動切換輪播圖片
    radios.forEach((radio, index) => {
      radio.addEventListener("change", function() {
        // 更新目前索引並顯示對應圖片
        currentIndex = index;
        showSlide(currentIndex);
        // 停止自動輪播
        clearInterval(autoSlideInterval);
        // 重新啟動自動輪播
        autoSlideInterval = setInterval(nextSlide, 3000);
      });
    });
  
    // 初始顯示第一張輪播圖片
    showSlide(currentIndex);
  });
  

//加入購物車
function addToCart(productName) {
    alert('已將商品 ' + productName + ' 加入購物車！');
}

//totop
document.addEventListener("DOMContentLoaded", function() {
  var topBtn = document.getElementById("topBtn");

  window.onscroll = function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          topBtn.style.display = "block";
      } else {
          topBtn.style.display = "none";
      }
  };

  topBtn.addEventListener("click", function() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  });
});

//search
document.addEventListener("DOMContentLoaded", function() {
    var searchBtn = document.getElementById("searchbtn");
    var searchBox = document.getElementById("searchBox");
    var closeSearchBoxBtn = document.getElementById("closeSearchBox");

    searchBtn.addEventListener("click", function() {
        searchBox.style.display = "block";
    });

    closeSearchBoxBtn.addEventListener("click", function() {
        searchBox.style.display = "none";
    });
});



