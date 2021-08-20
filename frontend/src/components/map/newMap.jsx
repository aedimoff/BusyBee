import React, { useEffect, useState, useRef } from "react";
import mapStyles from "./mapStyles";

const NewMap = (props) => {
  const mapRef = useRef();
  const google = window.google;

  const initMap = () => {
    let map = new google.maps.Map(mapRef.current, options);
    return map;
  };

  const defaultCenter = props.currentLocation;
  const [center, setCenter] = useState(defaultCenter);
  
  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
    center: center,
    zoom: 14,
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

  useEffect(() => {
    getCenter();
    initMap();
  });

  return <div className="map" id="map" ref={mapRef}>{console.log(props.currentLocation)}</div>;
};

export default NewMap;
