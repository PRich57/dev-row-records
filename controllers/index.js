const router = require("express").Router();

const api = require("./api");
const home = require("./home-routes");

router.use("/api", api);
router.use("/", home);

module.exports = router;
