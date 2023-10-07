particlesJS("particles-js", {
  particles: {
    number: { value: 100, density: { enable: true, value_area: 800 } },
    color: { value: "#555555" },
    shape: {
      type: "star",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 11 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.1763753266952075,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 4, size_min: 0.3, sync: false },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.37680183430339786,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "top-left",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: true, rotateX: 600, rotateY: 600 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "repulse" },
      resize: true,
    },
    modes: {
      grab: { distance: 300, line_linked: { opacity: 1 } },
      bubble: { distance: 1200, size: 0, duration: 2, opacity: 0, speed: 3 },
      repulse: { distance: 64.96248416539453, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
