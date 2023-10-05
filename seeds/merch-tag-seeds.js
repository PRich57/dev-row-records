const { MerchTag } = require("../models");

const merchTagData = [
  {
    merch_id: 1,
    tag_id: 1,
  },
];

const seedMerchTag = async () => {
  await MerchTag.bulkCreate(merchTagData);
};

module.exports = seedMerchTag;
