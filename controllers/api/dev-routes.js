const router = require("express").Router();

// here be dragons
//MISCALLS TO SERVER
router.get("*", (req, res) => {
  res.status(400).json({
    message: `You are making a call to the deprecated route ${req.path}!\nRemoving '/dev' from the path should produce the desired result.`,
  });
});

module.exports = router;
