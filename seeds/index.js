const seedAlbum = require("./album-seeds");
const seedArtist = require("./artist-seeds");
const seedCategory = require("./category-seeds");
const {seedMerch, merchTagData} = require("./merch-seeds");
const seedTag = require("./tag-seeds");
const seedMerchTag = require("./merch-tag-seeds");
const seedGenre = require("./genre-seeds");
const seedAlbumGenre = require("./album-genre-seeds");
const seedArtistGenre = require("./artist-genre-seeds");

require("dotenv").config();

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.info("\n----- DATABASE SYNCED -----\n");

  await seedCategory();
  console.info("\n----- CATEGORIES SEEDED -----\n");

  await seedTag();
  console.info("\n----- TAGS SEEDED -----\n");
  
  await seedArtist();
  console.info("\n----- ARTISTS SEEDED -----\n");
  
  await seedAlbum();
  console.info("\n----- ALBUMS SEEDED -----\n");
  
  await seedMerch();
  console.info("\n----- MERCH SEEDED -----\n");
    
  await seedGenre();
  console.info("\n----- GENRE SEEDED -----\n");
  
  // Seed all through tables last so associated data exists first
  await seedMerchTag();
  console.info("\n----- MERCH TAGS SEEDED -----\n");
  
  await seedAlbumGenre();
  console.info("\n----- ALBUM GENRE SEEDED -----\n");
  
  await seedArtistGenre();
  console.info("\n----- ARTIST GENRE SEEDED -----\n");

  process.exit(0);
};

seedAll();
