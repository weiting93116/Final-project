document.addEventListener('DOMContentLoaded', function () {
    // 商品名稱
    const productName = "極品綠茶"; // 請替換為實際的商品名稱

    // 庫存數量
    let stock = 50;

    // 加減按鈕和數量輸入框
    const decrementBtn = document.getElementById('decrement');
    const incrementBtn = document.getElementById('increment');
    const quantityInput = document.getElementById('quantity');

    // 購物車按鈕
    const addToCartBtn = document.getElementById('addToCart');

    // 庫存顯示
    const stockDisplay = document.getElementById('stock');

    // 初始化庫存顯示
    stockDisplay.textContent = `庫存: ${stock}`;

    // 減少數量按鈕點擊事件
    decrementBtn.addEventListener('click', function () {
        if (quantityInput.value > 1) {
            quantityInput.value--;
            stock++;
            updateStockDisplay();
        }
    });

    // 增加數量按鈕點擊事件
    incrementBtn.addEventListener('click', function () {
        if (quantityInput.value < 50 && stock > 0) {
            quantityInput.value++;
            stock--;
            updateStockDisplay();
        }
    });

    // 加入購物車按鈕點擊事件
    addToCartBtn.addEventListener('click', function () {
        const quantity = parseInt(quantityInput.value, 10);
        if (quantity > 0 && quantity <= stock) {
            alert(`${productName}，已加入購物車，購買件數: ${quantity}`);
            // 在此添加實際加入購物車的邏輯
        } else {
            alert('庫存不足');
        }
    });

    // 更新庫存顯示
    function updateStockDisplay() {
        stockDisplay.textContent = `庫存: ${stock}`;
    }
});

// 下方標籤（商品評價、購物須知）
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
}

// 評論星數
// 假設這是你的留言評價數據
const totalStars = 5; // 總計星數
const totalReviews = 3; // 評論數

// 計算平均星數
const averageStars = totalStars / totalReviews;

// 更新 HTML 中的元素
const reviewInfoElement = document.querySelector('.review-info');

// 顯示留言總計星數及評論數
reviewInfoElement.innerHTML = `★★★★★ ${averageStars.toFixed(1)}/5 (${totalReviews}則評論)`;

// 推薦商品
function addToCart(productName) {
    alert('已加入購物車！\n產品：' + productName);
}
