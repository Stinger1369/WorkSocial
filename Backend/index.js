const config = require("./config/config");
const startServer = require("./config/server");

startServer(config.port);
