const express = require("express");
const router = express.Router();
import { getPlaceInfoFromGoogle } from "../../frontend/src/util/map_api_util";

router.get(
  "/getplace",
  (req, res) => {
      getPlaceInfoFromGoogle(req)
      console.log("consolelog", req, res)
        .then((res) => {
            res.json({
                name: req.name,
                location: req.location
            })
        })
  }
);