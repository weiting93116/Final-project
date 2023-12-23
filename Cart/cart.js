const cartItems = [
    { id: 1, name: '極品紅茶', price: 350, quantity: 2 },
    { id: 2, name: '極品綠茶', price: 350, quantity: 1 },
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
  