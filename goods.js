document.addEventListener('DOMContentLoaded', function () {
    // Show the initial tab content ('tab01' for 茶葉)
    showTab('tab01');
});

function showTab(tabId) {
    // Hide all content divs
    var contentDivs = document.querySelectorAll('.content');
    contentDivs.forEach(function (div) {
        div.style.display = 'none';
    });

    // Show the selected tab content
    document.getElementById(tabId).style.display = 'block';
}

function addToCart(productName) {

    alert('已加入購物車！\n產品：' + productName);
}
