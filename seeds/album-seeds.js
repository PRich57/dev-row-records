const { Album } = require("../models");

const albumData = [
  {
    artist_id: 2,
    name: "Never Better (2020)",
  },
  {
    artist_id: 1,
    name: "A Place For Owls (2022)",
  },
  // ... Add more Albums as needed
];

const seedAlbum = async () => {
  await Album.bulkCreate(albumData);
};

module.exports = seedAlbum;
