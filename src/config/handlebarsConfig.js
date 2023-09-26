// Handlebars configuration
const exphbs = require("express-handlebars");
const handlebars = require("express-handlebars");

const handlebarsConfig = (app) => {
  app.engine("hbs", exphbs({ extname: "hbs" }));
  app.set("view engine", "hbs");
  app.set("views", "./src/views");
};

module.exports = handlebarsConfig;
