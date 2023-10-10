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
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedCategory();
  console.log("\n----- CATEGORIES SEEDED -----\n");

  await seedTag();
  console.log("\n----- TAGS SEEDED -----\n");
  
  await seedArtist();
  console.log("\n----- ARTISTS SEEDED -----\n");
  
  await seedAlbum();
  console.log("\n----- ALBUMS SEEDED -----\n");
  
  await seedMerch();
  console.log("\n----- MERCH SEEDED -----\n");
    
  await seedGenre();
  console.log("\n----- GENRE SEEDED -----\n");
  
  // Seed all through tables last so associated data exists first
  await seedMerchTag();
  console.log("\n----- MERCH TAGS SEEDED -----\n");
  
  await seedAlbumGenre();
  console.log("\n----- ALBUM GENRE SEEDED -----\n");
  
  await seedArtistGenre();
  console.log("\n----- ARTIST GENRE SEEDED -----\n");

  process.exit(0);
};

seedAll();
