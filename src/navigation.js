window.addEventListener('DOMContentLoaded', navigator, false)
window.addEventListener('hashchange', navigator, false)

homeBtn.addEventListener("click", () => { location.hash = '#home'});

genresBtn.addEventListener("click", () => { location.hash = '#genres'});

arrowBackBtn.addEventListener("click", () => { location.hash = '#home'});

profileBtn.addEventListener("click", () => { location.hash = '#profile'});

searchBtn.addEventListener("click", () => { location.hash = '#search'});

searchBarButton.addEventListener("click",() => {

    location.hash = '#foundmovie='+ searchBarInput.value;
    const [_, query] = location.hash.split('=');

    searchMovie(query);
    
});

function navigator() {
    location
    
    if(location.hash.startsWith('#genres')) {
        console.log('This is Genres List section');

        genresPage();
    }

    else if(location.hash.startsWith('#genre=')) {
        console.log('This is the Specific Genre section');

        moviesByGenres();

        const [_, movieId] = location.hash.split('=');
        const movieDetailId = movieId;

        getMoviesByGenres(movieDetailId, moviesByGenresContainer);
        getMovieById(movieDetailId);

    }

    else if(location.hash.startsWith('#search')) {
        console.log('This is Search and Favorites section');

        searchAndFavoritesPage();
    }

    else if(location.hash.startsWith('#foundmovie=')) {
        console.log('This is Search By Query section');

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

        console.log('This is Home section');
        homePage()
    }


    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function homePage() {
    headerSection.classList.remove("inactive");
    searchBarSection.classList.add('inactive');
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
    loginHeaderSection.classList.remove('inactive');
};

function genresPage() {
    headerSection.classList.remove("inactive");
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
    loginHeaderSection.classList.remove('inactive');

    getMovieGenres();
};

function searchPage() {
    headerSection.classList.remove("inactive");
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
    loginHeaderSection.classList.remove('inactive');
};

function movieDetail() {
    headerSection.classList.add("inactive");
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
    loginHeaderSection.classList.add('inactive');
}

function moviesByGenres() {

    headerSection.classList.remove("inactive");
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
    loginHeaderSection.classList.remove('inactive');
}

function profilePage() {
    headerSection.classList.remove("inactive");
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
    loginHeaderSection.classList.add('inactive');
}

function searchAndFavoritesPage() {

    headerSection.classList.remove("inactive");
    arrowBackBtn.classList.add('inactive');
    searchBarSection.classList.remove('inactive');
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
    loginHeaderSection.classList.remove('inactive');
}