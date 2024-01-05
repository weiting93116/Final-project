// 設定初始的幻燈片索引
let slideIndex = 1;

// 函式：顯示幻燈片
function showSlides(props) {
    let i;

    // 取得所有幻燈片的元素
    let slides = document.getElementsByClassName("singleSlide");

    // 如果傳入的參數大於幻燈片總數，將索引設為第一張
    if (props > slides.length) {
        slideIndex = 1;
    }

    // 如果傳入的參數小於1，將索引設為最後一張
    if (props < 1) {
        slideIndex = slides.length;
    }

    // 隱藏所有幻燈片
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // 顯示當前索引的幻燈片
    slides[slideIndex - 1].style.display = "flex";
}

// 函式：切換至下一張或上一張幻燈片
function plusSlides(a) {
    // 呼叫 showSlides 函式，更新索引
    showSlides((slideIndex += a));
}

// 初始呼叫 plusSlides 函式，顯示初始幻燈片
plusSlides(slideIndex);
