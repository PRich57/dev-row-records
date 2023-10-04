const router = require("express").Router();
const Album = require("../models/Album");
const Artist = require("../models/Artist");
const Merch = require("../models/Merch");

router.get("/", async (req, res) => {
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
