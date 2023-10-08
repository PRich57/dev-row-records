//VARIABLES
//header
var allArtistsAnchor = $("#get-all-artists");
var allArtistsLi = $("#get-all-artists-li");
var getHomeLi = $("#get-home-li");
var allMusicLi = $("#get-all-music-li");
var getStoreLi = $("#header-get-store-li");
var getFavoriteLi = $("#header-get-favorite-li");

//footer
var footerHomeLi = $("#footer-get-home-li");
var footerAllArtistsLi = $("#footer-get-artists-li");
var footerAllAlbumsLi = $("#footer-get-albums-li");
var footerStoreLi = $("#footer-get-store-li");


//FUNCTIONS
//go home page (controllers/home-routes.js)
const getHome = async (event) => {
  try {
    event.preventDefault();
    event.stopPropagation();
    console.log("hello");
    const response = await fetch("/", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    if (response.ok) {
      window.location.replace("/");
    }
  } catch (err) {
    console.log(err);
  }
};

//go to artists page (controllers/home-routes.js)
const getAllArtists = async (event) => {
  try {
    event.preventDefault();
    event.stopPropagation();
    console.log("hello");
    const response = await fetch("/artists", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      window.location.replace("/artists");
    }
  } catch (err) {
    console.log(err);
  }
};

//go to music/albums page (controllers/home-routes.js)
const getAllMusic = async (event) => {
  try {
    event.preventDefault();
    event.stopPropagation();
    console.log("hello");
    const response = await fetch("/albums", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      window.location.replace("/albums");
    }
  } catch (err) {
    console.log(err);
  }
};

//go to store/merch page (controllers/home-routes.js)
const getStore = async (event) => {
  try {
    event.preventDefault();
    event.stopPropagation();
    console.log("hello");
    const response = await fetch("/merch", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      window.location.replace("/merch");
    }
  } catch (err) {
    console.log(err);
  }
};

const getSingleArtist = async (event) => {
  try {
    // event.preventDefault();
    // event.stopPropagation();

    const response = await fetch(`/artists/${event}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    console.log(event);
    if (response.ok) {
      window.location.replace(`/artists/${event}`);
      console.log(id);
    }
  } catch (err) {
    console.log(err);
  }
};

const sortMerch = async (sortidLi) => {
  try {
    console.log("event listener");
    const response = await fetch(`/merch/?tag=${sortidLi}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      window.location.replace(`/merch/?tag=${sortidLi}`);
    }
  } catch (err) {
    console.log(err);
  }
};

// go to favorites page (controllers/home-routes.js)
const getFavorite = async (event) => {
  try {
    event.preventDefault();
    event.stopPropagation();
    console.log("hello");
    const response = await fetch("/favorites", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      window.location.replace("/favorites");
    }
  } catch (err) {
    console.log(err);
  }
};

//function: adding to favorites from star button
const addToFavorite = async (buttonId, dataType) => {
  try {
    let postData = {
      album_id: null,
      artist_id: null,
      merch_id: null
    }
    switch(dataType) {
      case "album_id":
        postData.album_id = buttonId;
        break;
      case "artist_id":
        postData.artist_id = buttonId;
        break;
      case "merch_id":
        postData.merch_id = buttonId;
        break;
    }
    const response = await fetch('/api/favorite/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData)
    })
    if (response.ok){
      console.log(`This button works: card id - ${buttonId}`)
      console.log(`the type is ${dataType}`)
      return true
    } else {
      return false
    }

  } catch (err) {
    console.error(err);
  }
}

//function delete from favorites from star button
//buttonId is the id of the model we want
//dataType = "album_id" or "artist_id" or "merch_id"
const deleteFromFavorite = async (buttonId, dataType) => {
  try {
    console.log(buttonId);
    console.log(dataType)
    const response = await fetch(`/api/favorite/${buttonId}?type=${dataType}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
  
}
//EVENT LISTENERS
//header event listeners
allArtistsLi.on("click", "#get-all-artists", getAllArtists);
getHomeLi.on("click", "#get-home", getHome);
allMusicLi.on("click", "#get-all-music", getAllMusic);
getStoreLi.on("click", "#header-get-store", getStore);
getFavoriteLi.on("click", "#header-get-favorite", getFavorite);

//footer event listeners
footerHomeLi.on("click", "#footer-get-home", getHome);
footerAllArtistsLi.on("click", "#footer-get-artists", getAllArtists);
footerAllAlbumsLi.on("click", "#footer-get-albums", getAllMusic);
footerStoreLi.on("click", "#footer-get-store", getStore);

//get single artist from All Artist page - event listener
$(".get-single-artist").click(function () {
  let id = $(this).attr("id");
  getSingleArtist(id);
});

//sorting list event listener
$(".sort-list-link").click(function () {
  let sortidLi = $(this).attr("id");
  sortMerch(sortidLi);
});

//favorite add event listener
$(".card-favorite-button").click(async function () {
  let buttonId = $(this).attr("id");
  console.log(buttonId)
  let dataType = $(this).attr("data-type");
  if ($(this).attr("fill") === "white"){
    const addFavSuccess = await addToFavorite(buttonId, dataType)
    console.log(`line 225 addFavSuccess in nav.js: ${addFavSuccess}`)
    if(addFavSuccess){
      $(this).attr("fill", "yellow");
    }else {
      console.error("add favorite failed")
    }
  } else {
    const deleteFavSuccess = await deleteFromFavorite(buttonId, dataType);
    if(deleteFavSuccess){
      $(this).attr("fill", "white");
    } else {
      console.error("delete favorite failed")
    }

  }
})

