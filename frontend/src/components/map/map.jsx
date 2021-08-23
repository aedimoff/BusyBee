/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import "./map.scss";
import {
  GoogleMap,
  useLoadScript,
  StandaloneSearchBox,
} from "@react-google-maps/api";
import Locate from "./locate";
import mapStyles from "./mapStyles";
import Spinner from "../spinner/spinner";
import * as MapAPIUtil from "../../util/map_api_util";

// require("dotenv").config();

const libraries = ["places"];

const Map = (props) => {
  const defaultCenter = props.currentLocation;

  const mapContainerStyle = {
    width: "100vw",
    height: "84vh",
  };

  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
  };

  const [center, setCenter] = useState(defaultCenter);
  const [mapRef, setMapRef] = useState(true);
  const [count, setCount] = useState(0);

  const routeButtons = [
    <button
      onClick={() => {
        calcRoute(props.currentLocation, selectedFavorites(props.selected), "calc");
        setCount(count + 1);
      }}
    >
      Generate Route
    </button>,
    <button
      onClick={() => {
        clearRoute();
        setCount(count - 1);
      }}
    >
      Clear Route
    </button>,
  ];

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries,
  });

  // const mapRef = React.useRef();
  // const onMapLoad = (map) => {
  //   mapRef.current = map;
  // };

  //set zoom options for map
  const panTo = ({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  };

  //creates object literal from lat/lng of all currently selected addresses
  const selectedFavorites = (selectedArray) => {
    let selected = [];
    for (let i = 0; i < selectedArray.length; i++) {
      let fave = selectedArray[i];
      selected.push({
        location: {
          lat: fave.geometry.location.lat,
          lng: fave.geometry.location.lng,
        },
        stopover: true,
      });
    }
    return selected;
  };

  //renders route on map and generates all direction steps
  var directionsRenderer;
  var directionsService;
  const calcRoute = (location, selectedFavorites, type) => {

    if (window.directionsRenderer == null) {
      window.directionsRenderer = new google.maps.DirectionsRenderer();
      window.directionsService = new google.maps.DirectionsService();
    }

    directionsRenderer = window.directionsRenderer
    directionsService = window.directionsService

    directionsRenderer.setMap(mapRef);
    if(type === "calc") {
      let directionsRequest = {
        origin: location,
        destination: location,
        travelMode: "DRIVING",
        drivingOptions: {
          departureTime: new Date(Date.now()),
          trafficModel: "bestguess",
        },
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
      });
    } else {
      // directionsRenderer.setMap(null);
      directionsRenderer.set('directions', null);
    }
  };

  //create hook to re-render map on route clear

  const clearRoute = () => {
    window.directionsRenderer.setMap(null);
    
  };

  const getCenter = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        if (position) {
          const center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setCenter(center);
          props.setUserCurrentLocation(center);
        } else {
          setCenter(defaultCenter);
        }
      });
    } else {
      setCenter(defaultCenter);
    }
  };

  //sets center user's current location
  useEffect(() => {
    getCenter();
  });

  const viewBusiness = (placeId) => {
    MapAPIUtil.getPlaceInfo(placeId)
      .then((res) => {
        return props.setBusinessToState(res.data.result);
      })
      .catch((err) => console.log(err));
  };

  const [searchBox, setSearchBox] = useState(null);

  let markers = [];
  const onPlacesChanged = () => {
    const places = searchBox.getPlaces();
    if (places.length == 0) return;

    //clears out old markers
    markers.forEach((marker) => {
      marker.setMap(null);
    });
    markers = [];

    const bounds = new google.maps.LatLngBounds();

    places.forEach((place) => {
      if (!place.geometry || !place.geometry.location) {
        console.log("Returned place contains no geometry");
        return;
      }

      markers.push(
        new google.maps.Marker({
          position: place.geometry.location,
          title: place.name,
        })
      );

      const geocoder = new google.maps.Geocoder();

      markers.forEach((marker) => {
        marker.setMap(mapRef);
        marker.addListener("click", (e) => {
          let latLng = e.latLng.toJSON();

          geocoder.geocode({ location: latLng }, function (results, status) {
            if (results[0].place_id) {
              let placeId = results[0].place_id;
              props.openModal("marker", { placeId: placeId });
              viewBusiness(placeId);
            }
          });
        });
      });

      if (place.geometry.viewport) {
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    mapRef.fitBounds(bounds);
  };
  const onSearchLoad = (ref) => {
    setSearchBox(ref);
  };

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";
  return (
    <div className="map-container">
      <div className="map" id="map">
        <Locate panTo={panTo} />
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={14}
          center={center}
          options={options}
          onClick={(e) => {
            if (e.placeId) {
              props.openModal("marker", { placeId: e.placeId });
              viewBusiness(e.placeId);
            }
          }}
          onLoad={(map) => setMapRef(map)}
        >
          <StandaloneSearchBox
            onLoad={onSearchLoad}
            onPlacesChanged={onPlacesChanged}
          >
            <input
              type="text"
              placeholder="Search for a business"
              id="search-bar"
            />
          </StandaloneSearchBox>
        </GoogleMap>
      </div>
      {props.userId ? (
        <div className="map-buttons">{routeButtons[count]}</div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Map;
