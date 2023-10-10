const { Merch } = require("../models");

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

const merchData = [
    {
      //aritst 1
      merch_name: "Relaxed Fit",
      price: 20.99,
      filename: "../Assets/Merch_Photos/Tees/RelaxedFit/RelaxedFit_1.png",
      artist_id: 1,
    },
    {
      merch_name: "Slim Fit",
      price: 23.99,
      filename: "../Assets/Merch_Photos/Tees/SlimFit/SlimFit_1.png",
      artist_id: 1,
    },
    {
      merch_name: "Chest Logo",
      price: 25.99,
      filename: "../Assets/Merch_Photos/Tees/ChestLogo/Chest_1.png",
      artist_id: 1,
    },
    {
      merch_name: "Exercise Fit",
      price: 29.99,
      filename: "../Assets/Merch_Photos/Tees/ExerciseFit/ExerciseFit_1.png",
      artist_id: 1,
    },
    {
      //aritst 2
      merch_name: "Relaxed Fit",
      price: 20.99,
      filename: "../Assets/Merch_Photos/Tees/RelaxedFit/RelaxedFit_2.png",
      artist_id: 2,
    },
    {
      merch_name: "Slim Fit",
      price: 23.99,
      filename: "../Assets/Merch_Photos/Tees/SlimFit/SlimFit_2.png",
      artist_id: 2,
    },
    {
      merch_name: "Chest Logo",
      price: 25.99,
      filename: "../Assets/Merch_Photos/Tees/ChestLogo/Chest_2.png",
      artist_id: 2,
    },
    {
      merch_name: "Exercise Fit",
      price: 29.99,
      filename: "../Assets/Merch_Photos/Tees/ExerciseFit/ExerciseFit_2.png",
      artist_id: 2,
    },
    {
      //aritst 3
      merch_name: "Relaxed Fit",
      price: 20.99,
      filename: "../Assets/Merch_Photos/Tees/RelaxedFit/RelaxedFit_3.png",
      artist_id: 3,
    },
    {
      merch_name: "Slim Fit",
      price: 23.99,
      filename: "../Assets/Merch_Photos/Tees/SlimFit/SlimFit_3.png",
      artist_id: 3,
    },
    {
      merch_name: "Chest Logo",
      price: 25.99,
      filename: "../Assets/Merch_Photos/Tees/ChestLogo/Chest_3.png",
      artist_id: 3,
    },
    {
      merch_name: "Exercise Fit",
      price: 29.99,
      filename: "../Assets/Merch_Photos/Tees/ExerciseFit/ExerciseFit_3.png",
      artist_id: 3,
    },
    {
      //aritst 4
      merch_name: "Relaxed Fit",
      price: 20.99,
      filename: "../Assets/Merch_Photos/Tees/RelaxedFit/RelaxedFit_4.png",
      artist_id: 4,
    },
    {
      merch_name: "Slim Fit",
      price: 23.99,
      filename: "../Assets/Merch_Photos/Tees/SlimFit/SlimFit_4.png",
      artist_id: 4,
    },
    {
      merch_name: "Chest Logo",
      price: 25.99,
      filename: "../Assets/Merch_Photos/Tees/ChestLogo/Chest_4.png",
      artist_id: 4,
    },
    {
      merch_name: "Exercise Fit",
      price: 29.99,
      filename: "../Assets/Merch_Photos/Tees/ExerciseFit/ExerciseFit_4.png",
      artist_id: 4,
    },
    {
      //aritst 5
      merch_name: "Relaxed Fit",
      price: 20.99,
      filename: "../Assets/Merch_Photos/Tees/RelaxedFit/RelaxedFit_5.png",
      artist_id: 5,
    },
    {
      merch_name: "Slim Fit",
      price: 23.99,
      filename: "../Assets/Merch_Photos/Tees/SlimFit/SlimFit_5.png",
      artist_id: 5,
    },
    {
      merch_name: "Chest Logo",
      price: 25.99,
      filename: "../Assets/Merch_Photos/Tees/ChestLogo/Chest_5.png",
      artist_id: 5,
    },
    {
      merch_name: "Exercise Fit",
      price: 29.99,
      filename: "../Assets/Merch_Photos/Tees/ExerciseFit/ExerciseFit_5.png",
      artist_id: 5,
    },
    {
      //aritst 6
      merch_name: "Relaxed Fit",
      price: 20.99,
      filename: "../Assets/Merch_Photos/Tees/RelaxedFit/RelaxedFit_6.png",
      artist_id: 6,
    },
    {
      merch_name: "Slim Fit",
      price: 23.99,
      filename: "../Assets/Merch_Photos/Tees/SlimFit/SlimFit_6.png",
      artist_id: 6,
    },
    {
      merch_name: "Chest Logo",
      price: 25.99,
      filename: "../Assets/Merch_Photos/Tees/ChestLogo/Chest_6.png",
      artist_id: 6,
    },
    {
      merch_name: "Exercise Fit",
      price: 29.99,
      filename: "../Assets/Merch_Photos/Tees/ExerciseFit/ExerciseFit_6.png",
      artist_id: 6,
    },
  // ],
  // hoodie: [
    {
      //artist 1
      merch_name: "Hoodie Back",
      price: 40.99,
      filename: "../Assets/Merch_Photos/Hoodies/HoodieBack/HoodieBack_1.png",
      artist_id: 1,
    },
    {
      merch_name: "Hoodie Front-H",
      price: 40.99,
      filename: "../Assets/Merch_Photos/Hoodies/HoodieFrontH/HoodieFrontH_1.png",
      artist_id: 1,
    },
    {
      merch_name: "Hoodie Front-V",
      price: 55.99,
      filename: "../Assets/Merch_Photos/Hoodies/HoodieFrontV/HoodieFrontV_1.png",
      artist_id: 1,
    },
    {
      //artist 2
      merch_name: "Hoodie Back",
      price: 40.99,
      filename: "../Assets/Merch_Photos/Hoodies/HoodieBack/HoodieBack_2.png",
      artist_id: 2,
    },
    {
      merch_name: "Hoodie Front-H",
      price: 40.99,
      filename: "../Assets/Merch_Photos/Hoodies/HoodieFrontH/HoodieFrontH_2.png",
      artist_id: 2,
    },
    {
      merch_name: "Hoodie Front-V",
      price: 55.99,
      filename: "../Assets/Merch_Photos/Hoodies/HoodieFrontV/HoodieFrontV_2.png",
      artist_id: 2,
    },
    {
      //artist 3
      merch_name: "Hoodie Back",
      price: 40.99,
      filename: "../Assets/Merch_Photos/Hoodies/HoodieBack/HoodieBack_3.png",
      artist_id: 3
    },
    {
      merch_name: "Hoodie Front-H",
      price: 40.99,
      filename: "../Assets/Merch_Photos/Hoodies/HoodieFrontH/HoodieFrontH_3.png",
      artist_id: 3
    },
    {
      merch_name: "Hoodie Front-V",
      price: 55.99,
      filename: "../Assets/Merch_Photos/Hoodies/HoodieFrontV/HoodieFrontV_3.png",
      artist_id: 3
    },
    {
      //artist 4
      merch_name: "Hoodie Back",
      price: 40.99,
      filename: "../Assets/Merch_Photos/Hoodies/HoodieBack/HoodieBack_4.png",
      artist_id: 4,
    },
    {
      merch_name: "Hoodie Front-H",
      price: 40.99,
      filename: "../Assets/Merch_Photos/Hoodies/HoodieFrontH/HoodieFrontH_4.png",
      artist_id: 4,
    },
    {
      merch_name: "Hoodie Front-V",
      price: 55.99,
      filename: "../Assets/Merch_Photos/Hoodies/HoodieFrontV/HoodieFrontV_4.png",
      artist_id: 4,
    },
    {
      //artist 5
      merch_name: "Hoodie Back",
      price: 40.99,
      filename: "../Assets/Merch_Photos/Hoodies/HoodieBack/HoodieBack_5.png",
      artist_id: 5,
    },
    {
      merch_name: "Hoodie Front-H",
      price: 40.99,
      filename: "../Assets/Merch_Photos/Hoodies/HoodieFrontH/HoodieFrontH_5.png",
      artist_id: 5,
    },
    {
      merch_name: "Hoodie Front-V",
      price: 55.99,
      filename: "../Assets/Merch_Photos/Hoodies/HoodieFrontV/HoodieFrontV_5.png",
      artist_id: 5,
    },
    {
      //artist 6
      merch_name: "Hoodie Back",
      price: 40.99,
      filename: "../Assets/Merch_Photos/Hoodies/HoodieBack/HoodieBack_6.png",
      artist_id: 6,
    },
    {
      merch_name: "Hoodie Front-H",
      price: 40.99,
      filename: "../Assets/Merch_Photos/Hoodies/HoodieFrontH/HoodieFrontH_6.png",
      artist_id: 6,
    },
    {
      merch_name: "Hoodie Front-V",
      price: 55.99,
      filename: "../Assets/Merch_Photos/Hoodies/HoodieFrontV/HoodieFrontV_6.png",
      artist_id: 6,
    },
  // ],
  // hat: [
    {
      //artist 1
      merch_name: "Sun Hat",
      price: 12.99,
      filename: "../Assets/Merch_Photos/Hats/SunHat/Sunhat_1.png",
      artist_id: 1,
    },
    {
      merch_name: "Beanie",
      price: 9.99,
      filename: "../Assets/Merch_Photos/Hats/Beanie/Beanie_1.png",
      artist_id: 1,
    },
    {
      merch_name: "Fashion",
      price: 19.99,
      filename: "../Assets/Merch_Photos/Hats/Fashion/Fashion_1.png",
      artist_id: 1,
    },
    {
      merch_name: "Baseball Cap",
      price: 9.99,
      filename: "../Assets/Merch_Photos/Hats/Baseball/Baseball_1.png",
      artist_id: 1,
    },
    {
      //artist 2
      merch_name: "Sun Hat",
      price: 12.99,
      filename: "../Assets/Merch_Photos/Hats/SunHat/Sunhat_2.png",
      artist_id: 2,
    },
    {
      merch_name: "Beanie",
      price: 9.99,
      filename: "../Assets/Merch_Photos/Hats/Beanie/Beanie_2.png",
      artist_id: 2,
    },
    {
      merch_name: "Fashion",
      price: 19.99,
      filename: "../Assets/Merch_Photos/Hats/Fashion/Fashion_2.png",
      artist_id: 2,
    },
    {
      merch_name: "Baseball Cap",
      price: 9.99,
      filename: "../Assets/Merch_Photos/Hats/Baseball/Baseball_2.png",
      artist_id: 2,
    },
    {
      //artist 3
      merch_name: "Sun Hat",
      price: 12.99,
      filename: "../Assets/Merch_Photos/Hats/SunHat/Sunhat_3.png",
      artist_id: 3,
    },
    {
      merch_name: "Beanie",
      price: 9.99,
      filename: "../Assets/Merch_Photos/Hats/Beanie/Beanie_3.png",
      artist_id: 3,
    },
    {
      merch_name: "Fashion",
      price: 19.99,
      filename: "../Assets/Merch_Photos/Hats/Fashion/Fashion_3.png",
      artist_id: 3,
    },
    {
      merch_name: "Baseball Cap",
      price: 9.99,
      filename: "../Assets/Merch_Photos/Hats/Baseball/Baseball_3.png",
      artist_id: 3,
    },
    {
      //artist 4
      merch_name: "Sun Hat",
      price: 12.99,
      filename: "../Assets/Merch_Photos/Hats/SunHat/Sunhat_4.png",
      artist_id: 4,
    },
    {
      merch_name: "Beanie",
      price: 9.99,
      filename: "../Assets/Merch_Photos/Hats/Beanie/Beanie_4.png",
      artist_id: 4,
    },
    {
      merch_name: "Fashion",
      price: 19.99,
      filename: "../Assets/Merch_Photos/Hats/Fashion/Fashion_4.png",
      artist_id: 4,
    },
    {
      merch_name: "Baseball Cap",
      price: 9.99,
      filename: "../Assets/Merch_Photos/Hats/Baseball/Baseball_4.png",
      artist_id: 4,
    },
    {
      //artist 5
      merch_name: "Sun Hat",
      price: 12.99,
      filename: "../Assets/Merch_Photos/Hats/SunHat/Sunhat_5.png",
      artist_id: 5,
    },
    {
      merch_name: "Beanie",
      price: 9.99,
      filename: "../Assets/Merch_Photos/Hats/Beanie/Beanie_5.png",
      artist_id: 5,
    },
    {
      merch_name: "Fashion",
      price: 19.99,
      filename: "../Assets/Merch_Photos/Hats/Fashion/Fashion_5.png",
      artist_id: 5,
    },
    {
      merch_name: "Baseball Cap",
      price: 9.99,
      filename: "../Assets/Merch_Photos/Hats/Baseball/Baseball_1.png",
      artist_id: 5,
    },
    {
      //artist 6
      merch_name: "Sun Hat",
      price: 12.99,
      filename: "../Assets/Merch_Photos/Hats/SunHat/Sunhat_6.png",
      artist_id: 6,
    },
    {
      merch_name: "Beanie",
      price: 9.99,
      filename: "../Assets/Merch_Photos/Hats/Beanie/Beanie_6.png",
      artist_id: 6,
    },
    {
      merch_name: "Fashion",
      price: 19.99,
      filename: "../Assets/Merch_Photos/Hats/Fashion/Fashion_6.png",
      artist_id: 6,
    },
    {
      merch_name: "Baseball Cap",
      price: 9.99,
      filename: "../Assets/Merch_Photos/Hats/Baseball/Baseball_6.png",
      artist_id: 6,
    },
  // ],
  // medium: [
    {
      merch_name: "7 Inch Vinyl",
      price: 19.99,
      filename: "../Assets/Merch_Photos/7inch-vinyl.avif",
    },
    {
      merch_name: "12 Inch Vinyl",
      price: 25.99,
      filename: "../Assets/Merch_Photos/12inch-vinyl.avif",
    },
    {
      merch_name: "CD",
      price: 15.99,
      filename: "../Assets/Merch_Photos/cd.avif",
    },
    {
      merch_name: "Cassette",
      price: 9.99,
      filename: "../Assets/Merch_Photos/cassete.avif",
    },
  // ],
  // sticker: [
    {
      merch_name: "Laptop Decals",
      price: 2.99,
      filename: "../Assets/Merch_Photos/laptop-decals.avif",
    },
    {
      merch_name: "Bumper Sticker",
      price: 5.99,
      filename: "../Assets/Merch_Photos/bumper-stickers.avif",
    },
    {
      merch_name: "CD",
      price: 15.99,
      filename: "../Assets/Merch_Photos/cd.avif",
    },
    {
      merch_name: "Fake Tattoo",
      price: 1.99,
      filename: "../Assets/Merch_Photos/fake-tattoos.avif",
    },
  ];

// let merchData = [];
// let merchTagData = [];
// let tagIdCounter = 1;
// merchIdCounter = 1;

// let artistsNames = ["Mateo And The Black Crows","DJ Nicky","Liam the Kid","The Sound of Kellogg","Passion Pete", "Cholo Goth",]
// for (let artist_id = 1; artist_id<7; artist_id++)
// {
//   for( var key in modelMerch) {
//     for (let i = 0 ; i<modelMerch[key].length; i++){
//       let temp = {
//         merch_name:
//           artistsNames[artist_id - 1] + ": " + modelMerch[key][i].name,
//         price: modelMerch[key][i].price,
//         filename: modelMerch[key][i].filename,
//         category_id: 1,
//         artist_id: artist_id,
//       };
//       merchData.push(temp);
//       let temp2 = {
//         merch_id: merchIdCounter,
//         tag_id: tagIdCounter,
//       };
//       merchTagData.push(temp2);
//       merchIdCounter++;
//     }
//     tagIdCounter++;
//   }
//   tagIdCounter = 1;
// }
// const seedMerch = async () => {
//   await Merch.bulkCreate(merchData);
// };
const seedMerch = () => Merch.bulkCreate(merchData);

module.exports = { seedMerch };

// DONE //
