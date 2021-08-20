import React, { useEffect, useState, useRef } from "react";
import mapStyles from "./mapStyles";

const NewMap = (props) => {
  const mapRef = useRef();
  const searchBoxRef = useRef();
  const google = window.google;

  const initMap = () => {
    const map = new google.maps.Map(mapRef.current, options);
    const input = searchBoxRef.current;
    const searchBox = new google.maps.places.SearchBox(searchBoxRef.current);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    map.addListener("bounds_changed", () => {
      searchBox.setBounds(map.getBounds());
    });

    let markers = [];

    searchBox.addListener("places_changed", () => {
      const places = searchBox.getPlaces();

      if (places.length == 0) {
        return;
      }
      // Clear out the old markers.
      markers.forEach((marker) => {
        marker.setMap(null);
      });
      markers = [];
      // For each place, get the icon, name and location.
      const bounds = new google.maps.LatLngBounds();
      places.forEach((place) => {
        if (!place.geometry || !place.geometry.location) {
          console.log("Returned place contains no geometry");
          return;
        }
        const icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25),
        };
        // Create a marker for each place.
        markers.push(
          new google.maps.Marker({
            map,
            icon,
            title: place.name,
            position: place.geometry.location,
          })
        );

        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
    });
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

  return (
    <div className="map" id="map" ref={mapRef}>
      <input
        className="controls"
        type="text"
        placeholder="Search Box"
        id="search-bar"
        ref={searchBoxRef}
      ></input>
    </div>
  );
};

export default NewMap;
