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

// Navbar Scroll Effect
window.addEventListener("scroll", (() => {
    let throttleTimeout = null; 
    return () => {
        if (!throttleTimeout) {
            throttleTimeout = setTimeout(() => {
                const navbar = document.querySelector(".navbar");
                if (navbar) {
                    if (window.scrollY > 0) {
                        navbar.classList.add("scrolled");
                    } else {
                        navbar.classList.remove("scrolled");
                    }
                } else {
                    console.error("Navbar element not found.");
                }
                throttleTimeout = null;
            }, 100); 
        }
    };
})());

// Dropdown Menu Logic
// Select the menu button and dropdown menu
const menuButton = document.querySelector('.menu-button');
const dropdownMenu = document.querySelector('.dropdown-menu');

// Add an event listener for the menu button
menuButton.addEventListener('click', () => {
    // Toggle the "hidden" class to show/hide the dropdown menu
    dropdownMenu.classList.toggle('hidden');
});
