const router = require("express").Router();
const { Category } = require("../../models");

// CREATE CATEGORY ROUTE
//http://localhost:3001/api/category/
router.post("/", async (req, res) => {
  const { category_name } = req.body;
  try {
    const data = await Category.create({ category_name });
    res.status(200).json({
      message: "Successfully created category:",
      data,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// DELETE CATEGORY ROUTE
//http://localhost:3001/api/category/{id}
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

module.exports = router
