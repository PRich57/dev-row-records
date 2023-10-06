const { Category } = require("../models");

const categoryData = [
  {
    category_name: "Merch",
  },
  {
    category_name: "Songs",
  },
  {
    category_name: "Albums",
  },
  {
    category_name: "Artists",
  },
  // add more categories as needed //
];

const seedCategory = async () => {
  await Category.bulkCreate(categoryData);
};

module.exports = seedCategory;

// DONE //
