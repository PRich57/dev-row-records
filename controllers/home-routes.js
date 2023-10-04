const router = require("express").Router();

router.get("/", async (req, res) => {
  // TODO: pull data from models and send to view.
  res.status(200).render("homepage");
});

router.get("/artists", async (req, res) => {
  // TODO: pull data from models and send to view.
  res.status(200).render("artists");
});

router.get("/music", async (req, res) => {
  // TODO: pull data from models and send to view.
  res.status(200).render("albums");
});

router.get("/merch", async (req, res) => {
  // TODO: pull data from models and send to view.
  res.status(200).render("merch");
});

module.exports = router;
