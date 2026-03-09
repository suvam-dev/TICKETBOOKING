export default function navbar() {
    const container = document.querySelector('#navbar');
    container.classList.add('navbar');
    container.innerHTML = `
        <a href="index.html" class="nav-brand">MovieTime</a>
        <button class="hamburger" id="hamburger" aria-label="Toggle menu">
            <i class="fa fa-bars"></i>
        </button>
        <div class="nav-links" id="nav-links">
            <a href="index.html">Home</a>
            <a href="pages/login.html">Login</a>       
        </div>`;

    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-open');
        hamburger.classList.toggle('active');
    });
}