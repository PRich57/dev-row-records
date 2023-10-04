const router = require("express").Router();
const { User } = require("../../models");

// TODO: CREATE USER route
router.post("/", async (req, res) => {});

router.post("/login", async (req, res) => {
  const { user_name, password } = req.body;
  const user = await User.findOne({
    where: {
      user_name,
    }
  });
  if (!user) {
    res.status(400).json({
      message: "Invalid credential. Try again."
    });
    return;
  }
  const validPassword = user.checkPassword(password);
  if (!validPassword) {
    res.status(400).json({
      message: "Invalid credential. Try again."
    });
    return;
  }
  // TODO: set req.session.loggedIn to true, save userID to a cookie for use with the "favorites" tab.
  req.session.save(() => {
    req.session.loggedIn = true;
    res.status(200).json({
      message: "Successfully logged in!",
      user,
    });
  })
});

// TODO: LOGOUT route
router.post("/", async (req, res) => {});

module.exports = router;
