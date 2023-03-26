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
    moviePoster.setAttribute("src", `https://image.tmdb.org/t/p/w780${movie.poster_path}`);
    moviePoster.setAttribute("alt", movie.title);
    moviePoster.classList.add("movie-image");

    moviePoster.addEventListener('click', () => {
      location.hash = '#movie=' + movie.id;
    });

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

  movieGenresSection.innerHTML = "";

  genres.forEach(genre => {

    const genreItem = document.createElement("div");
    genreItem.classList.add("genre-item")

    const genreTitle = document.createElement("p");
    genreTitle.innerHTML = `${genre.name}`

    genreItem.append(genreTitle);
    movieGenresSection.appendChild(genreItem);

    genreItem.addEventListener('click', () => {
      location.hash = '#genre=' + genre.id;
    })
  })
};

async function getMoviesByGenres(id, container) {
  const { data } = await api('/discover/movie', {params: {
    with_genres: id,
  }});

  const movieList = data.results;

  container.innerHTML = "";
  
  getMoviePosters(movieList, container)

};

async function getSimilarMovies(id) {

  const { data } = await api(`/movie/${id}/similar`, {params: {
    movie_id: id,
  }});

  const movies = data.results;

  similarMoviesContainer.innerHTML = "";

  getMoviePosters(movies, similarMoviesContainer);
};

async function getMovieById(id) {
  const { data } = await api(`/movie/${id}`);

  const movie = data;

  const BackdropImgUrl = 'https://image.tmdb.org/t/p/w780' + movie.poster_path;

  movieDetailTitle.innerHTML = `${movie.title}`;
  movieDetailRating.innerHTML = `<i class="fa-solid fa-star"></i> ${movie.vote_average}`;
  movieDetailDescription.innerHTML = `${movie.overview}`;


  const movieGenres = movie.genres;

  movieGenresContainer.innerHTML = "";

  movieGenres.forEach(movieGenre => {
    const movieRelatedCategories = document.createElement("p");
    movieRelatedCategories.innerHTML = movieGenre.name;

    movieGenresContainer.appendChild(movieRelatedCategories);
  })


  movieDetailBackPoster.style.background = `url(${BackdropImgUrl})`;

  getSimilarMovies(id);
}

async function searchMovie(query) {

  const { data } = await api('/search/movie', {params: {
    query: query,
  }})

  const foundMovies = data.results;

  searchMoviesContainer.innerHTML = "",

  getMoviePosters(foundMovies, searchMoviesContainer);
}


getTrends();
getBannerRecommendation();
getMoviesByGenres(99, recommendedDocumentaryContainer);
getMoviesByGenres(80, recommendedCrimeContainer);