const { Artist } = require('../../models');

async function findArtistIDByName(artist_name) {
  try {
    const artist = await Artist.findOne({
      where: {
        artist_name,
      },
    });
    console.log(artist);
    return artist.id;
  } catch (err) {
    console.warn(err);
    throw new Error(err);
  }
}

module.exports = {
  findArtistIDByName,
};
