const router = require("express").Router();
const { Favorite } = require("../../models");

router.post("/", (req, res) => {
  const { album_id, artist_id, merch_id } = req.body;
  const { id: user_id } = req.session.user;

  try {
    const data = Favorite.create({
      user_id,
      album_id,
      artist_id,
      merch_id,
    });
    if (!data) {
      console.warn("Failed to establish favorite");
      res.status(404).json({ message: "Failed to establish favorite" });
    }
    res.status(200).json({
      message: "Successfully established favorite",
      data,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});




module.exports = router;
