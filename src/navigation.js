window.addEventListener('DOMContentLoaded', navigator, false)
window.addEventListener('hashchange', navigator, false)

homeBtn.addEventListener("click", () => { location.hash = '#home'});

genresBtn.addEventListener("click", () => { location.hash = '#genres'});

discoverBtn.addEventListener("click", () => { location.hash = '#discover'});

function navigator() {
    location.hash

    if(location.hash.startsWith('#home')) {
        console.log('This is Home section');

        homePage();

    }
    else if(location.hash.startsWith('#genres')) {
        console.log('This is Discover section');

        genresPage();
    }

    else if(location.hash.startsWith('#genre=')) {
        console.log('This is Genre section');

    }

    else if(location.hash.startsWith('#discover')) {
        console.log('This is Search section');

        discoverPage();
    }

    else if(location.hash.startsWith('#search=')) {
        console.log('This is Category section');

    }

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function homePage() {
    searchBarSection.classList.remove('inactive');
    trendsSection.classList.remove('inactive');
    recommendedMovieSection.classList.remove('inactive');
    recommendedCategoriesSection.classList.remove('inactive');
    movieGenresSection.classList.add('inactive');
};

function genresPage() {
    searchBarSection.classList.add('inactive');
    trendsSection.classList.add('inactive');
    recommendedMovieSection.classList.add('inactive');
    recommendedCategoriesSection.classList.add('inactive');
    movieGenresSection.classList.remove('inactive');

    getMovieGenres();
};

function discoverPage() {
    searchBarSection.classList.remove('inactive');
    trendsSection.classList.add('inactive');
    recommendedMovieSection.classList.add('inactive');
    recommendedCategoriesSection.classList.add('inactive');
    movieGenresSection.classList.add('inactive');
};