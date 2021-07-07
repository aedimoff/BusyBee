<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import "./map.scss";
=======
/* eslint-disable no-undef */
import React from "react";
import "./map.scss";
import {
  GoogleMap,
  useLoadScript,
  Marker
} from "@react-google-maps/api";
>>>>>>> 6677f4df082843901e8eed417571858592cef86d

import Search from "./search";
import Locate from "./locate";
import calcRoute from "./route";
import mapStyles from "./mapStyles";
import * as MapAPIUtil from "../../util/map_api_util";
import Spinner from "../spinner/spinner";
// import CustomMarker from "./customMarker";

import { GoogleMap, useLoadScript } from "@react-google-maps/api";

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

  //   { location: { lat: 33.830296, lng: -116.545296 }, stopover: true },
  // { location: { lat: 36.169941, lng: -115.139832 }, stopover: true },

const selectedFavorites = favorites => {
   let selected = [];
   for (let i = 0; i < favorites.length; i++) {
     let fave = favorites[i];
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
 } 
  
  const [center, setCenter] = useState(defaultCenter)
  // console.log("CENTER in map state", center);


  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries: ["places"],
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

  const getFavorite = (placeId) => {
    MapAPIUtil.getPlaceInfo(placeId)
      .then((res) => {
        return props.addFavorite(res.data.result, props.userId);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        if (position) {
          // console.log("in position branch");
          const center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setCenter(center);
          props.setUserCurrentLocation(center)
        } else {
          // console.log("in position else");
          setCenter(defaultCenter);
        }
      });
    } else {
      // console.log("in else");
      setCenter(defaultCenter);
    }
<<<<<<< HEAD
  });
=======
    function fixInfoWindow() {
      //Here we redefine set() method.
      //If it is called for map option, we hide InfoWindow, if "noSupress" option isnt true.
      //As Google doesn't know about this option, its InfoWindows will not be opened.
      var set = google.maps.InfoWindow.prototype.set;
      google.maps.InfoWindow.prototype.set = function (key, val) {
          if (key === 'map') {
              if (!this.get('noSupress')) {
                  console.log('This InfoWindow is supressed. To enable it, set "noSupress" option to true');
                  return;
              }
          }
          set.apply(this, arguments);
      }
  }

  // function disablePOIInfoWindow(){
  //   var fnSet = google.maps.InfoWindow.prototype.set;
  //   google.maps.InfoWindow.prototype.set = function () {
  //   };
  // }

>>>>>>> 6677f4df082843901e8eed417571858592cef86d

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";


  return (
    <div className="map-container">
        <div className="map" id="map">
          <Search panTo={panTo} />
          <Locate panTo={panTo} />
          <button onClick={() => calcRoute(props.currentLocation, selectedFavorites(props.favorites))}>Test Route</button>

          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={14}
            center={center}
            options={options}
            onClick={(e) => {
              if (e.placeId) {
                openModal("marker", { placeId: e.placeId })
              }
            }}

            onLoad={onMapLoad}
          />
        </div>  
    </div>
  )

};

export default MapThing;
