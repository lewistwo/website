console.log("JavaScript file loaded");

document.addEventListener("DOMContentLoaded", () => {
    // Navbar Scroll-Hide Logic with Blur on Scroll-Up
    const navbar = document.querySelector(".navbar");
    if (navbar) {
        let lastScrollY = window.scrollY;
        const topBuffer = 5;

        window.addEventListener("scroll", () => {
            if (window.innerWidth > 768) {
                const currentScrollY = window.scrollY;

                if (currentScrollY <= topBuffer) {
                    navbar.classList.remove("hidden");
                    navbar.classList.remove("blurred");
                } else if (currentScrollY > lastScrollY) {
                    navbar.classList.add("hidden");
                    navbar.classList.remove("blurred");
                } else if (currentScrollY < lastScrollY) {
                    navbar.classList.remove("hidden");
                    navbar.classList.add("blurred");
                }

                lastScrollY = currentScrollY;
            }
        });
    } else {
        console.error("Navbar element not found.");
    }

    const menuButton = document.querySelector(".menu-button");
    const dropdownMenu = document.querySelector(".dropdown-menu");
    const body = document.body;
    
    // Helper function to handle transitions
    function toggleMenu(show) {
        if (show) {
            dropdownMenu.classList.add("visible");
            dropdownMenu.classList.remove("hidden");
            body.classList.add("menu-open");
        } else {
            dropdownMenu.classList.add("hidden");
            dropdownMenu.addEventListener(
                "transitionend",
                () => {
                    dropdownMenu.classList.remove("visible");
                },
                { once: true }
            );
            body.classList.remove("menu-open");
        }
    }
    
    if (menuButton && dropdownMenu) {
        menuButton.addEventListener("click", () => {
            const isVisible = dropdownMenu.classList.contains("visible");
            toggleMenu(!isVisible);
        });
    
        const closeMenuLink = dropdownMenu.querySelector(".close-menu");
        if (closeMenuLink) {
            closeMenuLink.addEventListener("click", (e) => {
                e.preventDefault();
                toggleMenu(false);
            });
        } else {
            console.error("Close menu link not found.");
        }
    } else {
        console.error("Menu elements not found.");
    }
    

    // Fade-In Elements Logic
    const fadeInElements = document.querySelectorAll(".fade-in");
    if (fadeInElements.length > 0) {
        fadeInElements.forEach((el, index) => {
            el.style.transitionDelay = `${index * 0.015}s`;
        });

        const handleFadeIn = () => {
            fadeInElements.forEach((el) => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    el.classList.add("visible");
                }
            });
        };

        window.addEventListener("scroll", handleFadeIn);
        handleFadeIn();
    }

    // Slideshow Effect
    const slideshow = document.querySelector(".slideshow");
    if (slideshow) {
        const images = slideshow.querySelectorAll("img");
        const description = slideshow.querySelector(".slideshow-description");
        let currentIndex = 0;

        // Initialize the description
        if (images.length > 0) {
            description.textContent = images[0].getAttribute("data-description");
        }

        slideshow.classList.add("visible");

        slideshow.addEventListener("click", () => {
            console.log("Slideshow clicked");

            // Remove 'active' class from the current image
            images[currentIndex].classList.remove("active");

            // Update index to the next image (loop back to the first if necessary)
            currentIndex = (currentIndex + 1) % images.length;

            // Add 'active' class to the new current image
            images[currentIndex].classList.add("active");

            // Update the text description
            description.textContent = images[currentIndex].getAttribute("data-description");
        });
    } else {
        console.error("Slideshow element not found.");
    }

    // Modal Logic
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const closeButton = document.querySelector(".close");

    if (modal && modalImage && closeButton) {
        document.querySelectorAll(".slideshow-item img").forEach(img => {
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
        console.error("Modal elements not found.");
    }

    // Parallax Effect
    window.addEventListener("scroll", () => {
        const parallaxImages = document.querySelectorAll(".parallax-image");
        parallaxImages.forEach(image => {
            const offset = window.scrollY * 0.5;
            image.style.transform = `translate(-50%, calc(-50% + ${offset}px))`;
        });

        const parallaxElement = document.querySelector(".parallax__background");
        if (parallaxElement) {
            parallaxElement.style.transform = `translateY(${window.scrollY * 0.5}px)`;
        }
    });

    // Contact Form Logic
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            if (!email || !message) {
                alert("Please fill in both fields.");
                return;
            }

            document.getElementById("email").value = "";
            document.getElementById("message").value = "";

            console.log("Email sent to:", email);
            console.log("Message content:", message);
        });
    } else {
        console.error("Contact form not found.");
    }
});
