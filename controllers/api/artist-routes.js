const router = require('express').Router();
const { Artist, Genre, ArtistGenre } = require("../../models");


// CREATE ALBUM ROUTE
//http://localhost:3001/api/artist
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
    console.error(err);
    res.status(500).json(err);
  }
})

// DELETE ALBUM ROUTE
//http://localhost:3001/api/artist/{id}
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Artist.destroy({ where: { id } });
    if (!data) {
      res.status(404).json({
        message: `No artist found with id ${id}`,
      });
      return;
    }
    res.status(200).json({
      message: "Successfully destroyed artist",
      data,
    });
  } catch (err) {
    res.status(500).json({ err, id });
  }
});

module.exports = router;

