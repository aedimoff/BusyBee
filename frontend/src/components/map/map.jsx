import React from "react";
import "./map.scss";
import {
  GoogleMap,
  useLoadScript,
} from "@react-google-maps/api";

import Search from "./search";
import mapStyles from "./mapStyles";
import * as MapAPIUtil from "../../util/map_api_util";
import Spinner from "../spinner/spinner";

require("dotenv").config();

const libraries = ["places"];
const mapContainerStyle = {
  width: "75vw",
  height: "75vh",
};
const center = {
  lat: 33.830296,
  lng: -116.545296,
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const MapThing = (props) => {
  console.log("mapProps", props)
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries,
  });

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  });

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(20);
  });

    const getFavorite = (placeId) => {
        MapAPIUtil.getPlaceInfo(placeId).then(res => { 
            return props.addFavorite(res.data.result, props.userId) 
        }).catch(err =>
            console.log("error on frontend", err)
        )
    }

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";


  const display = isLoaded ? 
        (<div className="map">

          <Search panTo={panTo} />

          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={12}
            center={center}
            options={options}
            onClick={(e) => {
                getFavorite(e.placeId)
            }}
            onLoad={onMapLoad}
          />
      </div>) : <Spinner />


  return (
    <div className="map-container">
        {display}
    </div>
  );
};

export default MapThing;