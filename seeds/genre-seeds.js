const { Genre } = require("../models");

const GenreData = [
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
  // I think this is every genre but if you think of more go ahead and add them
];

const seedGenre = async () => {
  await Genre.bulkCreate(GenreData);
};

module.exports = seedGenre;