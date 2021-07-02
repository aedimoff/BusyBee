/* eslint-disable no-undef */
import React from "react";
import "./map.scss";
import {
  GoogleMap,
  useLoadScript,
  Marker
} from "@react-google-maps/api";

import Search from "./search";
import Locate from "./locate";
import mapStyles from "./mapStyles";
import * as MapAPIUtil from "../../util/map_api_util";
import Spinner from "../spinner/spinner";
// import CustomMarker from "./customMarker";

require("dotenv").config();

const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "84vh",
};
const center = {
  lat: 36.974117,
  lng: -122.030792,
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const MapThing = (props) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries,
  });

  const { openModal } = props;

  const mapRef = React.useRef();
  const onMapLoad = ((map) => {
    mapRef.current = map;
  });

  const panTo = (({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(20);
  });

    const getFavorite = (placeId) => {
        MapAPIUtil.getPlaceInfo(placeId).then(res => { 
            return props.addFavorite(res.data.result, props.userId) 
        }).catch(err =>
            console.log(err)
        )
    }

  // function disablePOIInfoWindow(){
  //   var fnSet = google.maps.InfoWindow.prototype.set;
  //   google.maps.InfoWindow.prototype.set = function () {
  //   };
  // }


    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";


  const display = isLoaded ? 
        (<div className="map">

          <Search panTo={panTo} />
          <Locate panTo={panTo} />

          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={14}
            center={center}
            options={options}
            onClick={(e) => {
              // e.preventDefault()
                openModal("marker", { placeId: e.placeId })
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