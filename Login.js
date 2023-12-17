document.getElementById("loginForm").addEventListener("submit", function(event) {
    // 阻止表單默認提交行為
    event.preventDefault();

    // 在這裡可以進行登入操作，例如向後端發送請求驗證

    // 顯示登入成功提示框
    alert("已成功登入！");
});
