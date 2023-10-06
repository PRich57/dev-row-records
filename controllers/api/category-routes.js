const router = require("express").Router();
const { Category } = require("../../models");

router.post("/", async (req, res) => {
  const { category_name } = req.body;
  try {
    const data = await Category.create({ category_name });
    res.status(200).json({
      message: "Successfully created category:",
      data,
    });
  } catch (err) {
    console.warn(err);
    res.status(500).json(err);
  }
});

module.exports = router
