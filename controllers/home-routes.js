const {
  Artist,
  Album,
  // Category is currently not used and will likely be deprecated before launch
  Category,
  Merch,
  Tag,
  User,
  Favorite,
  Genre,
} = require("../models");
const router = require("express").Router();
const auth = require("../utils/withAuth");
const { Op } = require("sequelize");

router.get("/", async (req, res) => {
  res.status(200).render("homepage");
});

router.get("/artists", async (req, res) => {
  // TODO: pull data from models and send to view.
  // this should work but I don't really have a great way of testing it at the moment.
  const any = { [Op.not]: null };

  const { genre: genreQuery } = req.query;
  try {
    let data;
    if (!genreQuery) {
      data = await Artist.findAll();
    } else {
      const dataGenre = await Genre.findOne({
        where: { genre_name: genreQuery },
        include: {
          model: Artist,
          attributes: ["id", "artist_name", "filename"],
        },
      });
      console.info(dataGenre);
      data = dataGenre.artists;
    }
    const artists = data.map((value) => {
      return value.get({ plain: true });
    });
    res.status(200).render("artists", { artists });
  } catch (err) {
    console.warn(err);
    res.status(500).json(err);
  }
});

router.get("/albums", async (req, res) => {
  const any = { [Op.not]: null };
  const ALLOW_NO_GENRE_ENTRIES = false;
  const { genre: queryGenre, artist: queryArtist } = req.query;

  try {
    const data = await Artist.findAll({
      where: {
        artist_name: queryArtist || any,
      },
      include: {
        model: Album,
        attributes: ["album_name", "filename"],
        include: {
          model: Genre,
          attributes: ["genre_name"],
        },
      },
    });
    let artists = data.map((artist) => artist.get({ plain: true }));
    console.info(artists);
    if (queryGenre) {
      // the mechanism for removing artists with no albums of the relevant genre is a bit hacky and there's almost certainly a more memory-efficient way to do it
      // that being said, this should work and that's all that matters to me at this exact moment
      const artistsTemp = [];
      artists.forEach((artist) => {
        artist.albums = artist.albums.filter((album) => {
          if (!album.genres[0]) {
            return ALLOW_NO_GENRE_ENTRIES;
          }
          for (const genre of album.genres) {
            if (genre.genre_name === queryGenre) return true;
          }
          return false;
        });
        if (artist.albums[0]) artistsTemp.push(artist);
      });
      artists = artistsTemp;
    }
    res.status(200).render("albums", { artists });
    // res.status(206).json(artists);
  } catch (err) {
    console.warn(err);
    res.status(500).json(err);
  }
});

router.get("/artists/:id", async (req, res) => {
  // TODO: pull data from models and send to view.
  try {
    const data = await Artist.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Album,
          attributes: ["filename", "album_name"],
        },
        {
          model: Merch,
          attributes: ["filename", "merch_name", "price"],
        },
      ],
    });
    const artist = await data.get({ plain: true });
    console.log(artist);
    res.status(200).render("singleArtist", artist);
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
    console.warn(err);
    res.status(500).json(err);
  }
});

router.get("/music/:id", async (req, res) => {
  // TODO: pull data from models and send to view.
  try {
    const data = await Album.findOne({
      where: {
        id: req.params.id,
      },
    });
    const album = data.get({ plain: true });
    res.status(200).render("singleAlbum", album);
  } catch (err) {
    console.warn(err);
    res.status(500).json(err);
  }
});

//http:/website.dev/merch?tag=hoodie
router.get("/merch", async (req, res) => {
  // TODO: pull data from models and send to view.
  try {
    let data;
    const dataTags = await Tag.findAll({
      include: [
        {
          model: Merch,
          attributes: ["merch_name", "price", "filename"],
        },
      ],
    });
    const tags = dataTags.map((value) => {
      return value.get({ plain: true });
    });
    const dataArtist = await Artist.findAll({
      include: [
        {
          model: Merch,
        },
      ],
    });

    const dataArtistsPlain = dataArtist.map((value) => {
      return value.get({ plain: true });
    });
    console.log(tags);
    console.log(dataArtistsPlain);
    console.log(dataArtistsPlain[0].merches);
    console.log(tags[0].merches[0].merch_name);
    if (req.query.tag) {
      const dataTag = await Tag.findOne({
        where: {
          tag_name: req.query.tag,
        },
        include: [
          {
            model: Merch,
          },
        ],
      });
      let name = req.query.tag;
      if (dataTag) {
        console.warn(dataTag);
        data = dataTag.merches;
        const merch = data.map((value) => {
          return value.get({ plain: true });
        });
        console.log(merch);
        res
          .status(200)
          .render("merchSortTag", { merch, name, tags, dataArtistsPlain });
      } else {
        const oneArtist = await Artist.findOne({
          where: {
            artist_name: req.query.tag,
          },
          include: [
            {
              model: Merch,
            },
          ],
        });
        console.log(oneArtist);
        const oneArtistPlain = oneArtist.get({ plain: true });
        console.log(oneArtistPlain);
        res.status(200).render("merchSortArtist", {
          name,
          tags,
          oneArtistPlain,
          dataArtistsPlain,
        });
      }
    } else {
      res.status(200).render("merch", { tags, dataArtistsPlain });
    }
  } catch (err) {
    console.warn(err);
    res.status(500).json(err);
  }
});

router.get("/merch/:id", async (req, res) => {
  // TODO: pull data from models and send to view.
  try {
    const data = await Merch.findOne({
      where: {
        id: req.params.id,
      },
    });
    const merch = data.get({ plain: true });
    res.status(200).render("singleMerch", merch);
  } catch (err) {
    console.warn(err);
    res.status(500).json(err);
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
      },
    });
    console.log(data);
    const favorites = await data.map((value) => {
      return value.get({ plain: true });
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
    res.status(200).render("favorites", viewData);
  } catch (err) {
    console.warn(err);
    res.status(500).json({
      message: "Bad things happen to good people",
      err,
    });
  }
});

module.exports = router;
