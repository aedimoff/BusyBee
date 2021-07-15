/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import "./map.scss";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import Search from "./search";
import Locate from "./locate";
import mapStyles from "./mapStyles";
import Spinner from "../spinner/spinner";
import Directions from "./directions";
import DirectionsContainer from "./directions_container";

require("dotenv").config();

const MapContainer = (props) => {
  const defaultCenter = props.currentLocation 

  const mapContainerStyle = {
    width: "100vw",
    height: "84vh",
  };

  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
  };
  
  const [center, setCenter] = useState(defaultCenter)
  const [mapstate, setMap] = useState(true)

  // const [center, setCenter] = useState(defaultCenter);

  const libraries = ["places"];

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries,
  });

  const mapRef = React.useRef();
  const onMapLoad = (map) => {
    mapRef.current = map;
  };

  //set zoom options for map
  const panTo = ({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(20);
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
  var map;
  var directionsRenderer;
  const calcRoute = (location, selectedFavorites) => {
    directionsRenderer = new google.maps.DirectionsRenderer();
    var directionsService = new google.maps.DirectionsService();
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
  };

  //create hook to re-render map on route clear



  const clearRoute = () => {
    directionsRenderer.setMap(null);
    props.clearDirections();
  };

  //sets center user's current location
  useEffect(() => {
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
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div className="map-container">
      {props.currentLocation ? (
        <div className="map" id="map">
          {props.userId ? <Search panTo={panTo} /> : ""}
          <Locate panTo={panTo} />
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={14}
            center={center}
            options={options}
            onClick={(e) => {
              if (e.placeId) {
                props.openModal("marker", { placeId: e.placeId });
              }
            }}
            onLoad={onMapLoad}
          />
        </div>
      ) : (
        <Spinner />
      )}
    {props.userId ? (
    <div className="map-buttons">
        <button
          onClick={() =>
            calcRoute(props.currentLocation, selectedFavorites(props.selected))
          }
        >
          Generate Route
        </button>
        <button onClick={() => clearRoute()}>Clear Route</button>
      </div>) : ""}
    </div>
  );
};

export default MapContainer;
