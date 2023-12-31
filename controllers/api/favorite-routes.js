const router = require("express").Router();
const { Favorite } = require("../../models");

// ADD FAVORITE ROUTE
//http://localhost:3001/api/favorite/
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
      console.warn("Failed to Establish Favorite");
      res.status(404).json({ message: "Failed to establish favorite" });
    }
    res.status(200).json({
      message: "Successfully established favorite",
      data,
    });
  } catch (err) {
    console.error(err)
    res.status(500).json(err);
  }
});


// DELETE FAVORITE ROUTE
//http://localhost:3001/api/favorite/id?type=album_id
router.delete("/:id", async (req, res) => {
  const type = req.query.type;
  const reqInfo = {
    user_id: req.session.user.id,
  }
  reqInfo[type] = req.params.id;
  try {
    const data = await Favorite.destroy({ where: reqInfo });
    if (!data) {
      console.warn("Favorites record with the following info could not be found when attempting to destroy it", reqInfo);
      res.status(404).json({
        message: "Could not find Favorite to delete",
        reqInfo,
      });
      return;
    }
    res.status(204).json({
      message: "Successfully removed favorite",
      data,
    });
  } catch (err) {
    console.error(err)
    res.status(500).json(err);
  }
});

module.exports = router;
