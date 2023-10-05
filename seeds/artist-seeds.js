const { Artist } = require('../models');

const categoryData = [
  {
    artist_name: 'PinkFloyd',
    filename: '../Assets/pink-floyd.avif'
  },
  {
    artist_name: 'Doja Cat',
    filename: '../Assets/single-artist.jpg'
  },
  {
    artist_name: 'Led Zep',
    filename: '../Assets/led_zeppelin.png'
  },
  {
    artist_name: 'Gorillaz',
    filename: '../Assets/gorillaz.jpg'
  },
  {
    artist_name: 'George Strait',
    filename: '../Assets/george-strait.jpg'
  },
];

const seedCategories = () => Artist.bulkCreate(categoryData);

module.exports = seedCategories;