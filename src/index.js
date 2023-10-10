// Imports
const express = require("express");

const handlebarsConfig = require("./config/handlebarsConfig");
const expressConfig = require("./config/expressConfig");
const dbConnect = require("./config/dbConfig");
const errorHandler = require("./middlewares/errorHandlerMiddleware");

const { PORT } = require("./constants");
const routers = require("./router");

// Local variables
const app = express();

// Config
expressConfig(app);
handlebarsConfig(app);

//Connecting to the database
dbConnect()
  .then(() => console.log("Successfully connected to DB!"))
  .catch((err) => console.log(`Error while connecting to DB: ${err}`));

// Routing
app.use(routers);
app.use(errorHandler);

// Listener
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
