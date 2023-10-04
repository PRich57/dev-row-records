const Category = require('./Category');
const Artist = require('./Artist');
const Album = require('./Album');
const Merch = require('./Merch');
const MerchTag = require('./MerchTag');
const Tag = require('./Tag');

// Categories have many Merch
Category.hasMany(Merch, {
  foreignKey: "category_id",
});

// Artist hasMany Album
Artist.hasMany(Album, {
  foreignKey: "artist_id",
});

// Artist hasMany Merch
Artist.hasMany(Merch, {
  foreignKey: "artist_id",
});

// Merch belongsTo Category
Merch.belongsTo(Category, {
  foreignKey: "category_id",
});

// Merch belongsToMany Tag (through MerchTag)
Merch.belongsToMany(Tag, {
  through: MerchTag,
  foreignKey: "merch_id",
});

// Tags belongToMany Merch (through MerchTag)
Tag.belongsToMany(Merch, {
  through: MerchTag,
  foreignKey: 'tag_id',
});

// Merch belongsTo Artist
Merch.belongsTo(Artist, {
  foreignKey: "artist_id",
});

// Album belongsTo Artist
Album.belongsTo(Artist, {
  foreignKey: "artist_id",
});

module.exports = {
  Artist,
  Album,
  Category,
  Merch,
  MerchTag,
  Tag,
};