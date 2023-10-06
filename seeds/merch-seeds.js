const { Merch } = require("../models");

const merchData = [
  {
    merch_name: "Example Merch 1",
    price: 10.99,
    filename: '../Assets/DH.png',
    category_id: 1,
    artist_id: 1,
  },
  // ... Add more Merchdata as needed
];

const seedMerch = async () => {
  await Merch.bulkCreate(merchData);
};

module.exports = seedMerch;

// DONE //
