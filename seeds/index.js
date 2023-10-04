const seedAlbum = require('./album-seeds');
const seedArtist = require('./artist-seeds');
const seedCategory = require('./category-seeds');
const seedMerch = require('./merch-seeds');
const seedMerchTag = require('./merch-tag-seeds');
const seedTag = require('./tag-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedAlbum();
  console.log('\n----- ALBUMS SEEDED -----\n');

  await seedArtist();
  console.log('\n----- ARTISTS SEEDED -----\n');

  await seedCategory();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedMerch();
  console.log('\n----- MERCH SEEDED -----\n');

  await seedMerchTag();
  console.log('\n----- MERCH TAGS SEEDED -----\n');

  await seedTag();
  console.log('\n----- TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();