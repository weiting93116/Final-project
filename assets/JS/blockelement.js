// 搜尋
document.addEventListener('DOMContentLoaded', function () {
    var searchBtn = document.getElementById('searchbtn');
    var searchBox = document.getElementById('searchBox');
    var closeSearchBoxBtn = document.getElementById('closeSearchBox');
  
    searchBtn.addEventListener('click', function () {
      searchBox.style.display = 'block';
    });
  
    closeSearchBoxBtn.addEventListener('click', function () {
      searchBox.style.display = 'none';
    });
  });