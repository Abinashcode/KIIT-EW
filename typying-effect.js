// Continuous Typing Effect for KIIT ENTRANCE WINGS
function initContinuousTypingEffect() {
    const heading = document.getElementById('typingHeading');
    if (!heading) return;
    
    const text = 'KIIT Higher Secondary School: Entrance Wings';
    let index = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    let deletingSpeed = 50;
    let pauseTime = 2000; // Pause at the end before deleting
    
    function type() {
        const currentText = text.substring(0, index);
        
        if (!isDeleting && index < text.length) {
            // Typing forward
            heading.textContent = currentText;
            index++;
            typingSpeed = 100;
            setTimeout(type, typingSpeed);
        } else if (!isDeleting && index === text.length) {
            // Finished typing, pause then start deleting
            heading.textContent = currentText;
            setTimeout(() => {
                isDeleting = true;
                type();
            }, pauseTime);
        } else if (isDeleting && index > 0) {
            // Deleting backward
            index--;
            heading.textContent = text.substring(0, index);
            deletingSpeed = 50;
            setTimeout(type, deletingSpeed);
        } else if (isDeleting && index === 0) {
            // Finished deleting, start typing again
            isDeleting = false;
            heading.textContent = '';
            setTimeout(type, 500);
        }
    }
    
    // Start typing after a short delay
    setTimeout(type, 500);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initContinuousTypingEffect);
} else {
    initContinuousTypingEffect();
}


