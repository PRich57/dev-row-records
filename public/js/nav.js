//VARIABLES
//header
var allArtistsAnchor = $("#get-all-artists");
var allArtistsLi = $("#get-all-artists-li");
var getHomeLi = $("#get-home-li");
var allMusicLi = $("#get-all-music-li");
var getStoreLi = $("#header-get-store-li")
//footer
var footerHomeLi = $("footer-get-home");
var footerAllArtistsLi = $("#footer-get-artists-li");
var footerAllAlbumsLi = $("#footer-get-albums-li");
var footerStoreLi = $("#footer-get-store-li");

//FUNCTIONS
//go home page (controllers/home-routes.js)
const getHome = async (event) => {
    try {
        event.preventDefault();
        event.stopPropagation();
        console.log("hello")
        const response = await fetch('/', {
            method: 'GET',
            headers: {"Content-Type": "application/json"}
        });
        console.log(response)
        // if(response.ok){
        //     window.location.replace('/')
        // }
    } catch (err){
        console.log(err);
    }
}

//go to artists page (controllers/home-routes.js)
const getAllArtists = async (event) => {
    try {
        event.preventDefault();
        event.stopPropagation();
        console.log("hello")
        const response = await fetch('/artists', {
            method: 'GET',
            headers: {"Content-Type": "application/json"}
        });
        // console.log(response)
        if(response.ok){
            window.location.replace('/artists')
        }
    } catch (err){
        console.log(err);
    }
}

//go to music/albums page (controllers/home-routes.js)
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

//go to store/merch page (controllers/home-routes.js)
const getStore = async (event) => {
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

const getSingleArtist = async (id) => {
    try {
        // event.preventDefault();
        // event.stopPropagation();
        console.log(id)
        const response = await fetch(`/artists/${id}`, {
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

//EVENT LISTENERS
//header event listeners
allArtistsLi.on('click', '#get-all-artists', getAllArtists);
getHomeLi.on('click', '#get-home', getHome);
allMusicLi.on('click', "#get-all-music", getAllMusic)
getStoreLi.on('click',"#header-get-store", getStore)

//footer event listeners
footerHomeLi.on('click','#footer-get-home', getHome);
footerAllArtistsLi.on('click','#footer-get-artists', getAllArtists);
footerAllAlbumsLi.on('click','#footer-get-albums', getAllMusic);
footerStoreLi.on('click','#footer-get-store', getStore);

//get single artist from All Artist page - event listener
$('.cardEvent').click(function () {
    let id = $(this).attr('id');
    getSingleArtist(id)
    
})

const jsonfile = {
    "particles": {
      "number": {
        "value": 313,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#390c0c"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 4,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.08017060304327614,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 0,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 165.65433462175608,
          "size_min": 0,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }

// window.onload = function() {
//     require("particles.js");
  
//     particlesJS.load('particles-js', jsonfile, function() {
//     console.log('callback - particles.js config loaded');
//     });
//   };
particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;