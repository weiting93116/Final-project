// 等待DOM載入完成後執行以下程式碼
document.addEventListener("DOMContentLoaded", function() {
  // 取得搜尋按鈕、搜尋框和關閉搜尋框按鈕的元素
  var searchBtn = document.getElementById("searchbtn");
  var searchBox = document.getElementById("searchBox");
  var closeSearchBoxBtn = document.getElementById("closeSearchBox");

  // 當搜尋按鈕被點擊時，顯示搜尋框
  searchBtn.addEventListener("click", function() {
      searchBox.style.display = "block";
  });

  // 當關閉搜尋框按鈕被點擊時，隱藏搜尋框
  closeSearchBoxBtn.addEventListener("click", function() {
      searchBox.style.display = "none";
  });
});
