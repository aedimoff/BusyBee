import React, { useEffect, useState, useRef } from "react";
import mapStyles from "./mapStyles";
import Spinner from "../spinner/spinner";
import * as MapAPIUtil from "../../util/map_api_util";

const NewMap = (props) => {
  const mapRef = useRef();
  const searchBoxRef = useRef();
  const google = window.google;

  const defaultCenter = props.currentLocation;
  const [center, setCenter] = useState(defaultCenter);

  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
    center: center,
    zoom: 14,
  };

  const directionsRenderer = new google.maps.DirectionsRenderer();
  const directionsService = new google.maps.DirectionsService();
  var map;

  const initMap = () => {
    map = new google.maps.Map(mapRef.current, options);
    const searchBox = new google.maps.places.SearchBox(searchBoxRef.current);
    const input = searchBoxRef.current;
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

        markers.push(
          new google.maps.Marker({
            map,
            title: place.name,
            position: place.geometry.location,
          })
        );
        const geocoder = new google.maps.Geocoder();

        markers.forEach((marker) => {
          marker.addListener("click", (e) => {
            let latLng = e.latLng.toJSON();

            geocoder.geocode({ location: latLng }, function (results, status) {
              console.log("results", results);
              console.log("results[1]", results[0]);
              console.log("results.place_id", results[0].place_id);
              if (results[0].place_id) {
                let placeId = results[0].place_id;
                props.openModal("marker", { placeId: placeId });
                viewBusiness(placeId);
              }
            });
          });
        });

        if (place.geometry.viewport) {
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
    });

    // Configure the click listener.
    const geocoder = new google.maps.Geocoder();
    map.addListener("click", (e) => {
      let latLng = e.latLng.toJSON();
      geocoder.geocode({ location: latLng }, function (results, status) {
        if (results[0].place_id) {
          let placeId = results[0].place_id;
          props.openModal("marker", { placeId: placeId });
          viewBusiness(placeId);
        }
      });
    });
  };

  const viewBusiness = (placeId) => {
    MapAPIUtil.getPlaceInfo(placeId)
      .then((res) => {
        return props.setBusinessToState(res.data.result);
      })
      .catch((err) => console.log(err));
  };

  //creates object literal from lat/lng of all currently selected addresses
  const selectedFavorites = (selectedArray) => {
    let selected = [];
    for (let i = 0; i < selectedArray.length; i++) {
      let fave = selectedArray[i];
      selected.push({
        location: {
          lat: fave.geometry.location.lat,
          lng: fave.geometry.location.lng,
        },
        stopover: true,
      });
    }
    return selected;
  };

  function calcRoute(location, selectedFavorites) {
    let directionsRequest = {
      origin: location,
      destination: location,
      travelMode: "DRIVING",
      drivingOptions: {
        departureTime: new Date(Date.now()),
        trafficModel: "bestguess",
      },
      waypoints: selectedFavorites,
      optimizeWaypoints: true,
      provideRouteAlternatives: true,
      region: "US",
    };
    console.log("its the map!", map)
    
    directionsRenderer.setMap(map);
    directionsService.route(directionsRequest, function (response, status) {
      if (status === "OK") {
        const legs = response.routes[0].legs;
        props.getDirections(legs);
        directionsRenderer.setDirections(response);
      }
    });
  }

  const clearRoute = () => {
    directionsRenderer.setMap(null);
  };

  const [count, setCount] = useState(0);

  const routeButtons = [
    <button
      onClick={() => {
        calcRoute(props.currentLocation, selectedFavorites(props.selected));
        setCount(count + 1);
      }}
    >
      Generate Route
    </button>,
    <button
      onClick={() => {
        clearRoute();
        setCount(count - 1);
      }}
    >
      Clear Route
    </button>,
  ];

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
    const abortController = new AbortController();

    getCenter();
    initMap();

    abortController.abort();
  });

  return (
    <div className="map-container">
      {props.currentLocation ? (
        <div className="map" id="map" ref={mapRef}>
          <input
            className="controls"
            type="text"
            placeholder="Search for a business"
            id="search-bar"
            ref={searchBoxRef}
            width="40vw"
            height="80vh"
          ></input>
        </div>
      ) : (
        <Spinner />
      )}
      {props.userId ? (
        <div className="map-buttons">{routeButtons[count]}</div>
      ) : (
        ""
      )}
    </div>
  );
};

export default NewMap;
