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

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    console.info(id);
    const data = await Genre.destroy({ where: { id } });
    if (!data) {
      res.status(404).json({
        message: `No Genre found with id ${id}`,
      });
      return;
    }
    res.status(200).json({
      message: "Successfully destroyed Genre",
      data,
    });
  } catch (err) {
    res.status(500).json({ err, id });
  }
});

module.exports = router;

