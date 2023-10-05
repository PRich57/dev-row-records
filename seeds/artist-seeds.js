const { Artist } = require('../models');

const categoryData = [
  {
    name: 'PinkFloyd',
    image: '../Assets/pink-floyd.avif'
  },
  {
    name: 'Doja Cat',
    image: '../Assets/single-artist.jpg'
  },
  {
    name: 'Led Zep',
    image: '../Assets/led_zeppelin.png'
  },
  {
    name: 'Gorillaz',
    image: '../Assets/gorillaz.jpg'
  },
  {
    name: 'George Strait',
    image: '../Assets/george-strait.jpg'
  },
];

const seedCategories = () => Artist.bulkCreate(categoryData);

module.exports = seedCategories;