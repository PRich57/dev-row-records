const router = require("express").Router();
const user = require("./user-routes");
const album = require("./album-routes");
const artist = require("./artist-routes");
const genre = require("./genre-routes");
const merch = require("./merch-routes");
const tag = require("./tag-routes");
const category = require("./category-routes");
const favorite = require("./favorite-routes");

router.use("/user", user);
router.use("/album", album);
router.use("/artist", artist);
router.use("/genre", genre);
router.use("/merch", merch);
router.use("/tag", tag);
router.use("/category", category);
router.use("/favorite", favorite);

module.exports = router;
