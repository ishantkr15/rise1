// mobile-menu.js
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mainNav = document.getElementById('mainNav');
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    // Toggle mobile menu
    mobileMenuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        mainNav.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });

    // Close menu when clicking on overlay
    overlay.addEventListener('click', function() {
        mobileMenuToggle.classList.remove('active');
        mainNav.classList.remove('active');
        this.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });

    // Close menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 992) {
                mobileMenuToggle.classList.remove('active');
                mainNav.classList.remove('active');
                overlay.classList.remove('active');
                document.body.classList.remove('no-scroll');
            }
        });
    });

    // Handle dropdown menus on mobile
    const dropdowns = document.querySelectorAll('.dropdown > .nav-link');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            if (window.innerWidth <= 992) {
                e.preventDefault();
                const menu = this.nextElementSibling;
                menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
            }
        });
    });
});