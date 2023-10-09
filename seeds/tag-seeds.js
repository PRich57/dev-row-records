const { Tag } = require("../models");

const tagData = [
  {
    tag_name: "T-Shirt",
  },
  {
    tag_name: "Hoodie",
  },
  {
    tag_name: "Hat",
  },
  {
    tag_name: "Music Mediums",
  },
  {
    tag_name: "Sticker",
  },
  // ... Add more Tags as needed
];

const seedTag = async () => {
  await Tag.bulkCreate(tagData);
};

module.exports = seedTag;

// DONE //
