const { AlbumGenre } = require("../models");

const AlbumGenre = [
  {
    genre_id: 1,
    album_id: 1,
  },
  // add more as needed //
];

const seedAlbumGenre = async () => {
  await AlbumGenre.bulkCreate(seedAlbumGenre);
};

module.exports = seedAlbumGenre;