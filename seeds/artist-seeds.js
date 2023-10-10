const { Artist } = require("../models");

const artistData = [
  {
    artist_name: "Mateo And The Black Crows",
    filename: "../Assets/Artist_Photos/black_crows.avif"
  },
  {
    artist_name: "DJ Nicky",
    filename: "../Assets/Artist_Photos/dj_nicky.avif"
  },
  {
    artist_name: "Liam the Kid",
    filename: "../Assets/Artist_Photos/liam_the_kid.avif"
  },
  {
    artist_name: "The Sound of Kellogg",
    filename: "../Assets/Artist_Photos/sound_of_kellogg.avif"
  },
  {
    artist_name: "Passion Pete",
    filename: "../Assets/Artist_Photos/passion_pete.avif"  
  },
  {
    artist_name: "Cholo Goth",
    filename: "../Assets/Artist_Photos/CholoGoth.png"
  },

];

const seedArtist = () => Artist.bulkCreate(artistData);

module.exports = seedArtist;

// DONE //
