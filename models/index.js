const Artist = require('./Artist');
const Album = require('./Album');
const Category = require('./Category');
const Merch = require('./Merch');
const MerchTag = require('./MerchTag');
const Tag = require('./Tag');

// Merch belongsTo Category
Merch.belongsTo(Category, {
  foreignKey: "category_id",
});

// Categories have many Merch
Category.hasMany(Merch, {
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

// Merch belongsTo Artist (because each merch item belongs to a specific artist???)(or is it ToMany??)
Merch.belongsTo(Artist, {
  foreignKey: "artist_id",
});

// Artist hasMany Merch
Artist.hasMany(Merch, {
  foreignKey: "artist_id",
});

// Album belongsTo Artist
Album.belongsTo(Artist, {
  foreignKey: "artist_id",
});

// Artist hasMany Album
Artist.hasMany(Album, {
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