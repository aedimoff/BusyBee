const express = require("express");
const router = express.Router();
const axios = require('axios');


router.post(
  "/getplace",
  (req, res) => {

 
    console.log("In /getPlace express endpoint", req.body.params.placeId)
      getPlaceInfoFromGoogle(req.body.params.placeId).then(googleResponse => {
        console.log("Returned from google", googleResponse.data)
        res.status(200).json(googleResponse.data)
      }).catch(err => {
        console.log("Error fetching from google (in express endpoint", err)
      })
  }
);

const getPlaceInfoFromGoogle = (placeId) => {
    console.log("this is API UTIL GOOGLE", placeId)

    return axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=formatted_address,rating,name,opening_hours,place_id,types,website&key=${process.env.REACT_APP_MAPS_API_KEY}`, {}
    );
}

module.exports = router;