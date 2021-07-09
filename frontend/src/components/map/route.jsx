/* eslint-disable no-undef */
import { getDirections } from "../../actions/directions_actions";
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

const calcRoute = (location, selectedFavorites) => {

  var directionsService = new google.maps.DirectionsService();
  var directionsRenderer = new google.maps.DirectionsRenderer();
  map = new window.google.maps.Map(document.getElementById("map"), options);
  directionsRenderer.setMap(map);
  let directionsRequest = {
    origin: location,
    destination: location,
    travelMode: "DRIVING",
    drivingOptions: {
      departureTime: new Date(Date.now()),
      trafficModel: "bestguess",
    },
    //   unitSystem: google.maps.UnitSystem.METRIC,
    waypoints: selectedFavorites,
    optimizeWaypoints: true,
    provideRouteAlternatives: true,
    region: "US",
  };
  directionsService.route(directionsRequest, function (response, status) {
    if (status === "OK") {
      const legs = response.routes[0].legs;
      props.getDirections(legs);
      directionsRenderer.setDirections(response);
    }
  })
};

export default calcRoute;
