document.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar-custom");
    const scrollToTopBtn = document.getElementById("scrollToTop");
    if (window.scrollY > 50) {
        navbar.classList.add("shrink");
        scrollToTopBtn.classList.add("show");
    } else {
        navbar.classList.remove("shrink");
        scrollToTopBtn.classList.remove("show");
    }
});

document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById("scrollToTop").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});