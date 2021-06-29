import React from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

const libraries = ["places"];

const Locate = ({ panTo }) => {
  return (
    <button className="locate" onClick={() => {
        navigator.geolocation.getCurrentPosition((position) => {
            panTo({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }); //do something with lat/lng
        }, () => null);
    }}>
      <img src="compass.svg" alt="compass - locate me" />
    </button>
  );
};

export default Locate;