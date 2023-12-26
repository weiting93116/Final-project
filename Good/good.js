document.addEventListener('DOMContentLoaded', function () {
  // 商品名称
  const productName = "極品綠茶"; // 请替换为实际的商品名称

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
          alert(`${productName}，已加入購物車，購買件數: ${quantity}`);
          // 在此添加实际加入购物车的逻辑
      } else {
          alert('購買數量不能為0!');
      }
  });

  // 更新库存显示
  function updateStockDisplay() {
      stockDisplay.textContent = `庫存: ${stock}`;
  }
});


//下方標籤（商品評價、購物須知）
function showTab(tabId) {
    // 阻止超連結的默認行為
    event.preventDefault();

    // 隱藏所有內容 div
    var contentDivs = document.querySelectorAll('.tab-content>div');
    contentDivs.forEach(function (div) {
      div.classList.remove('active');
    });

    // 顯示選中的標籤內容
    var selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('active');

    if (tabId === 'shopping-info') {
        requestAnimationFrame(function() {
            window.dispatchEvent(new Event('resize'));
        }, 0)
    }
}


//評論星數
// 假設這是你的留言評價數據
const totalStars = 5; // 總計星數
const totalReviews = 3; // 評論數

// 計算平均星數
const averageStars = totalStars / totalReviews;

// 更新 HTML 中的元素
const reviewInfoElement = document.querySelector('.review-info');

// 顯示留言總計星數及評論數
reviewInfoElement.innerHTML = `★★★★★ ${averageStars.toFixed(1)}/5 (${totalReviews}則評論)`;

//推薦商品

function addToCart(productName) {

    alert('已加入購物車！\n產品：' + productName);
}

//搜尋
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
