document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector("#hamburger-menu");
    const mainNav = document.querySelector("#main-nav");

    hamburgerMenu.addEventListener("click", function () {
        mainNav.classList.toggle("active");
        hamburgerMenu.classList.toggle("active");
    });

    // Close menu when a nav link is clicked
    const navLinks = mainNav.querySelectorAll("a");
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            mainNav.classList.remove("active");
            hamburgerMenu.classList.remove("active");
        });
    });
});
