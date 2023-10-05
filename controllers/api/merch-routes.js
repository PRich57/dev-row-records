const router = require('express').Router();
const { Merch, MerchTag, Tag } = require("../../models");
const { findArtistIDByName } = require("./helper");

router.post("/", async (req, res) => {
  const { merch_name, price, category_id, artist_name, tag } = req.body;
  try {
    const artist_id = await findArtistIDByName(artist_name);
    const allTagIDs = [];
    for (tagName of tag) {
      const dataTag = await Tag.findOne({ where: { tag_name: tagName } });
      if (!tagName) {
        console.warn(`Could not retrieve tag data for ${tagName}`);
      } else {
        allTagIDs.push(dataTag.get({ plain: true }));
      }
    }
    const dataMerch = await Merch.create({ merch_name, price, artist_id, category_id });
    const merch = dataMerch.get({ plain: true });
    allTagIDs.forEach(async (value) => {
      const through = MerchTag.create({
        merch_id: merch.id,
        tag_id: value,
      });
      if (!through) {
        console.warn("Failed to create MerchTag through-table row", merch.id, value);
      }
    });
    res.status(200).json({
      message: "Successfully created merch item:",
      merch,
    });
  } catch (err) {
    console.warn(err);
    res.status(500).json(err);
  }
});


/*
router.post("/merch", async (req, res) => {
  const { artist_name, name, category_id, price } = req.body;
  const artist_id = await findArtistIDByName(artist_name);

  try {
    const data = await Merch.create({
      artist_id,
      name,
      category_id,
      price,
    });
    res.status(200).json({
      message: "Successfully created merch item:",
      data,
    });
  } catch (err) {
    console.warn(err);
    res.status(500).json({
      message: "Internal error while creating merch item:",
      err,
    });
  }
});
*/

module.exports = router;

