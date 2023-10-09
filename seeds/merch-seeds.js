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
let modelMerch = 
{
  shirt:
           [ {
              name: "Relaxed Fit",
              price: 20.99,
              filename: '../Assets/Merch_Photos/shirt-white.avif'
             },
             {
              name: "Slim Fit",
              price: 23.99,
              filename: '../Assets/Merch_Photos/shirt-white-f.avif'
             },
             {
              name: "Chest Logo",
              price: 25.99,
              filename: '../Assets/Merch_Photos/shirt-pink.avif',
             },
             {
              name: "Exercise Fit",
              price: 29.99,
              filename: '../Assets/Merch_Photos/shirt-blue-f.avif',
             },
           ],
  hoodie: [ {
              name: "Hoodie Back",
              price: 40.99,
              filename: '../Assets/Merch_Photos/hoodie-yellow.avif'
             },
             {
              name: "Hoodie Front-H",
              price: 40.99,
              filename: '../Assets/Merch_Photos/hoodie-white.avif'
             },
             {
              name: "Hoodie Front-V",
              price: 55.99,
              filename: '../Assets/Merch_Photos/hoodie-black.avif',
             },
           ],
  hat:    [
            {
              name: "Sun Hat",
              price: 12.99,
              filename: '../Assets/Merch_Photos/sun-hat.avif',
            },
            {
              name: "Beanie",
              price: 9.99,
              filename: '../Assets/Merch_Photos/beanie.avif'
            },
            {
              name: "Fashion",
              price: 19.99,
              filename: '../Assets/Merch_Photos/hat-style.avif',
            },
            {
              name: "Baseball Cap",
              price: 9.99,
              filename: '../Assets/Merch_Photos/bball-cap.avif',
            }
          ],
  medium: [
            {
              name: "7 Inch Vinyl",
              price: 19.99,
              filename: '../Assets/Merch_Photos/7inch-vinyl.avif',
            },
            {
              name: "12 Inch Vinyl",
              price: 25.99,
              filename: '../Assets/Merch_Photos/12inch-vinyl.avif'
            },
            {
              name: "CD",
              price: 15.99,
              filename: '../Assets/Merch_Photos/cd.avif',
            },
            {
              name: "Cassette",
              price: 9.99,
              filename: '../Assets/Merch_Photos/cassete.avif',
            }
            ],
  sticker:  [
              {
                name: "Laptop Decals",
                price: 2.99,
                filename: '../Assets/Merch_Photos/laptop-decals.avif',
              },
              {
                name: "Bumper Sticker",
                price: 5.99,
                filename: '../Assets/Merch_Photos/bumper-stickers.avif'
              },
              {
                name: "CD",
                price: 15.99,
                filename: '../Assets/Merch_Photos/cd.avif',
              },
              {
                name: "Fake Tattoo",
                price: 1.99,
                filename: '../Assets/Merch_Photos/fake-tattoos.avif',
              }
              ],
  
  
}
let merchData = [];
let merchTagData = [];
let tagIdCounter = 1;
merchIdCounter = 1;
// for (var key in modelMerch){
//   console.log(modelMerch[key])
// }
let artistsNames = ["Mateo & The Black Crows","DJ Nicky","Liam the Boy","The Sound of Kellogg","Passion Pete", "Cholo Goth",]
for (let artist_id = 1; artist_id<7; artist_id++)
{
  for( var key in modelMerch) {
    for (let i = 0 ; i<modelMerch[key].length; i++){
      let temp = {
        merch_name: artistsNames[artist_id-1] + ": " + modelMerch[key][i].name,
        price: modelMerch[key][i].price,
        filename: modelMerch[key][i].filename,
        category_id: 1,
        artist_id: artist_id
      } 
      merchData.push(temp)
      let temp2 = {
        merch_id: merchIdCounter,
        tag_id: tagIdCounter,
      }
      merchTagData.push(temp2)
      merchIdCounter++;
    }
    tagIdCounter++;
  }
  tagIdCounter = 1;
}
console.log(merchData);
console.log(merchTagData);
const seedMerch = async () => {
  await Merch.bulkCreate(merchData);
};

module.exports = {seedMerch, merchTagData};

// DONE //
