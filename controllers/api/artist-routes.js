const router = require('express').Router();
const { Artist, Genre, ArtistGenre } = require("../../models");

router.post("/", async (req, res) => {
  // genre can either be a string or an array of strings
  const { artist_name, genre } = req.body;
  try {
    const allGenreID = [];
    if (genre) {
      for (genre_name of genre) {
        const genreData = await Genre.findOne({ where: { genre_name }, });
        if (genreData) {
          const genreID = genreData.get({ plain: true }).id;
          allGenreID.push(genreID);
        } else {
          console.warn(`No genre object exists with name ${genre_name}`);
        }
      }
    }
    console.info(allGenreID);
    const data = await Artist.create({ artist_name });
    if (!data) {
      res.status(400).json({ message: "Failed to create artist" });
      return;
    }
    const artist = data.get({ plain: true });
    allGenreID.forEach( async (value) => {
      const through = await ArtistGenre.create({
        artist_id: artist.id,
        genre_id: value,
      });
      if (!through) {
        console.warn("Failed to create ArtistGenre through-table item: ", artist.id, value);
      }
    });
    res.status(200).json({
      message: "Successfully created artist!",
      artist,
    });
  } catch (err) {
    console.warn(err);
    res.status(500).json(err);
  }
})

/*
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
    console.warn(err);
    res.status(500).json({
      message: "Something went wrong:",
      err,
    });
  }
});
*/

module.exports = router;

