const router = require("express").Router();
const user = require("./user-routes");
const dev = require("./dev-routes");

router.use("/user", user);
router.use("/dev", dev);

module.exports = router;
