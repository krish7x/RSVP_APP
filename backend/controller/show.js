/**
 * @author krish
 */

const detailsModel = require("../models/details");

var log4js = require("log4js");
var logger = log4js.getLogger();
logger.level = "debug";

let controller = {
  getData: async (req, res) => {
    try {
      await detailsModel.find().exec((err, data) => {
        if (err || !data) {
          return res.status(400).json({
            error: "No datas were found in a DB!",
          });
        }
        res.json(data);
      });
    } catch (error) {
      logger.error(error);
    }
  },
};

module.exports = controller;
