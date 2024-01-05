//隨機評論
    // 隨機星號評分
    function getRandomRating() {
        const ratings = ["★★★★★", "★★★★☆", "★★★☆☆"];
        return ratings[Math.floor(Math.random() * ratings.length)];
      }
    
      // 隨機評論內容
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
    
      // 隨機用戶名稱
      function getRandomUserName() {
        const userNames = ["cycu****", "tealover123", "greenteaenthusiast", "teasipper99", "aromatea"];
        return userNames[Math.floor(Math.random() * userNames.length)];
      }
    
      // 生成隨機評論項目
      function generateRandomReview() {
        const reviewContainer = document.getElementById("review-container");
    
        const reviewItem = document.createElement("div");
        reviewItem.classList.add("review-info");
    
        const userPhoto = document.createElement("img");
        userPhoto.setAttribute("src", "../../assets/image/user.png");
        userPhoto.setAttribute("alt", "User photo");
    
        const userName = document.createElement("div");
        userName.classList.add("user-name");
        userName.textContent = getRandomUserName();
    
        const rating = document.createElement("div");
        rating.classList.add("rating");
        rating.textContent = getRandomRating();
    
        const reviewContent = document.createElement("p");
        reviewContent.textContent = getRandomReviewContent();
    
        const hr = document.createElement("hr");
    
        // 將元素添加到評論項目
        reviewItem.appendChild(userPhoto);
        reviewItem.appendChild(userName);
        reviewItem.appendChild(rating);
        reviewItem.appendChild(reviewContent);
        reviewItem.appendChild(hr);
    

        reviewContainer.appendChild(reviewItem);
      }
    
      // 生成多個隨機評論
      for (let i = 0; i < 3; i++) {
        generateRandomReview();
      }