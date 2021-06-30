/* eslint-disable no-undef */
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
function calcRoute() {
  let directionsService = new google.maps.DirectionsService();
  var directionsRenderer = new google.maps.DirectionsRenderer();
  map = new window.google.maps.Map(document.getElementById("map"), options);
  console.log("IM THE MAP", map);
  directionsRenderer.setMap(map);
  let directionsRequest = {
    origin: new window.google.maps.LatLng({
      lat: 36.974117,
      lng: -122.030792,
    }),
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
//  const DirectionsService = new window.google.maps.DirectionsService();

// const directionsRequest = ({DirectionsService, origin, destination}) => {
//     new Promise((resolve, reject) => {
//         DirectionsService.route(
//           {
//             origin: new window.google.maps.LatLng({
//               lat: 36.974117,
//               lng: -122.030792,
//             }),
//             destination: new window.google.maps.LatLng({
//               lat: 33.830296,
//               lng: -116.545296,
//             }),
//             travelMode: window.google.maps.TravelMode.DRIVING,
//           },
//           (result, status) => {
//             if (status === window.google.maps.DirectionsStatus.OK) {
//               resolve(result);
//             } else {
//               reject(status);
//             }
//           }
//         );
//     })
// }

// const DIRECTION_REQUEST_DELAY = 300;

// const delay = (time) =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, time);
//   });

// const [directions, setDirections] = React.useState({});

// const getDirections = (directions)
