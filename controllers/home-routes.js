const router = require("express").Router();
const Album = require("../models/Album");
const Artist = require("../models/Artist");
const Category = require("../models/Category");
const Merch = require("../models/Merch");
const Tag = require("../models/Tag");
const User = require("../models/User");
const Favorites = require("../models/Favorites");

const auth = require("../utils/withAuth");

router.get("/", async (req, res) => {
  res.status(200).render("homepage");
});

router.get("/artists", async (req, res) => {
  // TODO: pull data from models and send to view.
  // this should work but I don't really have a great way of testing it at the moment.
  const data = await Artist.findAll();
  const artists = data.map((value) => {
    return value.get({ plain: true });
  });
  res.status(200).render("artists", { artists });
});

router.get("/single-artist", async (req, res) => {
  // TODO: pull data from models and send to view.
  res.status(200).render("singleArtist");
});

router.get("/music", async (req, res) => {
  // TODO: pull data from models and send to view.
  const data = await Album.findAll();
  const albums = data.map((value) => {
    return value.get({ plain: true });
  });
  res.status(200).render("albums", { albums });
});

router.get("/merch", async (req, res) => {
  // TODO: pull data from models and send to view.
  const data = await Merch.findAll();
  const merch = data.map((value) => {
    return value.get({ plain: true });
  });
  res.status(200).render("merch", { merch });
});

router.get("/favorites", auth, async (req, res) => {
  //TODO: pull favorites for the current user and send to view
  const viewData = {};
  


  res.status(200).render("favorites", viewData);
});


module.exports = router;
