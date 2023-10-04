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
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong.",
      err,
    });
  }
});

router.post("/album", async (req, res) => {
  // get artist id from artist name
  const artist_id = await findArtistIDByName(req, res);
  console.log(artist_id);

  // create album with artist id
  const { name } = req.body;
  try {
    const data = await Album.create({ artist_id, name });
    res.status(200).json({
      message: "Successfully created album:",
      data,
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal error while creating album",
      err,
    });
  }
});

async function findArtistIDByName(req, res) {
  const { artist_name } = req.body;
  try {
    const artist = await Artist.findOne({
      where: {
        name: artist_name,
      },
    });
    console.log(artist);
    return artist.id;
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = router;
