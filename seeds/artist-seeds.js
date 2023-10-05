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
];

const seedArtist = () => Artist.bulkCreate(artistData);

module.exports = seedArtist;

// DONE //
