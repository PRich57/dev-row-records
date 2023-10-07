const { Artist } = require("../models");

const artistData = [
  {
    artist_name: "A Place For Owls",
    filename: "../Assets/gorillaz.jpg"
  },
  {
    artist_name: "Creek",
    filename: "../Assets/single-artist.jpg"
  },
  {
    artist_name: "Floral Patterns",
    filename: "../Assets/pink-floyd.avif"
  },
  {
    artist_name: "Provoker",
    filename: "../Assets/Provoker.JPG"
  },
  {
    artist_name: "Dave Parley",
    filename: "../Assets/Dave.JPG"
  }
];

const seedArtist = () => Artist.bulkCreate(artistData);

module.exports = seedArtist;

// DONE //
