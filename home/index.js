document.addEventListener("DOMContentLoaded", function () {
    var myHeader = document.getElementById("header");

    window.onscroll = function () {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            myHeader.classList.remove("large-header");
            myHeader.classList.add("small-header");
        } else {
            myHeader.classList.remove("small-header");
            myHeader.classList.add("large-header");
        }
    };
});
