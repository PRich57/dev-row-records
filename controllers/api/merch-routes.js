const router = require('express').Router();
const { Merch, MerchTag, Tag } = require("../../models");
const { findArtistIDByName } = require("./helper");

// ADD MERCH ROUTE
//http://localhost:3001/api/merch
router.post("/", async (req, res) => {
  const { merch_name, price, category_id, artist_name, tag } = req.body;
  try {
    const artist_id = await findArtistIDByName(artist_name);
    const allTagIDs = [];
    if (tag) {
      for (tagName of tag) {
        const dataTag = await Tag.findOne({ where: { tag_name: tagName } });
        if (!tagName) {
          console.warn(`Could not retrieve tag data for ${tagName}`);
        } else {
          allTagIDs.push(dataTag.get({ plain: true }));
        }
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
    console.error(err);
    res.status(500).json(err);
  }
});

// DELETE MERCH ROUTE
//http://localhost:3001/api/merch/{id}
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Merch.destroy({ where: { id } });
    if (!data) {
      res.status(404).json({
        message: `No Merch found with id ${id}`,
      });
      return;
    }
    res.status(200).json({
      message: "Successfully destroyed Merch",
      data,
    });
  } catch (err) {
    res.status(500).json({ err, id });
  }
});

module.exports = router;

