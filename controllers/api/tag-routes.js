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

module.exports = router;

