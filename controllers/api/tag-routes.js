const router = require('express').Router();
const { Tag } = require("../../models");

router.post("/", async (req, res) => {
  const { tag_name } = req.body;
  try {
    const data = Tag.create({ tag_name });
    res.status(200).json({
      message: "Successfully created tag:",
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
    const data = await Tag.destroy({ where: { id } });
    if (!data) {
      res.status(404).json({
        message: `No Tag found with id ${id}`,
      });
      return;
    }
    res.status(200).json({
      message: "Successfully destroyed Tag",
      data,
    });
  } catch (err) {
    res.status(500).json({ err, id });
  }
});

module.exports = router;

