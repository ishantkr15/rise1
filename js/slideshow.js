// slideshow.js
document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0;
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
    
    // Initialize the slideshow
    showSlides();
    
    // Auto-advance slides every 5 seconds
    let slideInterval = setInterval(() => plusSlides(1), 5000);
    
    // Pause on hover
    const slideshowContainer = document.querySelector('.slideshow-container');
    slideshowContainer.addEventListener('mouseenter', () => clearInterval(slideInterval));
    slideshowContainer.addEventListener('mouseleave', () => {
        clearInterval(slideInterval);
        slideInterval = setInterval(() => plusSlides(1), 5000);
    });
    
    // Next/previous controls
    function plusSlides(n) {
        slideIndex += n;
        showSlides();
    }
    
    // Thumbnail image controls
    function currentSlide(n) {
        slideIndex = n - 1;
        showSlides();
    }
    
    function showSlides() {
        // Wrap around if at beginning or end
        if (slideIndex >= slides.length) { slideIndex = 0; }
        if (slideIndex < 0) { slideIndex = slides.length - 1; }
        
        // Hide all slides
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            slides[i].classList.remove("active");
        }
        
        // Remove active class from all dots
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove("active");
        }
        
        // Show current slide and activate corresponding dot
        slides[slideIndex].style.display = "block";
        slides[slideIndex].classList.add("active");
        dots[slideIndex].classList.add("active");
    }
    
    // Make functions available globally
    window.plusSlides = plusSlides;
    window.currentSlide = currentSlide;
});