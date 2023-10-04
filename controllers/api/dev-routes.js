const router = require("express").Router();
const Album = require("../../models/Album");
const Artist = require("../../models/Artist");
const Merch = require("../../models/Merch");

router.post("/artist", async (req, res) => {
  const { name } = await req.body;
  try {
    const data = await Artist.create({ name });
    if (!data) {
      res.status(400).json({
        message: "Create artist failed",
      });
      return;
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong.",
      err,
    });
  }
});

module.exports = router;
