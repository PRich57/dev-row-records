const { Genre } = require("../models");

const Genre = [
  {
    genre_name: "rock",
  },
  {
    genre_name: "punk",
  },
  {
    genre_name: "hip-hop",
  },
  {
    genre_name: "metal",
  },
  {
    genre_name: "yodeling",
  },
  {
    genre_name: "polka",
  },
  {
    genre_name: "mongolian throat singing"
  }
  // are there more?
];

const seedGenre = async () => {
  await Genre.bulkCreate(seedGenre);
};

module.exports = seedGenre;