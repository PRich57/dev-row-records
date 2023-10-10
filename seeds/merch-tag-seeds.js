const { MerchTag } = require("../models");
// built seed data in Merch-Seeds For Loop
let {seedMerch, merchTagData} = require("./merch-seeds")

const seedMerchTag = async () => {
  await MerchTag.bulkCreate(merchTagData);
};

module.exports = seedMerchTag;
// done //