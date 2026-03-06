import moviesDatabase from "../database/data.js";
import navbar from "../components/navbar.js";

function generateMovieCards()
{
    const movies = moviesDatabase;
    const moviesGrid = document.querySelector(".movies-grid");
    movies.forEach(movie => {
        console.log(movie);
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");
        movieCard.setAttribute("data-id", movie.id);
        movieCard.innerHTML = `
            <div class="movie-image">
                <img src="${movie.imageUrl}" alt="${movie.name}">
            </div>
            <div class="movie-info">
                <div class="movie-title">${movie.name}</div>
                <p class="movie-desc">${movie.shortDescription}</p>
                <a href="booking.html" class="book-btn">Book Tickets</a>
            </div>
        `;
        moviesGrid.appendChild(movieCard);
    });
}
console.log("Script loaded");
navbar();
generateMovieCards();


