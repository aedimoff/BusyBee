const express = require("express");
const router = express.Router();
const axios = require('axios');


router.post(
  "/getplace",
  (req, res) => {
    getPlaceInfoFromGoogle(req.body.params.placeId).then(googleResponse => {
      res.status(200).json(googleResponse.data)
    }).catch(err => {
      console.log(err)
    })
  }
);

const getPlaceInfoFromGoogle = (placeId) => {
    console.log("this is API UTIL GOOGLE", placeId)

    return axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=formatted_address,geometry,rating,name,opening_hours,place_id,types,website&key=${process.env.REACT_APP_MAPS_API_KEY}`, {}
    );
}

module.exports = router;