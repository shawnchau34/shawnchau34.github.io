document.addEventListener(function() {
    const hamburger = document.getElementById('hamburger-menu');
    const nav = document.getElementById('main-nav');

    hamburger.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});