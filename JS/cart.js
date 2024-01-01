// 定義購物車商品陣列
const cartItems = [
    { id: 1, name: '極品綠茶', price:350, quantity: 2 },
    { id: 2, name: '極品紅茶', price:350, quantity: 1 },
    // 可以添加更多的購物車項目
  ];
  
// 更新購物車顯示  
  function updateCart() {
    // 獲取購物車容器和總價元素
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;
    // 清空購物車容器
    cartItemsContainer.innerHTML = '';

    cartItems.forEach(item => {
      // 創建購物車商品元素
      const cartItemElement = document.createElement('div');
      cartItemElement.classList.add('carts-item');
      // 設置購物車商品元素的HTML內容
      cartItemElement.innerHTML = `
        <div class="carts-item-name">${item.name}</div>
        <div class="carts-item-price">$${item.price}</div>
        <div class="carts-item-quantity">
          <button onclick="decreaseQuantity(${item.id})">－</button>
          <span>${item.quantity}</span>
          <button onclick="increaseQuantity(${item.id})">＋</button>
        </div>
        <div class="carts-item-total">$${item.price * item.quantity}</div>
        <div class="carts-item-delete" onclick="removeItem(${item.id})">刪除</div>
      `;
      // 將購物車商品元素添加到購物車容器中
      cartItemsContainer.appendChild(cartItemElement);
      // 計算總價
      totalPrice += item.price * item.quantity;
    });
    // 更新總價顯示
    totalPriceElement.textContent = totalPrice;
  }
  // 減少商品數量
  function decreaseQuantity(itemId) {
    const item = cartItems.find(item => item.id === itemId);
    if (item && item.quantity > 1) {
      item.quantity--;
      updateCart();
    }
  }
  // 增加商品數量
  function increaseQuantity(itemId) {
    const item = cartItems.find(item => item.id === itemId);
    if (item) {
      item.quantity++;
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

  