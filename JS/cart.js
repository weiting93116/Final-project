// 定義購物車商品陣列
const cartItems = [
  { id: 1, name: '極品綠茶', price: 350, quantity: 1 },
  // 其他購物車項目...
];

// 更新購物車顯示
function updateCart() {
  const cartItemsContainer = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');
  let totalPrice = 0;

  cartItemsContainer.innerHTML = '';

  cartItems.forEach(item => {
    const cartItemElement = document.createElement('div');
    cartItemElement.classList.add('cart-item');
    cartItemElement.innerHTML = `
        <img src="image/greentea.jpg" alt=""><span>${item.name}</span>
        <div class="cart-item-price">$${item.price}</div>
        <div class="cart-item-quantity">
            <button onclick="updateQuantity(${item.id}, -1)">－</button>
            <span>${item.quantity}</span>
            <button onclick="updateQuantity(${item.id}, 1)">＋</button>
        </div>
        <div class="cart-item-delete" onclick="removeItem(${item.id})">刪除</div>
    `;
    cartItemsContainer.appendChild(cartItemElement);
    totalPrice += item.price * item.quantity;
  });

  totalPriceElement.textContent = totalPrice;
}

// 更新商品數量
function updateQuantity(itemId, change) {
  const item = cartItems.find(item => item.id === itemId);
  if (item) {
    item.quantity += change;
    if (item.quantity < 1) {
      // 避免數量為負數，最小數量設為1
      item.quantity = 1;
    }
    updateCart();
  }
}

// 移除商品
function removeItem(itemId) {
  const index = cartItems.findIndex(item => item.id === itemId);
  if (index !== -1) {
    cartItems.splice(index, 1);
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

  searchBtn.addEventListener('click', function () {
    searchBox.style.display = 'block';
  });

  closeSearchBoxBtn.addEventListener('click', function () {
    searchBox.style.display = 'none';
  });
});
