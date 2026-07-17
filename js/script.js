document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelectorAll("nav a");

    function updateHeaderState() {
        if (!header) {
            return;
        }

        header.classList.toggle("scrolled", window.scrollY > 28);
    }

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState);

    if (navToggle) {
        navToggle.addEventListener("click", () => {
            const isOpen = document.body.classList.toggle("nav-open");
            header?.classList.toggle("menu-active", isOpen);
            navToggle.setAttribute("aria-expanded", String(isOpen));
            navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
        });

        navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                document.body.classList.remove("nav-open");
                header?.classList.remove("menu-active");
                navToggle.setAttribute("aria-expanded", "false");
                navToggle.setAttribute("aria-label", "Open navigation");
            });
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", (event) => {
            const target = document.querySelector(link.getAttribute("href"));

            if (!target) {
                return;
            }

            event.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        });
    });

    const animatedItems = document.querySelectorAll(".card, .features div, .gallery-grid img, .image-stack");

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("is-visible");
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.16 });

        animatedItems.forEach((item) => {
            item.style.opacity = "0";
            item.style.transform = "translateY(22px)";
            item.style.transition = "opacity .55s ease, transform .55s ease";
            observer.observe(item);
        });
    } else {
        animatedItems.forEach((item) => {
            item.classList.add("is-visible");
        });
    }

    document.addEventListener("transitionend", (event) => {
        if (event.target.classList.contains("is-visible")) {
            event.target.style.opacity = "";
            event.target.style.transform = "";
            event.target.style.transition = "";
        }
    });

    // Netlify handles contact form submissions from the static HTML form.
});
