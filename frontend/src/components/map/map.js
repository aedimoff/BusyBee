import React from 'react';
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from "@react-google-maps/api";


import mapStyles from "./mapStyles";

require("dotenv").config();

const libraries = ["places"];
const mapContainerStyle = {
    width: "100vw",
    height: "100vh",
};
const center = {
    lat: 33.830296,
    lng: -116.545296,
}

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,

};

const Map = () => {
    const { isLoaded, loadError } = useLoadScript({
      googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
      libraries,
    });

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    })

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";

    return (
        <div>
            <h1 className="map-header">ErrantErrands</h1>
            <GoogleMap mapContainerStyle={mapContainerStyle}
            zoom={12}
            center={center}
            options={options}
            onClick={(e) => {
                console.log(e);
            }}
            onLoad={onMapLoad}
            />
        </div>
    )
}



export default Map
