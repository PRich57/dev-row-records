const { Album } = require("../models");

const albumData = [
    //Mateo and The Black Crows
    {
      artist_id: 1, 
      album_name: "breathe",
      filename: "../Assets/Album_Photos/breathe.avif"
    },
    {
      artist_id: 1, 
      album_name: "Dream Big",
      filename: "../Assets/Album_Photos/dream_big.avif"
    },
    {
      artist_id: 1, 
      album_name: "Ideas Unheard",
      filename: "../Assets/Album_Photos/ideas_go_unheard.avif"
    },
    {
      artist_id: 1, 
      album_name: "Lost Track",
      filename: "../Assets/Album_Photos/lost_track.avif"
    },
    //DJ Nicky
    {
      artist_id: 2, 
      album_name:"Microscopic Love",
      filename: "../Assets/Album_Photos/microscopic_love.avif"
    },
    {
      artist_id: 2, 
      album_name: "Predatory",
      filename: "../Assets/Album_Photos/predatory.avif"
    },
    {
      artist_id: 2, 
      album_name: "Red Moon Red Life",
      filename: "../Assets/Album_Photos/red_moon_red_life.avif"
    },
    {
      artist_id: 2, 
      album_name: "Spooky",
      filename: "../Assets/Album_Photos/spooky_season.avif"
    },
    //Liam the Boy
    {
      artist_id: 3, 
      album_name: "I Am Liam",
      filename: "../Assets/Album_Photos/i_am_liam.avif"
    },
    {
      artist_id: 3, 
      album_name: "Liam At Twilight",
      filename: "../Assets/Album_Photos/liam_at_twilight.avif"
    },
    {
      artist_id: 3, 
      album_name: "Liam's: Christmas Hits",
      filename: "../Assets/Album_Photos/christmas_hits.avif"
    },
    {
      artist_id: 3, 
      album_name: "Toy Story 6: Soundtrack",
      filename: "../Assets/Album_Photos/toy_story_6_soundtrack.avif"
    },
    //The Sound of Kellogg
    {
      artist_id: 4, 
      album_name: "Star Child",
      filename: "../Assets/Album_Photos/star_child.avif"
    },
    {
      artist_id: 4, 
      album_name: "Stormy Days",
      filename: "../Assets/Album_Photos/stormy_days.avif",
    },
    {
      artist_id: 4, 
      album_name: "Sunken Vibes",
      filename: "../Assets/Album_Photos/sunken_vibes.avif",
    },
    {
      artist_id: 4, 
      album_name: "The Gaze",
      filename: "../Assets/Album_Photos/the_gaze.avif",
    },
    //Passion Pete
    {
      artist_id: 5, 
      album_name: "Togetherness",
      filename: "../Assets/Album_Photos/togetherness.avif"
    },
    {
      artist_id: 5, 
      album_name: "Web of Lies",
      filename: "../Assets/Album_Photos/web_of_lies.avif"
    },
    {
      artist_id: 5, 
      album_name: "What Wall",
      filename: "../Assets/Album_Photos/what_wall.avif"
    },
    {
      artist_id: 5, 
      album_name: "Passion",
      filename: "../Assets/Album_Photos/passion.avif"
    },
    // Cholo Goth Albums
    {
      artist_id: 6,
      album_name: "Young Gods",
      filename: "../Assets/Album_Photos/young_gods.png"
    },
    {
      artist_id: 6,
      album_name: "Black Leather",
      filename: "../Assets/Album_Photos/black_leather.png",
    },
    {
      artist_id: 6, 
      album_name: "Wild Roses",
      filename: "../Assets/Album_Photos/wild_roses.PNG",
    },
    {
      artist_id: 6, 
      album_name: "Baptism of Thieves",
      filename: "../Assets/Album_Photos/baptism_of_theives.PNG",
    },
    {
      artist_id: 6, 
      album_name: "Cursed Be Thy Blessings",
      filename: "../Assets/Album_Photos/cursed_be_thy_blessings.PNG",
    },
  // Closed Tear Albums //
  // {
  //   artist_id: 7,
  //   album_name: "Lie Awake",
  //   filename: "../Assets/Album_Photos/lie_awake.PNG"
  // },
  // {
  //   artist_id: 7,
  //   album_name: "Nada Es Para Siempre",
  //   filename: "../Assets/Album_Photos/nada_es_para_siempra.PNG"
  // },
  // {
  //   artist_id: 7,
  //   album_name: "Time",
  //   filename: "../Assets/Album_Photos/time.PNG"
  // },
  // {
  //   artist_id: 7,
  //   album_name: "Tired",
  //   filename: "../Assets/Album_Photos/tired.PNG" 
  // },
  // Dave Albums //
  // {
  //   artist_id: 8,
  //   album_name: "Thirteen Hundred (EP - 2017)",
  //   filename: "../Assets/Album_Photos/george-strait.jpg"
  // },
  // {
  //   artist_id: 8,
  //   album_name: "Lucky Seven (EP - 2018)",
  //   filename: "../Assets/Album_Photos/gorillaz.jpg"
  // },
  // {
  //   artist_id: 8,
  //   album_name: "Never Better (2020)",
  //   filename: "../Assets/Album_Photos/led_zeppelin.png"
  // },
  // {
  //   artist_id: 8,
  //   album_name: "Millstone (Single - 2020)",
  //   filename: "../Assets/Album_Photos/led_zeppelin.png"
  // },
  // {
  //   artist_id: 8,
  //   album_name: "Hindsight (Single - 2022)",
  //   filename: "../Assets/Album_Photos/led_zeppelin.png"
  // },
  // {
  //   artist_id: 8,
  //   album_name: "Elegy (Single - 2023)",
  //   filename: "../Assets/Album_Photos/led_zeppelin.png"
  // },
  // Demon Compass

  //Provoker

  
];

const seedAlbum = async () => {
  await Album.bulkCreate(albumData);
};

module.exports = seedAlbum;

// Done //
