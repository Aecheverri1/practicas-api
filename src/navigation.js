window.addEventListener('DOMContentLoaded', navigator, false)
window.addEventListener('hashchange', navigator, false)

function navigator() {
    location.hash

    if(location.hash.startsWith('#home')) {
        console.log('This is Home section');

    }
    else if(location.hash.startsWith('#genres')) {
        console.log('This is Discover section');

    }

    else if(location.hash.startsWith('#genre=')) {
        console.log('This is Genre section');

    }

    else if(location.hash.startsWith('#discover')) {
        console.log('This is Search section');

    }

    else if(location.hash.startsWith('#search=')) {
        console.log('This is Category section');

    }
}