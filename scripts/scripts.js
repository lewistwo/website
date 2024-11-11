console.log("JavaScript file loaded");

// Select modal elements
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const closeButton = document.querySelector(".close");

// Ensure modal elements are present before adding event listeners
if (modal && modalImage && closeButton) {

    // Open modal when an image is clicked
    document.querySelectorAll(".gallery-item img").forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "flex";  // Show modal
            modalImage.src = img.src;     // Set the modal image to clicked image's source
        });
    });

    // Close modal when the close button is clicked
    closeButton.addEventListener("click", () => {
        modal.style.display = "none";  // Hide modal
    });

    // Close modal when clicking outside of the modal content
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";  // Hide modal if clicking on background
        }
    });

} else {
    console.error("Modal elements not found in the DOM.");
}

// Fade background on navbar when scrolling
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
        if (window.scrollY > 0) {  // Add "scrolled" class when user scrolls down
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");  // Remove "scrolled" class when at the top
        }
    } else {
        console.error("Navbar element not found.");
    }
});
