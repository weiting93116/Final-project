document.addEventListener('DOMContentLoaded', function () {
    // 檢查 URL 中是否有#片段
    if (window.location.hash) {
        // 從#片段中提取 tabId
        var tabIdFromHash = window.location.hash.substring(1);

        // 根據#片段顯示選擇的選項卡
        showTab(tabIdFromHash);
    } else {
        // 如果沒有#片段，顯示默認選項卡（茶葉的是 'tab01'）
        showTab('tab01');
    }
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
