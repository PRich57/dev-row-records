const { Artist } = require("../models");

const artistData = [
  {
    artist_name: "Creek",
  },
  {
    artist_name: "A Place For Owls",
  },
  {
    artist_name: "Floral Patterns",
  },
];

const seedArtist = () => Artist.bulkCreate(artistData);

module.exports = seedArtist;

// DONE //
