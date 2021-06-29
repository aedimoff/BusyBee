import React from "react";
import "./map.scss";
import { GoogleMap,
        useLoadScript,
        DirectionsRenderer,
        DirectionsService
} from "@react-google-maps/api";

import Search from "./search";
import Locate from "./locate";
import mapStyles from "./mapStyles";
import * as MapAPIUtil from "../../util/map_api_util";
import Spinner from "../spinner/spinner";



let map = document.getElementById("map");
let directionsService = new google.maps.DirectionsService();
let directionsDisplay = new google.maps.DirectionsRenderer();
directionsDisplay.setMap(map);
function calcRoute() {
    let directionsRequest = {
      origin: "36.974117,-122.030792",
      destination: "33.830296,-116.545296",
      travelMode: "DRIVING",
      drivingOptions: {
        departureTime: new Date(Date.now() + N),
        trafficModel: "bestguess",
      },
      unitSystem: google.maps.UnitSystem.METRIC,
      // waypoints[]: DirectionsWaypoint,
      // optimizeWaypoints: Boolean,
      provideRouteAlternatives: true,
      region: "US",
    };

    directionsService.route(directionsRequest, (result, status) => {
        if (status == google.maps.DirectionsStatus.OK) {
            console.log(result);
        }
    })
};
calcRoute();