// 定義購物車商品陣列
const cartItems = [
  { id: 1, name: '極品綠茶', price: 350, quantity: 1 },
  // 其他購物車項目...
];

// 函式：更新購物車顯示
function updateCart() {
  const cartItemsContainer = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');
  let totalPrice = 0;

  // 清空購物車顯示區域
  cartItemsContainer.innerHTML = '';

  // 迴圈處理每個購物車項目
  cartItems.forEach(item => {
    const cartItemElement = document.createElement('div');
    cartItemElement.classList.add('cart-item');
    // 設定購物車項目的 HTML 內容
    cartItemElement.innerHTML = `
        <div class="cart-item-name"><img src="image/greentea.jpg" alt=""><span>${item.name}</span></div>
        <div class="cart-item-price">$${item.price}</div>
        <div class="cart-item-quantity">
            <button onclick="updateQuantity(${item.id}, -1)">－</button>
            <span>${item.quantity}</span>
            <button onclick="updateQuantity(${item.id}, 1)">＋</button>
        </div>
        <div class="cart-item-total">$${item.price * item.quantity}</div>
        <div class="cart-item-delete" onclick="removeItem(${item.id})">刪除</div>
    `;
    // 將購物車項目元素添加到購物車顯示區域
    cartItemsContainer.appendChild(cartItemElement);
    // 計算總價格
    totalPrice += item.price * item.quantity;
  });

  // 更新總價格顯示
  totalPriceElement.textContent = totalPrice;
}

// 函式：更新商品數量
function updateQuantity(itemId, change) {
  const item = cartItems.find(item => item.id === itemId);
  if (item) {
    item.quantity += change;
    if (item.quantity < 1) {
      // 避免數量為負數，最小數量設為1
      item.quantity = 1;
    }
    // 更新購物車顯示
    updateCart();
  }
}

// 函式：移除商品
function removeItem(itemId) {
  const index = cartItems.findIndex(item => item.id === itemId);
  if (index !== -1) {
    // 刪除指定索引的商品
    cartItems.splice(index, 1);
    // 更新購物車顯示
    updateCart();
  }
}

// 初始加載時更新購物車顯示
updateCart();

// 搜尋
document.addEventListener('DOMContentLoaded', function () {
  var searchBtn = document.getElementById('searchbtn');
  var searchBox = document.getElementById('searchBox');
  var closeSearchBoxBtn = document.getElementById('closeSearchBox');

  // 監聽搜尋按鈕點擊事件
  searchBtn.addEventListener('click', function () {
    searchBox.style.display = 'block';
  });

  // 監聽關閉搜尋框按鈕點擊事件
  closeSearchBoxBtn.addEventListener('click', function () {
    searchBox.style.display = 'none';
  });
});
