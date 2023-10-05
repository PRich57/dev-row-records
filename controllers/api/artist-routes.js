const router = require('express').Router();
const { Artist, Genre, ArtistGenre } = require("../../models");

// router.post("/artist", async (req, res) => {
//   const { name } = await req.body;
//   try {
//     const data = await Artist.create({ name });
//     if (!data) {
//       res.status(400).json({
//         message: "Create artist failed",
//       });
//       return;
//     }
//     res.status(200).json({
//       message: "Successfully created artist:",
//       data,
//     });
//   } catch (err) {
//     console.warn(err);
//     res.status(500).json({
//       message: "Something went wrong:",
//       err,
//     });
//   }
// });

router.post("/", async (req, res) => {
  // genre can either be a string or an array of strings
  const { name, genre } = req.body;
  const allGenreID = [];
  try {
    // for each genre passed in...
    for (genreName of genre) {
      // find the associated genre model
      const genreData = await Genre.findOne({ where: { genreName } });
      // pull the genre's id
      const genreID = genreData.get({ plain: true }).id;
      // save the genre id for later
      allGenreID.push(genreID);
    }
    const data = await Artist.create({ name });
    if (!data) {
      res.status(400).json({
        message: "artist was not created",
      });
      return;
    }
    allGenreID.forEach((value) => {
      const through = ArtistGenre.create({
        artist_id: data.id,
        genre_id: value,
      });
      if (!through) {
        console.warn("Failed to create through-table item: ", data.id, value);
      }
    });
    res.status(200).json({
      message: "Successfully created artist!",
      data,
    });
  } catch (err) {
    console.warn(err);
    res.status(500).json(err);
  }
})

module.exports = router;

