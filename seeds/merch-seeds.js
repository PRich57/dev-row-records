const { Merch } = require('../models');

const merchData = [
  {
    merch_name: 'TEST',
    price: 29.99,
    filename: 'download.jpg',
  },
];

const seedMerch = () => Merch.bulkCreate(merchData);

module.exports = seedMerch;