export default function navbar() {
    const container = document.querySelector('#navbar');
    container.classList.add('navbar');
    const urlString = window.location.href;
    const url = new URL(urlString);
    const lastPart = url.pathname.split('/').pop();
    console.log("Current page:", lastPart);
    if (lastPart === "index.html") {
        container.innerHTML = `
        <a href="index.html" class="nav-brand">MovieTime</a>
        <button class="hamburger" id="hamburger" aria-label="Toggle menu">
            <i class="fa fa-bars"></i>
        </button>
        <div class="nav-links" id="nav-links">
            <input type="text" placeholder="Search movies..." class="search-input">
            <a href="index.html">Home</a>
            <a href="./pages/contact.html">Contact</a>
            <a href="./pages/about.html">About</a>
            <a href="./pages/login.html">Login</a>       
        </div>`;
    } 
    else { 
    container.innerHTML = `
        <a href="index.html" class="nav-brand">MovieTime</a>
        <button class="hamburger" id="hamburger" aria-label="Toggle menu">
            <i class="fa fa-bars"></i>
        </button>
        <div class="nav-links" id="nav-links">
            <input type="text" placeholder="Search movies..." class="search-input">
            <a href="../index.html">Home</a>
            <a href="contact.html">Contact</a>
            <a href="about.html">About</a>
            <a href="login.html">Login</a>       
        </div>`;
    }

    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-open');
        hamburger.classList.toggle('active');
    });
}
navbar();