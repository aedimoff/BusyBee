import React, { useEffect, useState } from "react";
import "./map.scss";

import Search from "./search";
import Locate from "./locate";
import calcRoute from "./route";
import mapStyles from "./mapStyles";
import * as MapAPIUtil from "../../util/map_api_util";
import Spinner from "../spinner/spinner";

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
  
  const [center, setCenter] = useState(defaultCenter)
  // console.log("CENTER in map state", center);


  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries: ["places"],
  });

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
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  

  const display = isLoaded ? (
    <div className="map" id="map">
      <Search panTo={panTo} />
      <Locate panTo={panTo} />
      <button onClick={calcRoute}>Test Route</button>

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={center}
        options={options}
        onClick={(e) => {
          getFavorite(e.placeId);
        }}
        onLoad={onMapLoad}
      />
    </div>
  ) : (
    <Spinner />
  );

  return <div className="map-container">{display}</div>;
};

export default MapThing;
