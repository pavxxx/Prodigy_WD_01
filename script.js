// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});  // <-- close the click event properly

// Scroll listener for translucent menu
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        menu.classList.add('scrolled');
    } else {
        menu.classList.remove('scrolled');
    }
});

// Smooth scroll for menu links
const links = document.querySelectorAll('.menu a');

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });

        // Close mobile menu after click
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");
    const messageBox = document.getElementById("form-message");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        messageBox.style.display = "block"; // show message
        form.reset();
    });
});
