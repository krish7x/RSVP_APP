/**
 * @author krish
 */

const express = require("express");
const mongo = require("./config/mongo");
const dotenv = require("dotenv");
const cors = require("cors");
const route = require("./routes/details");

dotenv.config();
const app = express();

//http middlewares
app.use(express.static("public"));
app.use(express.json());

//mongo connection
mongo();

//logger
var log4js = require("log4js");
var logger = log4js.getLogger();
logger.level = "debug";

//cors
app.use(cors());
app.use("/api", route);

const PORT = 8000;

app.listen(PORT, () => {
  logger.info("Listening on port", PORT);
});
