const router = require('express').Router();
const { Album, Genre, AlbumGenre } = require('../../models');
const { findArtistIDByName } = require('./helper');

router.post("/", async (req, res) => {
  const { artist_name, name, genre } = req.body;
  try {
    const artist_id = await findArtistIDByName(artist_name);
    const allGenreID = [];
    // for each genre passed in...
    for (genreName of genre) {
      // find the associated genre model
      const genreData = await Genre.findOne({ where: { genreName } });
      // pull the genre's id
      const genreID = genreData.get({ plain: true }).id;
      // save the genre id for later
      allGenreID.push(genreID);
    }
    const data = await Album.create({ artist_id, name });
    if (!data) {
      res.status(400).json({ message: "Failed to create album" });
      return;
    }
    allGenreID.forEach(async (value) => {
      const through = await AlbumGenre.create({
        album_id: data.id,
        genre_id: value,
      });
      if (!through) {
        console.warn("Failed to create AlbumGenre through-table item", data.id, value);
      }
    });
  } catch (err) {
    console.warn(err);
    res.status(500).json(err);
  }
});

/*
router.post("/album", async (req, res) => {
  // get artist id from artist name
  const { artist_name, name } = req.body;
  const artist_id = await findArtistIDByName(artist_name);

  // create album with artist id
  try {
    const data = await Album.create({ artist_id, name });
    res.status(200).json({
      message: "Successfully created album:",
      data,
    });
  } catch (err) {
    console.warn(err);
    res.status(500).json({
      message: "Internal error while creating album:",
      err,
    });
  }
});
*/

module.exports = router;
