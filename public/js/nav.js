var allArtistsAnchor = $("#get-all-artists");
var allArtistsLi = $("#get-all-artists-li");

//FUNCTIONS
//EVENT LISTENERS
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

const getAllAlbums = async (event) => {
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
