import React from "react";
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