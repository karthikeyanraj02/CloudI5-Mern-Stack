const express = require("express");
const { clientDetails } = require("../controller/clientDetailsController");

const Routes = express.Router();

Routes.route("/register").post(clientDetails);

module.exports = Routes;
