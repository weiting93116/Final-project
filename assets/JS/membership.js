// script.js

// 切換編輯模式
function toggleEditMode() {
    const personalInfo = document.getElementById('personalInfo');
    const editForm = document.getElementById('editForm');
    const editName = document.getElementById('editName');
    const editGender = document.getElementById('editGender');
    const editBirthday = document.getElementById('editBirthday');

    // 將原本的資料填入編輯欄位
    editName.value = document.getElementById('name').innerText;
    editGender.value = document.getElementById('gender').innerText;
    editBirthday.value = document.getElementById('birthday').innerText;

    // 切換顯示
    personalInfo.style.display = 'none';
    editForm.style.display = 'block';
}

// 儲存變更
function saveChanges() {
    const personalInfo = document.getElementById('personalInfo');
    const editForm = document.getElementById('editForm');
    const name = document.getElementById('name');
    const phone = document.getElementById('phone');
    const address = document.getElementById('address');
    const email = document.getElementById('email');
    const editName = document.getElementById('editName');
    const editPhone = document.getElementById('editPhone');
    const editAddress = document.getElementById('editAddress');
    const editEmail = document.getElementById('editEmail');

    // 將編輯欄位的值更新到原本的資料中
    name.innerText = editName.value;
    phone.innerText = editPhone.value;
    address.innerText = editAddress.value;
    email.innerText = editEmail.value;

    // 切換顯示
    personalInfo.style.display = 'block';
    editForm.style.display = 'none';
}

// 搜尋按鈕及搜尋框顯示/隱藏
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
