var allArtistsAnchor = $("#get-all-artists");
var allArtistsLi = $("#get-all-artists-li");
var getHomeLi = $("#get-home-li");
var allMusicLi = $("#get-all-music-li");

//FUNCTIONS
//EVENT LISTENERS

const getHome = async (event) => {
    try {
        event.preventDefault();
        event.stopPropagation();
        console.log("hello")
        const response = await fetch('/', {
            method: 'GET',
            headers: {"Content-Type": "application/json"}
        });
        if(response.ok){
            window.location.replace('/')
        }
    } catch (err){
        console.log(err);
    }
}

const getAllArtists = async (event) => {
    try {
        event.preventDefault();
        event.stopPropagation();
        console.log("hello")
        const response = await fetch('/artists', {
            method: 'GET',
            headers: {"Content-Type": "application/json"}
        });
        if(response.ok){
            window.location.replace('/artists')
        }
    } catch (err){
        console.log(err);
    }
}

const getAllMusic = async (event) => {
    try {
        event.preventDefault();
        event.stopPropagation();
        console.log("hello")
        const response = await fetch('/music', {
            method: 'GET',
            headers: {"Content-Type": "application/json"}
        });
        if(response.ok){
            window.location.replace('/music')
        }
    } catch (err){
        console.log(err);
    }
}

const getAllMerch = async (event) => {
    try {
        event.preventDefault();
        event.stopPropagation();
        console.log("hello")
        const response = await fetch('/merch', {
            method: 'GET',
            headers: {"Content-Type": "application/json"}
        });
        if(response.ok){
            window.location.replace('/merch')
        }
    } catch (err){
        console.log(err);
    }
}
//get all artists
allArtistsLi.on('click', '#get-all-artists', getAllArtists);
getHomeLi.on('click', '#get-home', getHome);
allMusicLi.on('click', "#get-all-music", getAllMusic)
