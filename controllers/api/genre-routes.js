const router = require('express').Router();
const { Genre } = require("../../models");

router.post("/", async (req, res) => {
  const { genre_name } = req.body;
  try {
    const data = await Genre.create({ genre_name });
    res.status(200).json({
      message: "Successfully created Genre:",
      data,
    });
  } catch (err) {
    console.warn(err);
    res.status(500).json(err);
  }
});

module.exports = router;

