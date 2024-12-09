console.log("JavaScript file loaded");

// Navbar Scroll-Hide Logic
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    let lastScrollY = window.scrollY;

    if (navbar) {
        window.addEventListener("scroll", () => {
            if (window.innerWidth > 768) { // Desktop only
                if (window.scrollY > lastScrollY) {
                    navbar.classList.add("hidden"); // Hide navbar
                } else {
                    navbar.classList.remove("hidden"); // Show navbar
                }
                lastScrollY = window.scrollY;
            }
        });
    } else {
        console.error("Navbar element not found.");
    }
});

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

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-in");

    elements.forEach((el, index) => {
        const delay = index * 0.015; 
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
    const fadePoint = 70; // Point at which the fade starts (in pixels)
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

// Parallax Effect
document.addEventListener('scroll', function () {
    const parallaxImages = document.querySelectorAll('.parallax-image');
    parallaxImages.forEach(image => {
        const offset = window.scrollY * 0.5;
        image.style.transform = `translate(-50%, calc(-50% + ${offset}px))`;
    });

    document.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const parallaxElement = document.querySelector('.parallax__background');
        const speed = 0.5; // Adjust for desired speed
        parallaxElement.style.transform = `translateY(${scrollPosition * speed}px)`;
      });
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
