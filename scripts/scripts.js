console.log("JavaScript file loaded");

// Modal Logic
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const closeButton = document.querySelector(".close");

if (modal && modalImage && closeButton) {
    document.querySelectorAll(".gallery-item img").forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "flex"; 
            modalImage.src = img.src;     
        });
    });

    closeButton.addEventListener("click", () => {
        modal.style.display = "none"; 
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none"; 
        }
    });
} else {
    console.error("Modal elements not found in the DOM.");
}

// Navbar Hide on Scroll Logic
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

if (navbar) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        if (currentScroll > lastScrollTop) {
            // Scrolling down
            navbar.classList.add('hidden');
        } else {
            // Scrolling up
            navbar.classList.remove('hidden');
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Handle mobile or negative scrolling
    });
} else {
    console.error("Navbar element not found.");
}

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-in");

    elements.forEach((el, index) => {
        const delay = index * 0.01; 
        el.style.transitionDelay = `${delay}s`;
    });

    const onScroll = () => {
        elements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;

            if (rect.top < windowHeight && rect.bottom > 0) {
                el.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // Trigger on page load
});

// Example for opening the menu
const menuButton = document.querySelector('.menu-button');
const dropdownMenu = document.querySelector('.dropdown-menu');
const body = document.body;

if (menuButton && dropdownMenu) {
    menuButton.addEventListener('click', () => {
        dropdownMenu.classList.toggle('visible');  // Toggle dropdown visibility
        body.classList.toggle('menu-open');        // Prevent scrolling when menu is open
    });
} else {
    console.error("Menu elements not found.");
}

// Fade effect based on scroll
document.addEventListener("scroll", function () {
    const scrollY = window.scrollY;
    const fadePoint = 30; // Point at which the fade starts (in pixels)
    const element = document.querySelector(".work-text");

    if (element) {
        if (scrollY < fadePoint) {
            // Calculate opacity based on scroll distance
            const opacity = 1 - scrollY / fadePoint;
            element.style.opacity = opacity;
        } else {
            // Fully faded out
            element.style.opacity = 0;
        }
    } else {
        console.error("Fade element not found.");
    }
});

// Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from default submission (no page refresh)
    
    // Get values of email and message fields
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Basic validation (you can expand this)
    if (!email || !message) {
        alert("Please fill in both fields.");
        return;
    }

    // Clear the form after submission
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    // For actual email sending, use back-end (like PHP, Formspree, or other services)
    // Example: Simulate sending data (since JavaScript cannot send emails directly)
    console.log("Email sent to:", email);
    console.log("Message content:", message);
});
