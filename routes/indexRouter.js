const express = require("express");
const router = express.Router();
const housesData = require("../data/housesData");

router.get("/", (req, res) => {
  res.render("home", { websiteName: "Home Sweet Home" });
});

router.get("/catalog", (req, res) => {
  res.render("catalog", {
    allHouses: housesData,
    websiteName: "Home Sweet Home",
  });
});

router.get("/about", (req, res) => {
  res.render("about", {
    websiteName: "Home Sweet Home",
  });
});

module.exports = router;
