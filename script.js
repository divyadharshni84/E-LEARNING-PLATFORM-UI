// Navigation active state management
document.addEventListener('DOMContentLoaded', function() {
    // Set active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Course card click handlers
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(card => {
        card.addEventListener('click', function() {
            // In a real app, this would navigate to the specific course detail
            window.location.href = 'course-detail.html';
        });
    });

    // Progress bar animation
    const progressBars = document.querySelectorAll('.progress-bar div');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
});

// Simple form handling for search
const searchForm = document.querySelector('.search-box');
if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const searchInput = this.querySelector('input');
        alert(`Searching for: ${searchInput.value}`);
        // In a real app, this would filter courses
    });
}

// Enroll button functionality
const enrollBtn = document.querySelector('.enroll-btn');
if (enrollBtn) {
    enrollBtn.addEventListener('click', function() {
        alert('You have successfully enrolled in this course!');
        // In a real app, this would add to user's learning progress
    });
}

// Lesson completion toggle
const lessons = document.querySelectorAll('.lesson');
if (lessons) {
    lessons.forEach(lesson => {
        lesson.addEventListener('click', function() {
            this.classList.toggle('completed');
            // In a real app, this would track lesson completion
        });
    });
}
