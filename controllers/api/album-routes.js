const router = require('express').Router();
const { Album, Genre, AlbumGenre } = require('../../models');
const { findArtistIDByName } = require('./helper');

router.post("/", async (req, res) => {
  const { artist_name, album_name, genre } = req.body;
  try {
    const artist_id = await findArtistIDByName(artist_name);
    const allGenreID = [];
    // for each genre passed in...
    if (genre) {
      for (genre_name of genre) {
        const genreData = await Genre.findOne({ where: { genre_name } });
        if (genreData) {
          const genreID = genreData.get({ plain: true }).id;
          allGenreID.push(genreID);
        } else {
          console.warn(`No genre object exists with name ${genre_name}`);
        }
      }
    }
    const data = await Album.create({ artist_id, album_name });
    if (!data) {
      res.status(400).json({ message: "Failed to create album" });
      return;
    }
    const album = data.get({ plain: true });
    allGenreID.forEach(async (value) => {
      const through = await AlbumGenre.create({
        album_id: data.id,
        genre_id: value,
      });
      if (!through) {
        console.warn("Failed to create AlbumGenre through-table item", data.id, value);
      }
    });
    res.status(200).json({
      message: "Successfully created album:",
      album,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Album.destroy({ where: { id } });
    if (!data) {
      res.status(404).json({
        message: `No album found with id ${id}`,
      });
      return;
    }
    res.status(200).json({
      message: "Successfully destroyed album",
      data,
    });
  } catch (err) {
    res.status(500).json({ err, id });
  }
});

module.exports = router;
