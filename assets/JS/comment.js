// 隨機評論

// 函式：取得隨機星號評分
function getRandomRating() {
  const ratings = ["★★★★★", "★★★★☆", "★★★☆☆"];
  return ratings[Math.floor(Math.random() * ratings.length)];
}

// 函式：取得隨機評論內容
function getRandomReviewContent() {
  const reviews = [
      "沖泡出來的茶不會澀，反而十分清甜，好茶！",
      "喜歡這款茶的香氣，值得一試。",
      "包裝精美，茶味醇厚，非常滿意。",
      "這是我喝過最好喝的茶，回購無數次。",
      "茶葉的品質非常好，推薦給大家。"
  ];
  return reviews[Math.floor(Math.random() * reviews.length)];
}

// 函式：取得隨機用戶名稱
function getRandomUserName() {
  const userNames = ["cycu****", "tealover123", "greenteaenthusiast", "teasipper99", "aromatea"];
  return userNames[Math.floor(Math.random() * userNames.length)];
}

// 函式：生成隨機評論項目
function generateRandomReview() {
  // 取得評論容器元素
  const reviewContainer = document.getElementById("review-container");

  // 創建評論項目元素
  const reviewItem = document.createElement("div");
  reviewItem.classList.add("review-info");

  // 創建用戶照片元素
  const userPhoto = document.createElement("img");
  userPhoto.setAttribute("src", "../../assets/image/user.png");
  userPhoto.setAttribute("alt", "User photo");

  // 創建用戶名稱元素
  const userName = document.createElement("div");
  userName.classList.add("user-name");
  userName.textContent = getRandomUserName();

  // 創建星號評分元素
  const rating = document.createElement("div");
  rating.classList.add("rating");
  rating.textContent = getRandomRating();

  // 創建評論內容元素
  const reviewContent = document.createElement("p");
  reviewContent.textContent = getRandomReviewContent();

  // 創建水平線元素
  const hr = document.createElement("hr");

  // 將元素添加到評論項目
  reviewItem.appendChild(userPhoto);
  reviewItem.appendChild(userName);
  reviewItem.appendChild(rating);
  reviewItem.appendChild(reviewContent);
  reviewItem.appendChild(hr);

  // 將評論項目添加到評論容器
  reviewContainer.appendChild(reviewItem);
}

// 生成多個隨機評論
for (let i = 0; i < 3; i++) {
  generateRandomReview();
}
