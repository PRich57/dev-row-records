const { Artist } = require("../models");

const artistData = [
  {
    name: "Creek",
  },
  {
    name: "A Place For Owls",
  },
  {
    name: "Floral Patterns",
  },
];

const seedArtist = () => Artist.bulkCreate(artistData);

module.exports = seedArtist;

// DONE //
