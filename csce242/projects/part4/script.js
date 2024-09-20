document.addEventListener('DOMContentLoaded',() =>{
    const hamburger = document.getElementById('hamburger-menu');
    const nav = document.getElementById('main-nav');

    hamburger.addEventListener('click',() =>{
        nav.classList.toggle('active');
    });
});