function toggleSidebar() {
    $(".sidebar").width() === 0 ? openSidebar() : closeSidebar();
}

function openSidebar() {
    $(".sidebar").css("width", "90%");
}

function closeSidebar() {
    $(".sidebar").css("width", "0");
}