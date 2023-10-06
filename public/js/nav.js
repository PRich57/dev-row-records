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

// PARTICLES
particlesJS("particles-js", {
  particles: {
    number: { value: 50, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});

// update = function () {
 
//   requestAnimationFrame(update);
// };
// requestAnimationFrame(update);

