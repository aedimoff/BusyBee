/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import "./map.scss";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import Search from "./search";
import Locate from "./locate";
import calcRoute from "./route";
import mapStyles from "./mapStyles";


require("dotenv").config();


const MapThing = (props) => {
  const defaultCenter = 
  props.currentLocation ? props.currentLocation : {
    lat: 37.774929,
    lng: -122.419418,
  };
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

  const libraries = ['places']


  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries,
  });

  const { openModal } = props;

  const mapRef = React.useRef();
  const onMapLoad = (map) => {
    mapRef.current = map;
  };

  const panTo = ({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(20);
  };

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
    });
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        if (position) {
          const center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setCenter(center);
          props.setUserCurrentLocation(center)
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
      <div className="map" id="map">
        <Search panTo={panTo} />
        <Locate panTo={panTo} />
        <button
          onClick={() => calcRoute(props.currentLocation, selectedFavorites(props.selected))}
        >
          Test Route
        </button>

        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={14}
          center={center}
          options={options}
          onClick={(e) => {
            if (e.placeId) {
              openModal("marker", { placeId: e.placeId });
            }
          }}
          onLoad={onMapLoad}
        />
      </div>
    </div>
  );

};

export default MapThing;
