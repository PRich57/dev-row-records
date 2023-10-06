const { AlbumGenre } = require("../models");

const AlbumGenreData = [
  {
    genre_id: 1,
    album_id: 1,
  },
  // add more as needed //
];

const seedAlbumGenre = async () => {
  await AlbumGenre.bulkCreate(AlbumGenreData);
};

module.exports = seedAlbumGenre;