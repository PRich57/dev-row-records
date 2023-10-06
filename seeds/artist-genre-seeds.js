const { ArtistGenre } = require("../models");

const ArtistGenre = [
  {
    genre_id: 1,
    artist_id: 1,
  },
  // add more as needed //
];

const seedArtistGenre = async () => {
  await ArtistGenre.bulkCreate(seedArtistGenre);
};

module.exports = seedArtistGenre;