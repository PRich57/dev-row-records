//VARIABLES
//header
var allArtistsAnchor = $("#get-all-artists");
var allArtistsLi = $("#get-all-artists-li");
var getHomeLi = $("#get-home-li");
var allMusicLi = $("#get-all-music-li");
var getStoreLi = $("#header-get-store-li");
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
    console.log("event listener")
    const response = await fetch(`/merch/?tag=${sortidLi}`, {
      method: "GET",
      headers: {"Content-Type": "application/json"}
    });
    if(response.ok) {
      window.location.replace(`/merch/?tag=${sortidLi}`)
    }

  }
  catch (err) {
    console.log(err)
  }
}
//EVENT LISTENERS
//header event listeners
allArtistsLi.on("click", "#get-all-artists", getAllArtists);
getHomeLi.on("click", "#get-home", getHome);
allMusicLi.on("click", "#get-all-music", getAllMusic);
getStoreLi.on("click", "#header-get-store", getStore);

//footer event listeners
footerHomeLi.on("click", "#footer-get-home", getHome);
footerAllArtistsLi.on("click", "#footer-get-artists", getAllArtists);
footerAllAlbumsLi.on("click", "#footer-get-albums", getAllMusic);
footerStoreLi.on("click", "#footer-get-store", getStore);

//get single artist from All Artist page - event listener
$(".cardEvent").click(function () {
  let id = $(this).attr("id");
  getSingleArtist(id);
});

//sorting list event listener
$(".sort-list-link").click(function () {
  let sortidLi = $(this).attr("id");
  sortMerch(sortidLi);
})



