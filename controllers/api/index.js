const router = require("express").Router();
const user = require("./user-routes");
const album = require("./album-routes");
const artist = require("./artist-routes");
const genre = require("./genre-routes");
const merch = require("./merch-routes");
const tag = require("./tag-routes");

router.use("/user", user);
router.use("/album", album);
router.use("/artist", artist);
router.use("/genre", genre);
router.use("/merch", merch);
router.use("/tag", tag);

// This route is deprecated and will only ever return a 400 status in the future.
// It is probably in our best interests to remove it once we have a chance to ensure nothing is using it.
const dev = require("./dev-routes");
router.use("/dev", dev);

module.exports = router;
