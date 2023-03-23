const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'content-type': 'application/json; charset=utf-8',
  },
  params: {
    'api_key': API_KEY,
  },
})

// UTILS

function getMoviePosters(movies, container) {
  movies.forEach(movie => {
    const moviePoster = document.createElement("img");
    moviePoster.setAttribute("src", `https://image.tmdb.org/t/p/w300${movie.poster_path}`);
    moviePoster.setAttribute("alt", movie.title);
    moviePoster.classList.add("movie-image");

    container.appendChild(moviePoster);
  });
}

// API CALLS

async function getTrends() {
  const { data } = await api('/trending/movie/day');

  const movies = data.results;

  generalMovieContainer.innerHTML = "";

  getMoviePosters(movies, generalMovieContainer);
};

async function getBannerRecommendation() {
  const { data } = await api('/trending/movie/day');

  const movies = data.results;
  const movieArray = [...movies];

  const randomMovieSelected = [];
  randomMovieSelected.push(movieArray[Math.floor(Math.random() * (10 - 1 +1)) + 1]);

  const recommendedMovie = document.createElement("img");
  recommendedMovie.setAttribute("src", `https://image.tmdb.org/t/p/w1280${randomMovieSelected[0].backdrop_path}`)
  recommendedMovie.setAttribute("alt", randomMovieSelected[0].title);
  recommendedMovie.classList.add("recommended-movie-section-img")

  const recommendedMovieTittle = document.createElement("p");
  recommendedMovieTittle.classList.add("movie-title-banner");
  recommendedMovieTittle.innerHTML = `${randomMovieSelected[0].title}`;

  bannerContainer.append(recommendedMovie);
  bannerContainer.appendChild(recommendedMovieTittle)

};

async function getMovieGenres() {
  const { data } = await api('/genre/movie/list')

  const genres = data.genres;

  genres.forEach(genre => {
    console.log(genre.name + genre.id);
  })
}

async function getMoviesByGenres(id, container) {
  const { data } = await api('/discover/movie', {params: {
    with_genres: id,
  }});

  const movieList = data.results;
  
  getMoviePosters(movieList, container)

}




getTrends();

getBannerRecommendation();

getMovieGenres();

getMoviesByGenres(99, recommendedDocumentaryContainer);
getMoviesByGenres(80, recommendedCrimeContainer);