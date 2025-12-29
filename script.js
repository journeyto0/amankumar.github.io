/**
 * Aman Kumar Portfolio Logic
 * Handles: Theme Toggle, Typing Animations, Scroll Spy, and Carousel
 */

const themeBtn = document.getElementById('themeBtn');
const themeIcon = document.getElementById('themeIcon');
const themeLabel = document.getElementById('themeLabel');
const html = document.documentElement;

// 1. Theme Toggle Logic
themeBtn.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const target = current === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', target);
    localStorage.setItem('aman-pro-theme-v2', target);
    
    // Update UI elements
    themeIcon.className = target === 'dark' ? 'fas fa-moon me-2' : 'fas fa-sun me-2';
    themeLabel.innerText = target.toUpperCase();
});

// Initialize UI based on saved theme
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = html.getAttribute('data-theme');
    themeIcon.className = savedTheme === 'dark' ? 'fas fa-moon me-2' : 'fas fa-sun me-2';
    themeLabel.innerText = savedTheme.toUpperCase();
});

$(document).ready(function() {
    // 2. Typing Animations
    if ($(".typing").length) {
        new Typed(".typing", {
            strings: ["CSE Student", "Web Developer", "Problem Solver"],
            typeSpeed: 100, 
            backSpeed: 60, 
            loop: true
        });
    }

    if ($(".typing-2").length) {
        new Typed(".typing-2", {
            strings: ["Specialized in Data Science", "Mastering Algorithms", "Analytical Thinker"],
            typeSpeed: 100, 
            backSpeed: 60, 
            loop: true
        });
    }

    // 3. Scroll Spy Logic (Vertical Navigation Tracking)
    $('#stage').on('scroll', function() {
        let scrollPos = $(this).scrollTop();
        $('section').each(function() {
            let top = $(this).position().top;
            let id = $(this).attr('id');
            // If the section is roughly in the middle of the viewport
            if (top <= 150 && top >= -150) {
                $('#mainNav a').removeClass('active');
                $('#mainNav a[href="#' + id + '"]').addClass('active');
            }
        });
    });

    // 4. Owl Carousel Initialization (Projects)
    $(".carousel").owlCarousel({
        margin: 25, 
        loop: false, 
        autoplay: false,
        responsive: { 
            0: { items: 1 }, 
            1200: { items: 2 } 
        }
    });

    // 5. Smooth Scroll for Navigation Links
    $('#mainNav a, .btn-cta, a[href^="#"]').on('click', function(event) {
        const targetId = $(this).attr('href');
        if (targetId.startsWith('#')) {
            event.preventDefault();
            const container = $('#stage');
            const targetElement = $(targetId);
            
            if (targetElement.length) {
                container.animate({
                    scrollTop: container.scrollTop() + targetElement.position().top
                }, 800);
            }
        }
    });
});
