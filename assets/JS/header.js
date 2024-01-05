// 切換側邊欄顯示/隱藏
function toggleSidebar() {
    // 如果側邊欄寬度為0，則打開側邊欄；否則關閉側邊欄
    $(".sidebar").width() === 0 ? openSidebar() : closeSidebar();
}

// 打開側邊欄
function openSidebar() {
    $(".sidebar").css("width", "100%");
}

// 關閉側邊欄
function closeSidebar() {
    $(".sidebar").css("width", "0");
}
