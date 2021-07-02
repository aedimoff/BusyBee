/* eslint-disable no-undef */
import React from "react";
import "./map.scss";
import mapStyles from "./mapStyles";


const options = {
    styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
  zoom: 14,
  center: {
    lat: 36.974117,
    lng: -122.030792,
  },
  height: "100vh",
  width: "100vw",
};
var map;
const calcRoute = (props) => {
      console.log("props in calcRoute", props);

  let directionsService = new google.maps.DirectionsService();
  var directionsRenderer = new google.maps.DirectionsRenderer();
  map = new window.google.maps.Map(document.getElementById("map"), options);
  directionsRenderer.setMap(map);
  let directionsRequest = {
    origin: props.currentLocation,
    destination: new window.google.maps.LatLng({
      lat: 33.830296,
      lng: -116.545296,
    }),
    travelMode: "DRIVING",
    drivingOptions: {
      departureTime: new Date(Date.now()),
      trafficModel: "bestguess",
    },
    //   unitSystem: google.maps.UnitSystem.METRIC,
    // waypoints[]: DirectionsWaypoint,
    // optimizeWaypoints: Boolean,
    provideRouteAlternatives: true,
    region: "US",
  };

  directionsService.route(directionsRequest, function(response, status) {
      if (status == 'OK') {
        directionsRenderer.setDirections(response);
      }
    });
}

export default calcRoute;
