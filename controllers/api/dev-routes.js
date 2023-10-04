const router = require("express").Router();
const Album = require("../../models/Album");
const Artist = require("../../models/Artist");
const Merch = require("../../models/Merch");

router.post("/artist", async (req, res) => {
  const { name } = await req.body;
  try {
    const data = await Artist.create({ name });
    if (!data) {
      res.status(400).json({
        message: "Create artist failed",
      });
      return;
    }
    res.status(200).json({
      message: "Successfully created artist:",
      data,
    });
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong:",
      err,
    });
  }
});

router.post("/album", async (req, res) => {
  // get artist id from artist name
  const { artist_name, album_name } = req.body;
  const artist_id = await findArtistIDByName(artist_name);

  // create album with artist id
  try {
    const data = await Album.create({ artist_id, album_name });
    res.status(200).json({
      message: "Successfully created album:",
      data,
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal error while creating album:",
      err,
    });
  }
});

router.post("/merch", async (req, res) => {
  const { artist_name, merch_name, category_id, price } = req.body;
  const artist_id = await findArtistIDByName(artist_name);

  try {
    const data = await Merch.create({
      artist_id,
      merch_name,
      category_id,
      price,
    });
    res.status(200).json({
      message: "Successfully created merch item:",
      data,
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal error while creating merch item:",
      err,
    });
  }
});

async function findArtistIDByName(name) {
  try {
    const artist = await Artist.findOne({
      where: {
        name,
      },
    });
    console.log(artist);
    return artist.id;
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = router;