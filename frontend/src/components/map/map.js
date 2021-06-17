import React from 'react';
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from "@react-google-maps/api";

import Search from "./search";
import mapStyles from "./mapStyles";
import * as MapAPIUtil from "../../util/map_api_util";

require("dotenv").config(); 

const libraries = ["places"];
const mapContainerStyle = {
    width: "75vw",
    height: "75vh",
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

//Get place_id from click on business (maybe add favorites button), then submit 
//places search request (HTTP request, probably) to get full set of info.
//Figure out custom infoWindow(?)
const Map = () => {
    const { isLoaded, loadError } = useLoadScript({
      googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
      libraries,
    });

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    })

    const panTo = React.useCallback(({lat, lng}) => {
        mapRef.current.panTo({lat, lng});
        mapRef.current.setZoom(16);
    })


    const getFavorite = (placeId) => {
        MapAPIUtil.getPlaceInfo(placeId).then(res=>
            console.log("Response on frontend", res)
        ).catch(err =>
            console.log("error on frontend", err)
        )
    }

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";

    return (
        <div>
            <h1 className="map-header">ErrantErrands</h1>

            <Search panTo={panTo}/>

            <GoogleMap mapContainerStyle={mapContainerStyle}
            zoom={12}
            center={center}
            options={options}
            onClick={(e) => {
                console.log(e.placeId)
                getFavorite(e.placeId)
            }}
            onLoad={onMapLoad}
            />
        </div>
    )
}

// function Search() {
//   const {
//     ready,
//     value,
//     suggestions: { status, data },
//     setValue,
//     clearSuggestions,
//   } = usePlacesAutocomplete({
//     requestOptions: {
//       location: { lat: () => 33.830296, lng: () => -116.545296 },
//       radius: 200 * 1000,
//     },
//   });

//   return (
//     <div className="search">
//       <Combobox
//         onSelect={(address) => {
//           console.log(address);
//         }}
//       >
//         <ComboboxInput
//           value={value}
//           onChange={(e) => {
//             setValue(e.target.value);
//           }}
//           disabled={!ready}
//           placeholder="Search for a business"
//         />
//       </Combobox>
//     </div>
//   );
// };



export default Map
