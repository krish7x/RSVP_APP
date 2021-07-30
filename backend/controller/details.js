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
      //request body
      var name = req.body.name;
      var age = req.body.age;
      var dob = req.body.dob;
      var address = req.body.address;
      var profession = req.body.profession;
      var locality = req.body.locality;
      var numberOfGuests = req.body.numberOfGuests;

      var result = {
        name: name,
        age: age,
        dob: dob,
        address: address,
        profession: profession,
        locality: locality,
        numberOfGuests: numberOfGuests,
      };

      await detailsModel.insertMany(result, (err, data) => {
        if (err) {
          logger.error(err);
        }
      });

      res.send(result);
    } catch (error) {
      logger.error(error);
    }
  },
};

module.exports = controller;
