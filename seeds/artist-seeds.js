const { Artist } = require("../models");

const artistData = [
  {
    artist_name: "Mateo & The Black Crows",
    filename: "../Assets/Artist_Photos/black_crows.avif"
  },
  {
    artist_name: "DJ Nicky",
    filename: "../Assets/Artist_Photos/dj_nicky.avif"
  },
  {
    artist_name: "Liam the Boy",
    filename: "../Assets/Artist_Photos/liam_the_boy.avif"
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
  // {
  //   artist_name: "Closed Tear",
  //   filename: "../Assets/Artist_Photos/ClosedTear.jpg"
  // },
  // {
  //   artist_name: "Dave",
  //   filename: "../Assets/Artist_Photos/Dave.JPG"
  // },
  //  {
  //   artist_name: "Demon Compass",
  //   filename: "../Assets/Artist_Photos/DemonCompass.png"
  // },
  // {
  //   artist_name: "Provoker",
  //   filename: "../Assets/Artist_Photos/Provoker.JPG"
  // },
  
];

const seedArtist = () => Artist.bulkCreate(artistData);

module.exports = seedArtist;

// DONE //
