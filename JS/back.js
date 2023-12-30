function toggleOrders(userId) {
    // 隱藏所有訂單內容
    var orders = document.querySelectorAll('.order-content');
    orders.forEach(function(order) {
        order.style.display = 'none';
    });

    // 顯示特定會員的訂單內容
    var orderElement = document.getElementById('order-' + userId);
    if (orderElement) {
        orderElement.style.display = 'block';
    }
}