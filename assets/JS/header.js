function toggleSidebar() {
    $(".sidebar").width() === 0 ? openSidebar() : closeSidebar();
}

function openSidebar() {
    $(".sidebar").css("width", "100%");
}

function closeSidebar() {
    $(".sidebar").css("width", "0");
}