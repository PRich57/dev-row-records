// const { Merch } = require("../models");

// const merchData = [
//   {
//     merch_name: "Example Merch 1",
//     price: 10.99,
//     filename: '../Assets/sample-merch.PNG',
//     category_id: 1,
//     artist_id: 1,

//   },
//   // ... Add more Merchdata as needed
// ];

// const seedMerch = async () => {
//   await Merch.bulkCreate(merchData);
// };

// module.exports = seedMerch;

// // DONE //

const { Merch } = require("../models");
let modelMerchTemplate = [
  {
    merch_name: "Relaxed Fit",
    price: 20.99,
    filename: "../Assets/Merch_Photos/Tees/RelaxedFit/RelaxedFit_1.png",
    tag_id: 1,
  },
  {
    merch_name: "Slim Fit",
    price: 23.99,
    filename: "../Assets/Merch_Photos/Tees/SlimFit/SlimFit_1.png",
    tag_id: 1,
  },
  {
    merch_name: "Chest Logo",
    price: 25.99,
    filename: "../Assets/Merch_Photos/Tees/ChestLogo/Chest_1.png",
    tag_id: 1,
  },
  {
    merch_name: "Exercise Fit",
    price: 29.99,
    filename: "../Assets/Merch_Photos/Tees/ExerciseFit/ExerciseFit_1.png",
    tag_id: 1,
  },
  {
    merch_name: "Hoodie Back",
    price: 40.99,
    filename: "../Assets/Merch_Photos/Hoodies/HoodieBack/HoodieBack_1.png",
    tag_id: 2,
  },
  {
    merch_name: "Hoodie Front-H",
    price: 40.99,
    filename:
    "../Assets/Merch_Photos/Hoodies/HoodieFrontH/HoodieFrontH_1.png",
    tag_id: 2,
  },
  {
    merch_name: "Hoodie Front-V",
    price: 55.99,
    filename:
    "../Assets/Merch_Photos/Hoodies/HoodieFrontV/HoodieFrontV_1.png",
    tag_id: 2,
  },
  {
    merch_name: "Sun Hat",
    price: 12.99,
    filename: "../Assets/Merch_Photos/Hats/SunHat/Sunhat_1.png",
    tag_id: 3,
  },
  {
    merch_name: "Beanie",
    price: 9.99,
    filename: "../Assets/Merch_Photos/Hats/Beanie/Beanie_1.png",
    tag_id: 3,
  },
  {
    merch_name: "Fashion",
    price: 19.99,
    filename: "../Assets/Merch_Photos/Hats/Fashion/Fashion_1.png",
    tag_id: 3,
  },
  {
    merch_name: "Baseball Cap",
    price: 9.99,
    filename: "../Assets/Merch_Photos/Hats/Baseball/Baseball_1.png",
    tag_id: 3,
  },
  {
    merch_name: "7 Inch Vinyl",
    price: 19.99,
    filename: "../Assets/Merch_Photos/7inch-vinyl.avif",
    tag_id: 4,
  },
  {
    merch_name: "12 Inch Vinyl",
    price: 25.99,
    filename: "../Assets/Merch_Photos/12inch-vinyl.avif",
    tag_id: 4,
  },
  {
    merch_name: "CD",
    price: 15.99,
    filename: "../Assets/Merch_Photos/cd.avif",
    tag_id: 4,
  },
  {
    merch_name: "Cassette",
    price: 9.99,
    filename: "../Assets/Merch_Photos/cassete.avif",
    tag_id: 4,
  },
  {
    merch_name: "Laptop Decals",
    price: 2.99,
    filename: "../Assets/Merch_Photos/laptop-decals.avif",
    tag_id: 5,
  },
  {
    merch_name: "Bumper Sticker",
    price: 5.99,
    filename: "../Assets/Merch_Photos/bumper-stickers.avif",
    tag_id: 5,
  },
  {
    merch_name: "Fake Tattoo",
    price: 1.99,
    filename: "../Assets/Merch_Photos/fake-tattoos.avif",
    tag_id: 5,
  },
];

let merchData = [];
let merchTagData = [];
let merchIdCounter = 1;

let artistsNames = ["Mateo And The Black Crows","DJ Nicky","Liam the Kid","The Sound of Kellogg","Passion Pete", "Cholo Goth",]

artistsNames.forEach((artist, index) => {
  const artist_id = index + 1;
  modelMerchTemplate.forEach((item) => {
    merchData.push({
      merch_name: `${artist} ${item.merch_name}`,
      price: item.price,
      filename: item.filename.replace("1", artist_id),
      artist_id,
    });
    merchTagData.push({
      merch_id: merchIdCounter++,
      tag_id: item.tag_id,
    });
  });
});

const seedMerch = async () => {
  await Merch.bulkCreate(merchData);
};

module.exports = { seedMerch, merchTagData };

// DONE //
