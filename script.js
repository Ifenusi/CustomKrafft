/**
 * Page Navigation: Show the page with the given ID and update navigation links.
 * @param {string} pageId - The ID of the page to show.
 */
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));

    window.scrollTo(0, 0);
    setTimeout(() => {
        animateVisibleElements();
    }, 100);
}

/**
 * Portfolio Filter: Filter portfolio items by category and update active button.
 * @param {Event} event - The click event.
 * @param {string} category - The category to filter by.
 */
function filterPortfolio(event, category) {
    const items = document.querySelectorAll('.portfolio-item');
    const buttons = document.querySelectorAll('.filter-btn');
    
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    items.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
            item.style.animation = 'fadeIn 0.5s ease-in-out';
        } else {
            item.style.display = 'none';
        }
    });
}

/**
 * Form Submission: Handle form submission, show alert, reset form, and log data.
 * @param {Event} event - The form submit event.
 */
function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    alert("Thank you for your message! We'll get back to you within 24 hours.");
    event.target.reset();
    console.log('Form submitted:', data);
}

/**
 * Scroll Animations: Animate elements with fade-in effect when they become visible.
 */
function animateVisibleElements() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// Mobile menu toggle
document.querySelector('.mobile-menu')?.addEventListener('click', function() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Loading screen hide on window load
window.addEventListener('load', function() {
    setTimeout(() => {
        document.getElementById('loading')?.classList.add('hidden');
        animateVisibleElements();
    }, 1000);
});

// Animate elements on scroll
window.addEventListener('scroll', animateVisibleElements);

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.98)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    }
});

// Hover effect on cards
document.querySelectorAll('.feature-card, .service-card, .portfolio-item, .team-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Parallax effect on hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero');
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});
