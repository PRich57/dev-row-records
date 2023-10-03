const router = require("express").Router();
const user = require("./user-routes");

router.use("/user", user);

module.exports = router;
