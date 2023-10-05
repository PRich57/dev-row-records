const router = require("express").Router();
const { Album, Artist, Merch } = require("../../models");

router.post("/merch", async (req, res) => {
  const { artist_name, name, category_id, price } = req.body;
  const artist_id = await findArtistIDByName(artist_name);

  try {
    const data = await Merch.create({
      artist_id,
      name,
      category_id,
      price,
    });
    res.status(200).json({
      message: "Successfully created merch item:",
      data,
    });
  } catch (err) {
    console.warn(err);
    res.status(500).json({
      message: "Internal error while creating merch item:",
      err,
    });
  }
});

router.delete("/user/:id", async (req, res) => {
  try {
    const deletedUser = await User.destroy({
      where: {
        id,
      }
    });
    if (!deletedUser) {
      res.status(404).json({
        message: "Could not delete user: User not found",
      });
    }
    res.status(200).json({
      message: "User removed from database. Get owned",
      deletedUser,
    });
  } catch (err) {
    console.warn(err);
    res.status(500).json({
      message: "I wish I hadn't done this whole 'write messages for my errors' thing",
      err,
    })
  }
})


module.exports = router;
