// Date and Time Display
function updateDateTime() {
    const now = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const day = days[now.getDay()];
    const date = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = String(hours).padStart(2, '0');
    
    const dateTimeString = `${day}, ${date} ${month}, ${year} ${hours}:${minutes}:${seconds} ${ampm}`;
    
    const datetimeElement = document.getElementById('datetime');
    if (datetimeElement) {
        datetimeElement.textContent = dateTimeString;
    }
}

// Update date and time every second
setInterval(updateDateTime, 1000);
updateDateTime(); // Initial call

// Hero Section Slider
document.addEventListener('DOMContentLoaded', function() {
    const heroSlider = document.querySelector('.hero-slider');
    
    if (heroSlider) {
        let currentSlide = 0;
        const totalSlides = 3; // We have 3 unique slides
        const slideInterval = 4000; // 4 seconds per slide
        let isTransitioning = false;
        
        function goToSlide(slideIndex) {
            // Calculate the position: each slide is 16.666% (100% / 6 slides)
            const position = slideIndex * 16.666;
            heroSlider.style.transform = `translateX(-${position}%)`;
        }
        
        function nextSlide() {
            if (isTransitioning) return;
                             
            currentSlide++;
            
            // If we're at the duplicate of the first slide (slide 3), reset seamlessly
            if (currentSlide >= totalSlides) {
                isTransitioning = true;
                // Move to the duplicate slide (slide 3, which is the same as slide 0)
                goToSlide(currentSlide);
                
                // Wait for transition to complete, then instantly reset to slide 0
                setTimeout(() => {
                    heroSlider.style.transition = 'none';
                    currentSlide = 0;
                    goToSlide(currentSlide);
                    // Force reflow
                    void heroSlider.offsetWidth;
                    // Re-enable transition
                    heroSlider.style.transition = 'transform 0.8s ease-in-out';
                    isTransitioning = false;
                }, 800); // Wait for transition duration
            } else {
                goToSlide(currentSlide);
            }
        }
        
        // Start the slider
        goToSlide(0);
        
        // Auto-advance slides
        setInterval(() => {
            nextSlide();
        }, slideInterval);
    }
});

