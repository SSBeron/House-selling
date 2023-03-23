const express = require("express");
const router = express.Router();
const housesData = require("../data/housesData");

router.get("/catalog", (req, res) => {
  res.json(housesData);
});

router.post("/catalog/create-new", (req, res) => {
  const { adress, price } = req.body;

  let newReq = {
    adress: adress,
    beds: 3,
    baths: 2,
    sqFt: "2,000",
    price: price,
    sold: false,
    picture: "./img/image1.png",
    description:
      "So much potential is in this corner property 3 bedroom detached colonial home in the beautiful and residential area of Sunnyside. It is a legal two family home which has been converted and being used as a one family. ",
  };
  housesData.push(newReq);
  res.json({ message: "success", payload: housesData });
});

module.exports = router;
// {
//       adress: "375 Little Clove Road ",
//       beds: 3,
//       baths: 2,
//       sqFt: "2,000",
//       price: "698,900",
//       sold: false,
//       picture: "./img/image1.png",
//       description:
//         "So much potential is in this corner property 3 bedroom detached colonial home in the beautiful and residential area of Sunnyside. It is a legal two family home which has been converted and being used as a one family. ",
//     },
