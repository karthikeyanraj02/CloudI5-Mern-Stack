const express = require("express");
const { getFaq } = require("../controller/faqController");

const Routes = express.Router();

Routes.route("/getfaq").get(getFaq);

module.exports = Routes;
