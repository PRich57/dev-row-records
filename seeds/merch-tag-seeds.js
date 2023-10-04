const { MerchTag } = require("../models");

const merchTagData = [
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
];

const seedMerchTag = async () => {
  await Category.bulkCreate(merchTagData);
};

module.exports = seedMerchTag;
