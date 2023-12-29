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
  let autoSlideInterval = setInterval(nextSlide, 3000); 

  function showSlide(index) {
      const translateValue = -index * 100 + "%";
      carousel.style.transform = "translateX(" + translateValue + ")";
      radios[index].checked = true; 
  }

  function nextSlide() {
      currentIndex = (currentIndex + 1) % carousel.children.length;
      showSlide(currentIndex);
  }

  function prevSlide() {
      currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
      showSlide(currentIndex);
  }

  // 手動控制
  document.querySelector(".carousel-container").addEventListener("mouseover", function() {
      clearInterval(autoSlideInterval);
  });

  document.querySelector(".carousel-container").addEventListener("mouseout", function() {
      autoSlideInterval = setInterval(nextSlide, 3000);
  });

  radios.forEach((radio, index) => {
      radio.addEventListener("change", function() {
          currentIndex = index;
          showSlide(currentIndex);
          clearInterval(autoSlideInterval); // 停止自動輪播
          autoSlideInterval = setInterval(nextSlide, 3000); // 重新啟動自動輪播
      });
  });

  // 初始顯示第一張
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



