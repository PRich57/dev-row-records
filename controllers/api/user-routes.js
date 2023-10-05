const router = require("express").Router();
const { User } = require("../../models");

// TODO: CREATE USER route
router.post("/", async (req, res) => {});

router.post("/login", async (req, res) => {
  const { user_name, password } = req.body;
  try {
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
      req.session.save(() => {
        req.session.loggedIn = true;
        res.status(200).json({
          message: "Successfully logged in!",
          user,
        });
      })
  } catch (err) {
    res.status(500).json(err);
  }
});

// TODO: LOGOUT route
router.post("/logout", async (req, res) => {});

module.exports = router;
