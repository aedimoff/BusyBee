/* eslint-disable no-undef */
import { getDirections } from "../../actions/directions_actions";
import "./map.scss";
import mapStyles from "./mapStyles";

// const favs = [
//   { location: { lat: 33.830296, lng: -116.545296 }, stopover: true },
//   { location: { lat: 36.169941, lng: -115.139832 }, stopover: true },
// ];

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
var directionsService;
var directionsRenderer;
const calcRoute = (props) => {
  console.log("LEGSLEGSLEGS", props)

  const selectedFavorites = (selectedArray) => {
    let selected = [];
    for (let i = 0; i < selectedArray.length; i++) {
      let fave = selectedArray[i];
      //  if (fave.selected) {
      selected.push({
        location: {
          lat: fave.geometry.location.lat,
          lng: fave.geometry.location.lng,
        },
        stopover: true,
      });
      //  }
    }
    return selected;
  }; 

  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  map = new window.google.maps.Map(document.getElementById("map"), options);
  directionsRenderer.setMap(map);
  let directionsRequest = {
    origin: props.currentLocation,
    destination: props.currentLocation,
    travelMode: "DRIVING",
    drivingOptions: {
      departureTime: new Date(Date.now()),
      trafficModel: "bestguess",
    },
    //   unitSystem: google.maps.UnitSystem.METRIC,
    waypoints: selectedFavorites(props.selected),
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
