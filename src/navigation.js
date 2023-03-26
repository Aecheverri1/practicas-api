window.addEventListener('DOMContentLoaded', navigator, false)
window.addEventListener('hashchange', navigator, false)

homeBtn.addEventListener("click", () => { location.hash = '#home'});

genresBtn.addEventListener("click", () => { location.hash = '#genres'});

favoriteBtn.addEventListener("click", () => { location.hash = '#favorite'});

arrowBackBtn.addEventListener("click", () => { location.hash = '#home'});

profileBtn.addEventListener("click", () => { location.hash = '#profile'});

favoriteBtn.addEventListener("click", () => { location.hash = '#favorites'});

searchBarButton.addEventListener("click",() => {

    location.hash = '#search='+ searchBarInput.value;
    const [_, query] = location.hash.split('=');

    searchMovie(query);
    
});

function navigator() {
    location
    
    if(location.hash.startsWith('#genres')) {
        console.log('This is Genres section');

        genresPage();
    }

    else if(location.hash.startsWith('#genre=')) {
        console.log('This is Genre section');

        moviesByGenres();

        const [_, movieId] = location.hash.split('=');
        const movieDetailId = movieId;

        getMoviesByGenres(movieDetailId, moviesByGenresContainer);
        getMovieById(movieDetailId);

    }

    else if(location.hash.startsWith('#favorites')) {
        console.log('This is Favorite section');

        favoritesPage();
    }

    else if(location.hash.startsWith('#search=')) {
        console.log('This is Search section');

        searchPage();
    }
    
    else if(location.hash.startsWith('#movie=')) {
        console.log('This is Movie Detail section');
        
        const [_, movieId] = location.hash.split('=');
        const movieDetailId = movieId;

        getMovieById(movieDetailId);
        movieDetail();
    }

    else if(location.hash.startsWith('#profile')) {
        console.log('This is Profile section');

        profilePage()
    }

    else {
        homePage()
    }


    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function homePage() {
    searchBarSection.classList.remove('inactive');
    arrowBackBtn.classList.add('inactive');
    trendsSection.classList.remove('inactive');
    recommendedMovieSection.classList.remove('inactive');
    recommendedCategoriesSection.classList.remove('inactive');
    movieGenresSection.classList.add('inactive');
    movieDetailSection.classList.add('inactive');
    movieDetailBackPoster.classList.add('inactive');
    moviesByGenresSection.classList.add('inactive');
    searchMoviesContainer.classList.add('inactive');
    userProfileSection.classList.add('inactive');
    favoritesSection.classList.add('inactive');
};

function genresPage() {
    arrowBackBtn.classList.add('inactive');
    searchBarSection.classList.add('inactive');
    trendsSection.classList.add('inactive');
    recommendedMovieSection.classList.add('inactive');
    recommendedCategoriesSection.classList.add('inactive');
    movieGenresSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');
    movieDetailBackPoster.classList.add('inactive');
    moviesByGenresSection.classList.add('inactive');
    searchMoviesContainer.classList.add('inactive');
    userProfileSection.classList.add('inactive');
    favoritesSection.classList.add('inactive');

    getMovieGenres();
};

function searchPage() {
    arrowBackBtn.classList.add('inactive');
    searchBarSection.classList.remove('inactive');
    trendsSection.classList.add('inactive');
    recommendedMovieSection.classList.add('inactive');
    recommendedCategoriesSection.classList.add('inactive');
    movieGenresSection.classList.add('inactive');
    movieDetailSection.classList.add('inactive');
    movieDetailBackPoster.classList.add('inactive');
    moviesByGenresSection.classList.add('inactive');
    searchMoviesContainer.classList.remove('inactive');
    userProfileSection.classList.add('inactive');
    favoritesSection.classList.add('inactive');
};

function movieDetail() {
    arrowBackBtn.classList.remove('inactive');
    searchBarSection.classList.add('inactive');
    trendsSection.classList.add('inactive');
    recommendedMovieSection.classList.add('inactive');
    recommendedCategoriesSection.classList.add('inactive');
    movieGenresSection.classList.add('inactive');
    movieDetailSection.classList.remove('inactive');
    movieDetailBackPoster.classList.remove('inactive');
    moviesByGenresSection.classList.add('inactive');
    searchMoviesContainer.classList.add('inactive');
    userProfileSection.classList.add('inactive');
    favoritesSection.classList.add('inactive');
}

function moviesByGenres() {

    arrowBackBtn.classList.add('inactive');
    searchBarSection.classList.add('inactive');
    trendsSection.classList.add('inactive');
    recommendedMovieSection.classList.add('inactive');
    recommendedCategoriesSection.classList.add('inactive');
    movieGenresSection.classList.add('inactive');
    movieDetailSection.classList.add('inactive');
    movieDetailBackPoster.classList.add('inactive');
    moviesByGenresSection.classList.remove('inactive');
    searchMoviesContainer.classList.add('inactive');
    userProfileSection.classList.add('inactive');
    favoritesSection.classList.add('inactive');
}

function profilePage() {
    arrowBackBtn.classList.add('inactive');
    searchBarSection.classList.add('inactive');
    trendsSection.classList.add('inactive');
    recommendedMovieSection.classList.add('inactive');
    recommendedCategoriesSection.classList.add('inactive');
    movieGenresSection.classList.add('inactive');
    movieDetailSection.classList.add('inactive');
    movieDetailBackPoster.classList.add('inactive');
    moviesByGenresSection.classList.add('inactive');
    searchMoviesContainer.classList.add('inactive');
    userProfileSection.classList.remove('inactive');
    favoritesSection.classList.add('inactive');
}

function favoritesPage() {
    arrowBackBtn.classList.add('inactive');
    searchBarSection.classList.add('inactive');
    trendsSection.classList.add('inactive');
    recommendedMovieSection.classList.add('inactive');
    recommendedCategoriesSection.classList.add('inactive');
    movieGenresSection.classList.add('inactive');
    movieDetailSection.classList.add('inactive');
    movieDetailBackPoster.classList.add('inactive');
    moviesByGenresSection.classList.add('inactive');
    searchMoviesContainer.classList.add('inactive');
    userProfileSection.classList.add('inactive');
    favoritesSection.classList.remove('inactive');
}