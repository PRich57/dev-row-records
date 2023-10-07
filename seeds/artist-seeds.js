const { Artist } = require("../models");

const artistData = [
  {
    artist_name: "Closed Tear",
    filename: "../Assets/ClosedTear.jpg"
  },
  {
    artist_name: "Dave",
    filename: "../Assets/Dave.JPG"
  },
  {
    artist_name: "Cholo Goth",
    filename: "../Assets/CholoGoth.png"
  },
  {
    artist_name: "Demon Compass",
    filename: "../Assets/DemonCompass.png"
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
