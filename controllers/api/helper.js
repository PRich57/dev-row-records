const { Artist } = require('../../models');

async function findArtistIDByName(name) {
  try {
    const artist = await Artist.findOne({
      where: {
        name,
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
