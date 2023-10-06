const { ArtistGenre } = require("../models");

const ArtistGenreData = [
  {
    genre_id: 1,
    artist_id: 1,
  },
  // add more as needed //
];

const seedArtistGenre = async () => {
  await ArtistGenre.bulkCreate(ArtistGenreData);
};

module.exports = seedArtistGenre;