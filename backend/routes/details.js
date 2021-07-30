/**
 * @author krish
 */

const express = require("express");
const router = express.Router();

const save = require("../controller/details");
const show = require("../controller/show");

router.post("/save", save.getData);
router.get("/show", show.getData);

module.exports = router;
