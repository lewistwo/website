console.log("JavaScript file loaded");

// Consolidated DOMContentLoaded Logic
document.addEventListener("DOMContentLoaded", () => {
    // Navbar Scroll-Hide Logic
    const navbar = document.querySelector(".navbar");
    if (navbar) {
        let lastScrollY = window.scrollY;
        const topBuffer = 5; // Tolerance for bouncing at the top

        window.addEventListener("scroll", () => {
            if (window.innerWidth > 768) { // Desktop only
                const currentScrollY = window.scrollY;

                if (currentScrollY <= topBuffer) {
                    navbar.classList.remove("hidden");
                } else if (currentScrollY > lastScrollY) {
                    navbar.classList.add("hidden");
                } else if (currentScrollY < lastScrollY) {
                    navbar.classList.remove("hidden");
                }

                lastScrollY = currentScrollY;
            }
        });
    } else {
        console.error("Navbar element not found. Ensure your HTML contains an element with the class '.navbar'.");
    }

    // Fade-in Elements Logic
    const fadeInElements = document.querySelectorAll(".fade-in");
    if (fadeInElements.length > 0) {
        fadeInElements.forEach((el, index) => {
            const delay = index * 0.015;
            el.style.transitionDelay = `${delay}s`;
        });

        const onScroll = () => {
            fadeInElements.forEach((el) => {
                const rect = el.getBoundingClientRect();
                const windowHeight = window.innerHeight || document.documentElement.clientHeight;

                if (rect.top < windowHeight && rect.bottom > 0) {
                    el.classList.add("visible");
                }
            });
        };

        window.addEventListener("scroll", onScroll);
        onScroll(); // Trigger on page load
    }

    // Menu Dropdown Logic
    const menuButton = document.querySelector('.menu-button');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const body = document.body;

    if (menuButton && dropdownMenu) {
        menuButton.addEventListener('click', () => {
            const isHidden = dropdownMenu.classList.contains('hidden');
            if (isHidden) {
                dropdownMenu.classList.remove('hidden');
                dropdownMenu.classList.add('visible');
                body.classList.add('menu-open');
            } else {
                dropdownMenu.classList.remove('visible');
                dropdownMenu.classList.add('hidden');
                body.classList.remove('menu-open');
            }
        });

        // Add link to close the menu
        const closeMenuLink = dropdownMenu.querySelector('.close-menu');
        if (closeMenuLink) {
            closeMenuLink.addEventListener('click', (e) => {
                e.preventDefault(); // Prevent default link behavior
                dropdownMenu.classList.add('hidden'); // Close the menu
                body.classList.remove('menu-open');
            });
        } else {
            console.error("Close menu link not found. Ensure your HTML contains a link with the class '.close-menu'.");
        }
    } else {
        console.error("Menu elements not found. Ensure your HTML contains elements with the classes '.menu-button' and '.dropdown-menu'.");
    }

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
        console.error("Modal elements not found. Ensure your HTML contains elements with IDs 'modal' and 'modal-image', and a close button with the class '.close'.");
    }

    // Project Text Fade Effect Based on Scroll
    const workText = document.querySelector(".project-text");
    if (workText) {
        document.addEventListener("scroll", () => {
            const scrollY = window.scrollY;
            const fadePoint = 70;
            const opacity = scrollY < fadePoint ? 1 - scrollY / fadePoint : 0;
            workText.style.opacity = opacity;
        });
    } else {
        console.error("Fade element '.project-text' not found.");
    }

    // Parallax Effect
    document.addEventListener("scroll", () => {
        const parallaxImages = document.querySelectorAll(".parallax-image");
        if (parallaxImages.length > 0) {
            parallaxImages.forEach(image => {
                const offset = window.scrollY * 0.5;
                image.style.transform = `translate(-50%, calc(-50% + ${offset}px))`;
            });
        }

        const parallaxElement = document.querySelector(".parallax__background");
        if (parallaxElement) {
            const scrollPosition = window.scrollY;
            const speed = 0.5; // Adjust for desired speed
            parallaxElement.style.transform = `translateY(${scrollPosition * speed}px)`;
        }
    });

    // Contact Form Submission
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
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
        console.error("Contact form not found. Ensure your HTML contains a form with the ID 'contact-form'.");
    }
});
