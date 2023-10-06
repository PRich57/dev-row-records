const Category = require("./Category");
const Artist = require("./Artist");
const Album = require("./Album");
const Merch = require("./Merch");
const MerchTag = require("./MerchTag");
const Tag = require("./Tag");
const User = require("./User");
const Favorite = require("./Favorite");
const AlbumGenre = require("./AlbumGenre");
const ArtistGenre = require("./ArtistGenre");
const Genre = require("./Genre");

// User hasMany Favorite
User.hasMany(Favorite, {
  foreignKey: "user_id",
});

// Favorite belongsTo User
Favorite.belongsTo(User, {
  foreignKey: "user_id",
});

// Artist hasMany Favorite
Artist.hasMany(Favorite, {
  foreignKey: "artist_id",
});

// Favorite belongsTo Artist
Favorite.belongsTo(Artist, {
  foreignKey: "artist_id",
});

// Genre belongsToMany Artist through ArtistGenre
Genre.belongsToMany(Artist, {
  through: ArtistGenre,
  foreignKey: "artist_id",
});

// Artist belongsToMany Genre through ArtistGenre
Artist.belongsToMany(Genre, {
  through: ArtistGenre,
  foreignKey: "genre_id",
});

// Genre belongsToMany Album through AlbumGenre
Genre.belongsToMany(Album, {
  through: AlbumGenre,
  foreignKey: "album_id",
});

// Album belongsToMany Genre through AlbumGenre
Album.belongsToMany(Genre, {
  through: AlbumGenre,
  foreignKey: "genre_id",
});

// Album hasMany Favorite
Album.hasMany(Favorite, {
  foreignKey: "album_id"
});

// Favorite belongsTo Album
Favorite.belongsTo(Album, {
  foreignKey: "album_id"
});

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
  foreignKey: "tag_id",
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
  User,
  Favorite,
  Genre,
  AlbumGenre,
  ArtistGenre,
};
