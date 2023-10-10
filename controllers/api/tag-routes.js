const router = require('express').Router();
const { Tag } = require("../../models");

// ADD TAG ROUTE
//http://localhost:3001/api/tag
router.post("/", async (req, res) => {
  const { tag_name } = req.body;
  try {
    const data = Tag.create({ tag_name });
    res.status(200).json({
      message: "Successfully created tag:",
      data,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// DELETE TAG ROUTE
//http://localhost:3001/api/tag/{id}
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
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

