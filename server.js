const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const routes = require("./controllers");
const sequelize = require("./config/connection");
const setLoginStatus = require("./utils/setLoginStatus");

const app = express();
const PORT = process.env.PORT || 3001;

const ONE_DAY = 24 * 60 * 60 * 1000;
const sess = {
  secret: process.env.DB_SCRT,
  cookie: {
    maxAge: ONE_DAY,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({});

// helper function for handlebars: If the id === userId value then display yellow star
  hbs.handlebars.registerHelper("calculation", function(value1, favorites, typeId) {
    for (let x = 0; x<favorites.length; x++){
      if (value1 == favorites[x][typeId]) {
        return "yellow"
      }
    }
      return "white"
    });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(setLoginStatus);

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
