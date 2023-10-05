const router = require("express").Router();
const user = require("./user-routes");
const dev = require("./dev-routes");
const album = require("./album-routes");
const artist = require("./artist-routes");
const genre = require("./genre-routes");
const merch = require("./merch-routes");
const tag = require("./tag-routes");

router.use("/user", user);
router.use("/dev", dev);
router.use("/album", album);
router.use("/artist", artist);
router.use("/genre", genre);
router.use("/merch", merch);
router.use("/tag", tag);

module.exports = router;
