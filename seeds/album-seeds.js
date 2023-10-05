const { Album } = require("../models");

const albumData = [
  // A Place For Owls Albums //
  {
    artist_id: 1,
    album_name: "A Place For Owls (Album - 2022)",
  },
  {
    artist_id: 1,
    album_name: "Celebration Guns / A Place For Owls (Split EP - 2023)",
  },
  {
    artist_id: 1,
    album_name: "You Are Still in Every Song I Sing (EP - 2020)",
  },
  // Floral Patterns Albums //
  {
    artist_id: 3,
    album_name: "Split (Split EP - 2020)",
  },
  {
    artist_id: 3,
    album_name: "Split (Split EP - 2020)",
  },
  // Creek Albums //
  {
    artist_id: 2,
    album_name: "Thirteen Hundred (EP - 2017)",
  },
  {
    artist_id: 2,
    album_name: "Lucky Seven (EP - 2018)",
  },
  {
    artist_id: 2,
    album_name: "Never Better (2020)",
  },
  {
    artist_id: 2,
    album_name: "Millstone (Single - 2020)",
  },
  {
    artist_id: 2,
    album_name: "Hindsight (Single - 2022)",
  },
  {
    artist_id: 2,
    album_name: "Elegy (Single - 2023)",
  },

  // ... Add more Albums as needed
];

const seedAlbum = async () => {
  await Album.bulkCreate(albumData);
};

module.exports = seedAlbum;

// Done //
