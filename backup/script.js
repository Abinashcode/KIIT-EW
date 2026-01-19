// Update Date and Time
function updateDateTime() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    
    const dateTimeString = now.toLocaleDateString('en-US', options);
    const datetimeElements = document.querySelectorAll('#datetime');
    
    datetimeElements.forEach(element => {
        if (element) {
            element.textContent = dateTimeString;
        }
    });
}

// Update datetime on page load and every second
updateDateTime();
setInterval(updateDateTime, 1000);

// Visitor Counter Animation
function animateVisitorCounter() {
    const visitorElement = document.getElementById('visitor-count');
    if (visitorElement) {
        const targetCount = 11927798;
        const currentCount = parseInt(visitorElement.textContent.replace(/,/g, '')) || 0;
        
        if (currentCount < targetCount) {
            const increment = Math.ceil((targetCount - currentCount) / 100);
            const newCount = Math.min(currentCount + increment, targetCount);
            visitorElement.textContent = newCount.toLocaleString();
        }
    }
}

// Initialize visitor counter
if (document.getElementById('visitor-count')) {
    animateVisitorCounter();
}

// Enquiry Button Handler
document.addEventListener('DOMContentLoaded', function() {
    const enquiryButtons = document.querySelectorAll('.enquiry-btn');
    enquiryButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Thank you for your interest! Please contact us for more information.');
        });
    });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Generate Student Cards for Results Page
function generateStudentCards() {
    const studentsGrid = document.getElementById('studentsGrid');
    if (!studentsGrid || studentsGrid.children.length > 0) return; // Prevent duplicates

    const students = getStudentsData();
    
    students.forEach(student => {
        const hexagon = document.createElement('div');
        hexagon.className = 'student-hexagon';
        
        hexagon.innerHTML = `
            <div class="student-hexagon-inner">
                <div class="student-photo" style="background-image: url('${student.photo || ''}'); background-size: cover; background-position: center;"></div>
                <div class="student-name">${student.name}</div>
                <div class="student-institution">${student.institution || student.status}</div>
            </div>
        `;
        
        studentsGrid.appendChild(hexagon);
    });
}

// Get Students Data
function getStudentsData() {
    return [
        { name: 'ANINDYA ANURADHA (1Yr.)', institution: 'MKCG Medical College Berhampur' },
        { name: 'ADYASHREE BISWAL (1 Yr.)', institution: 'SRM Medical College Bhawanipatna' },
        { name: 'STHITA PRAJNA SAHOO (Int.)', institution: 'PRM Medical College Baripada' },
        { name: 'DIBYA JYOTI SAHOO (1Yr.)', institution: 'DD Medical College Keonjhar' },
        { name: 'JEET JENA (Int.)', institution: 'SJMCH Puri' },
        { name: 'SNEHA PRIYADARSHINEE (1 Yr.)', institution: 'MKCG Medical College Berhampur' },
        { name: 'PABITRA PRADHAN (1 Yr.)', institution: 'MKCG Medical College Berhampur' },
        { name: 'ANKITA MISHRA (Int.)', institution: 'OUTR Bhubaneswar' },
        { name: 'SUBHANTA SAHANI (Int)', institution: 'NIT Rourkela' },
        { name: 'SUJIT KUMAR SAHOO (Int.)', institution: 'OUTR BBSR' },
        { name: 'GOPINATH SETHI (Int.)', status: 'Qualified' },
        { name: 'SHAKTISHREE (Int.)', institution: 'OUTR BBSR' },
        { name: 'PREM PRAKASH SAHOO (Int.)', status: 'Qualified' },
        { name: 'SUBHRAJEET SAHOO (Int.)', status: 'Qualified' },
        { name: 'SURYAKANTA SAHOO (Int.)', status: 'Qualified' },
        { name: 'KRISHNA BUDIULI (Int)', institution: 'NIT Rourkela' },
        { name: 'KAIRA KISHORE KALUNDIA (Int.)', institution: 'NIT Chandigarh' },
        { name: 'MEGHNA MISHRA (Int.)', status: 'Qualified' },
        { name: 'CHIRANJIB BEHERA (Int.)', status: 'Qualified' },
        { name: 'HIMANSHU S. KANDI (Int.)', status: 'Qualified' },
        { name: 'SUBHRANGANA MISHRA (Crash.)', institution: 'VSSUT' },
        { name: 'JYOTISANKAR (Int.)', institution: 'Engineering College Keonjhar' },
        { name: 'IPSITA PRADHAN (Int.)', institution: 'NIT' },
        { name: 'SAHILUR RAHEMAN KHAN (Int.)', institution: 'NIT' },
        { name: 'STUDENT 25', status: 'Qualified' },
        { name: 'STUDENT 26', institution: 'NIT Rourkela' },
        { name: 'STUDENT 27', status: 'Qualified' },
        { name: 'STUDENT 28', institution: 'OUTR BBSR' },
        { name: 'STUDENT 29', status: 'Qualified' },
        { name: 'STUDENT 30', institution: 'NIT' }
    ];
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('studentsGrid')) {
        generateStudentCards();
    }
    
    // Typing Effect for Main Heading
    // Typing effect moved to typing-effect.js
    
    // Scroll to Top Button
    initScrollToTop();
    
    // Intersection Observer for animations
    initScrollAnimations();
    
    // Faculty Cards Scroll Animation
    initFacultyScrollAnimation();
    
    // Student Cards Scroll Animation
    initStudentCardsScrollAnimation();
});

// Scroll to Top Functionality
function initScrollToTop() {
    const scrollButton = document.getElementById('scrollToTop');
    if (!scrollButton) return;
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollButton.classList.add('visible');
        } else {
            scrollButton.classList.remove('visible');
        }
    });
    
    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Typing Effect moved to typing-effect.js for continuous looping

// Scroll Animations for Sections
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe course cards
    const courseCards = document.querySelectorAll('.course-card-tech');
    courseCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Observe facility sections
    const facilitySections = document.querySelectorAll('.facility-section-individual');
    facilitySections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = `opacity 0.8s ease ${index * 0.15}s, transform 0.8s ease ${index * 0.15}s`;
        observer.observe(section);
    });
}

// Faculty Cards Scroll Animation with Hover Effects
function initFacultyScrollAnimation() {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };
    
    // Animate faculty section header
    const facultySection = document.querySelector('.faculty-section');
    const facultyHeading = document.querySelector('.faculty-heading');
    
    if (facultySection && facultyHeading) {
        const headerObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    facultyHeading.classList.add('faculty-heading-visible');
                    headerObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        headerObserver.observe(facultySection);
        facultyHeading.classList.add('faculty-heading-animate');
    }
    
    // Animate faculty cards
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('faculty-card-visible');
                }, index * 150);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const facultyCards = document.querySelectorAll('.faculty-card');
    facultyCards.forEach(card => {
        card.classList.add('faculty-card-animate');
        observer.observe(card);
    });
}

// Student Cards Scroll Animation with Hover Effects
function initStudentCardsScrollAnimation() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('student-card-visible');
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const studentCards = document.querySelectorAll('.student-result-card');
    studentCards.forEach(card => {
        card.classList.add('student-card-animate');
        observer.observe(card);
    });
}

