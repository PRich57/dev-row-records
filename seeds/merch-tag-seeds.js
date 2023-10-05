const { MerchTag } = require("../models");

const merchTagData = [
  {
    merch_id: 1,
    tag_id: 4,
  },
  {
    merch_id: 1,
    tag_id: 3,
  },
  {
    merch_id: 1,
    tag_id: 2,
  },
  {
    merch_id: 2,
    tag_id: 5,
  },
  {
    merch_id: 3,
    tag_id: 1,
  },
  {
    merch_id: 3,
    tag_id: 2
  },
];

const seedMerchTag = async () => {
  await MerchTag.bulkCreate(merchTagData);
};

module.exports = seedMerchTag;
