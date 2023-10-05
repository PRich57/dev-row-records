const { Tag } = require("../models");

const tagData = [
  {
    tag_name: "Rock",
  },
  {
    tag_name: "Pop",
  },
  // ... Add more Tags as needed
];

const seedTag = async () => {
  await Tag.bulkCreate(tagData);
};

module.exports = seedTag;

// DONE //
