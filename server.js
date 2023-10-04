const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const Category = require("./models/Category");
const Merch = require("./models/Merch");
const Artist = require("./models/Artist");

const routes = require("./controllers");
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: process.env.DB_SCRT,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

Category.sync()
  .then(() => {
    // After Category is synced, sync the Artist model (assuming it also has no dependencies)
    return Artist.sync();
  })
  .then(() => {
    // After Artist is synced, sync the Merch model since it references both Category and Artist
    return Merch.sync();
  })
  // Add additional models here if necessary, following the dependency order
  .then(() => {
    // Start the server only after all necessary models have been synced
    app.listen(PORT, () => console.log("Now listening"));
  })
  .catch((error) => {
    console.error("Error during model synchronization:", error);
  });
