const { Album, Artist, Category, Merch, Tag, User, Favorite }  = require("../models");
const router = require("express").Router();

const auth = require("../utils/withAuth");

router.get("/", async (req, res) => {
  res.status(200).render("homepage");
});

router.get("/artists", async (req, res) => {
  // TODO: pull data from models and send to view.
  // this should work but I don't really have a great way of testing it at the moment.
    try {
      const data = await Artist.findAll();
      const artists = data.map((value) => {
        return value.get({ plain: true });
      });
      res.status(200).render("artists", { artists });
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get("/artists/:id", async (req, res) => {
  // TODO: pull data from models and send to view.
    try {
      const data = await Artist.findOne({
        where: {
          id: req.params.id,
        }
      });
      const artist = data.get({plain: true});
      res.status(200).render("singleArtist", { artist });
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get("/music", async (req, res) => {
  // TODO: pull data from models and send to view.
    try {
      const data = await Album.findAll();
      const albums = data.map((value) => {
        return value.get({ plain: true });
      });
      res.status(200).render("albums", { albums });
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get("/music/:id", async (req, res) => {
  // TODO: pull data from models and send to view.
    try {
      const data = await Album.findOne({
        where: {
          id: req.params.id,
        }
      });
      const album = data.get({plain: true});
      res.status(200).render("singleArtist", { album });
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get("/merch", async (req, res) => {
  // TODO: pull data from models and send to view.
    try {
      const data = await Merch.findAll();
      const merch = data.map((value) => {
        return value.get({ plain: true });
      });
      res.status(200).render("merch", { merch });
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get("/merch/:id", async (req, res) => {
  // TODO: pull data from models and send to view.
    try {
      const data = await Merch.findOne({
        where: {
          id: req.params.id,
        }
      });
      const merch = data.get({plain: true});
      res.status(200).render("singleArtist", { merch });
    } catch (err) {
      res.status(500).json(err)
    }
});

router.get("/favorites", auth, async (req, res) => {
  //TODO: pull favorites for the current user and send to view
  const viewData = {
    artists: [],
    albums: [],
    merch: [],
  };
  const { id: user_id } = req.session.user;

  try {
    const data = Favorite.findAll({
      where: {
        user_id,
      }
    });
    const favorites = data.map((value) => {
      return value.get({ plain: true })
    });
    favorites.forEach((value) => {
      if (value.artist_id) {
        viewData.artists.push(value);
      } else if (value.album_id) {
        viewData.albums.push(value);
      } else if (value.merch_id) {
        viewData.merch.push(value);
      } else {
        console.warn(`No associated data for ${value}`);
      }
    });
  } catch (err) {
    res.status(500).json({
      message: "Bad things happen to good people",
      err,
    })
  }

  res.status(200).render("favorites", viewData);
});


module.exports = router;
