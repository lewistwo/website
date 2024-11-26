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

// Navbar and Menu Button Scroll Effect with Throttle
let throttleTimeout = null; 
window.addEventListener("scroll", () => {
    if (!throttleTimeout) {
        throttleTimeout = setTimeout(() => {
            const navbar = document.querySelector(".navbar");
            const menuButton = document.querySelector(".menu-button");

            // Apply the scroll effect to the navbar
            if (navbar) {
                if (window.scrollY > 0) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            } else {
                console.error("Navbar element not found.");
            }

            // Apply the scroll effect to the menu button
            if (menuButton) {
                if (window.scrollY > 50) {  // You can adjust the scroll threshold
                    menuButton.classList.add("scrolled");
                } else {
                    menuButton.classList.remove("scrolled");
                }
            } else {
                console.error("Menu button element not found.");
            }

            throttleTimeout = null;
        }, 100); // Adjust the throttle delay (100ms is typically fine)
    }
});

// Example for opening the menu
const menuButton = document.querySelector('.menu-button');
const dropdownMenu = document.querySelector('.dropdown-menu');
const body = document.body;

menuButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('visible');  // Toggle dropdown visibility
    body.classList.toggle('menu-open');        // Prevent scrolling when menu is open
});


// Fade effect based on scroll
document.addEventListener("scroll", function () {
    const scrollY = window.scrollY;
    const fadePoint = 50; // Point at which the fade starts (in pixels)
    const element = document.querySelector(".work-text");

    if (scrollY < fadePoint) {
        // Calculate opacity based on scroll distance
        const opacity = 1 - scrollY / fadePoint;
        element.style.opacity = opacity;
    } else {
        // Fully faded out
        element.style.opacity = 0;
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

    // Hide the submit button and show the confirmation message
    document.querySelector(".contact-button").style.display = "none";
    document.getElementById("confirmation-message").style.display = "block";

    // Clear the form after submission
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    // Optionally hide the confirmation message after a few seconds
    setTimeout(() => {
        document.getElementById("confirmation-message").style.display = "none";
    }, 5000);

    // For actual email sending, use back-end (like PHP, Formspree, or other services)
    // Example: Simulate sending data (since JavaScript cannot send emails directly)
    console.log("Email sent to:", email);
    console.log("Message content:", message);
});
