document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".carousel-slide");
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
      });
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    // Initial display
    showSlide(currentSlide);
  
    // Auto carousel every 3 seconds (adjust as needed)
    setInterval(nextSlide, 3000);
  });