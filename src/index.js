// Imports
const express = require("express");
const handlebarsConfig = require("./config/handlebarsConfig");
const expressConfig = require("./config/expressConfig");
const { PORT } = require("./constants");
const routers = require("./router")

// Local variables
const app = express();

// Config
expressConfig(app);
handlebarsConfig(app);


// Routing
app.use(routers)

// Listener
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
