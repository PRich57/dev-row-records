const router = require("express").Router();
const api = require("./api");
const home = require("./homeRoutes");

router.use("/api", api);
router.use("/", home);

module.exports = router;
