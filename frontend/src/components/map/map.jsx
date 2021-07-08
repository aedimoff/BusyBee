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

  //   { location: { lat: 33.830296, lng: -116.545296 }, stopover: true },
  // { location: { lat: 36.169941, lng: -115.139832 }, stopover: true },
  
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

  // const getFavorite = (placeId) => {
  //   MapAPIUtil.getPlaceInfo(placeId)
  //     .then((res) => {
  //       return props.addFavorite(res.data.result, props.userId);
  //     })
  //     .catch((err) => console.log(err));
  // };

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
          <button onClick={calcRoute}>Test Route</button>

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
