const cartItems = [
    { id: 1, name: '商品A', price: 10, quantity: 2 },
    { id: 2, name: '商品B', price: 15, quantity: 1 },
    // 可以添加更多的购物车项
  ];
  
  function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;
  
    cartItemsContainer.innerHTML = '';
  
    cartItems.forEach(item => {
      const cartItemElement = document.createElement('div');
      cartItemElement.classList.add('cart-item');
  
      cartItemElement.innerHTML = `
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">$${item.price}</div>
        <div class="cart-item-quantity">
          <button onclick="decreaseQuantity(${item.id})">－</button>
          <span>${item.quantity}</span>
          <button onclick="increaseQuantity(${item.id})">＋</button>
        </div>
        <div class="cart-item-total">$${item.price * item.quantity}</div>
        <div class="cart-item-delete" onclick="removeItem(${item.id})"><a href="#">刪除</a></div>
      `;
  
      cartItemsContainer.appendChild(cartItemElement);
  
      totalPrice += item.price * item.quantity;
    });
  
    totalPriceElement.textContent = totalPrice;
  }
  
  function decreaseQuantity(itemId) {
    const item = cartItems.find(item => item.id === itemId);
    if (item && item.quantity > 1) {
      item.quantity--;
      updateCart();
    }
  }
  
  function increaseQuantity(itemId) {
    const item = cartItems.find(item => item.id === itemId);
    if (item) {
      item.quantity++;
      updateCart();
    }
  }
  
  function removeItem(itemId) {
    const index = cartItems.findIndex(item => item.id === itemId);
    if (index !== -1) {
      cartItems.splice(index, 1);
      updateCart();
    }
  }
  
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

  