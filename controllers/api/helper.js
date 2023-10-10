const { Artist } = require('../../models');

async function findArtistIDByName(artist_name) {
  try {
    const artist = await Artist.findOne({
      where: {
        artist_name,
      },
    });
    return artist.id;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
}

module.exports = {
  findArtistIDByName,
};
