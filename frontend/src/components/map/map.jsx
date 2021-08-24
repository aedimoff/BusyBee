/* eslint-disable no-undef */
import React, { useEffect, useState, useRef } from "react";
import "./map.scss";
import {
  GoogleMap,
  useLoadScript,
  StandaloneSearchBox,
} from "@react-google-maps/api";
import Locate from "./locate";
import mapStyles from "./mapStyles";
import Spinner from "../spinner/spinner";
import * as MapAPIUtil from "../../util/map_api_util";

const libraries = ["places"];

const Map = (props) => {
  const defaultCenter = props.currentLocation;

  const mapContainerStyle = {
    width: "100vw",
    height: "84vh",
  };

  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
  };

  const [center, setCenter] = useState(defaultCenter);
  const [mapRef, setMapRef] = useState(true);
  const [count, setCount] = useState(0);

  // const [genButtonState, setGenButtonState] = React.useState(true);
  // const [clearButtonState, setClearButtonState] = React.useState(false);


  // console.log("GenBUTTON", genButtonState);
  // console.log("clearBUTTON", clearButtonState);

  const routeButtons = [
    <button
      className="generate-route-btn"
      // id={`button-state-${genButtonState}`}
      onClick={() => {
        calcRoute(props.currentLocation, selectedFavorites(props.selected));
        setCount(count + 1);
      }}
    >
      Generate Route
    </button>,
    <button
      // id={`button-state-${clearButtonState}`}
      onClick={() => {
        clearRoute();
        setCount(count - 1);
      }}
    >
      Clear Route
    </button>,
  ];

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries,
  });

  //set zoom options for map
  const panTo = ({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
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

  //renders route on map and generates all direction steps
  let directionsRenderer = useRef(null);
  let directionsService = useRef(null);
  const calcRoute = (location, selectedFavorites) => {
    if (directionsRenderer.current == null) {
      directionsRenderer.current = new google.maps.DirectionsRenderer();
      directionsService.current = new google.maps.DirectionsService();
    }

    // directionsRenderer = directionsRenderer.current;
    // directionsService = directionsService.current;

    directionsRenderer.current.setMap(mapRef);
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
    directionsService.current.route(directionsRequest, function (response, status) {
      if (status === "OK") {
        const legs = response.routes[0].legs;
        props.getDirections(legs);
        directionsRenderer.current.setDirections(response);
      }
    });
  };

  //clears directions
  const clearRoute = () => {
    directionsRenderer.current.setMap(null);
    props.clearDirections();
  };

  //get user's location
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

  //sets map center to user's current location
  useEffect(() => {
    console.log("component updated", props.selected.length);

    getCenter();
    if(props.selected.length) {
    }  
  });

  //gets business info from Google Places API
  const viewBusiness = (placeId) => {
    MapAPIUtil.getPlaceInfo(placeId)
      .then((res) => {
        return props.setBusinessToState(res.data.result);
      })
      .catch((err) => console.log(err));
  };

  //creates ref to searchBox
  const [searchBox, setSearchBox] = useState(null);

  //creates map markers when business type is entered in searchbox
  let markers = [];
  const onPlacesChanged = () => {
    const places = searchBox.getPlaces();
    if (places.length === 0) return;

    //clears out old markers
    markers.forEach((marker) => {
      marker.setMap(null);
    });
    markers = [];

    const bounds = new google.maps.LatLngBounds();

    places.forEach((place) => {
      if (!place.geometry || !place.geometry.location) {
        console.log("Returned place contains no geometry");
        return;
      }

      markers.push(
        new google.maps.Marker({
          position: place.geometry.location,
          title: place.name,
        })
      );

      const geocoder = new google.maps.Geocoder();

      markers.forEach((marker) => {
        marker.setMap(mapRef);
        marker.addListener("click", (e) => {
          let latLng = e.latLng.toJSON();

          geocoder.geocode({ location: latLng }, function (results, status) {
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
    mapRef.fitBounds(bounds);
  };
  const onSearchLoad = (ref) => {
    setSearchBox(ref);
  };

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";
  return (
    <div className="map-container">
      {props.currentLocation ? (
        <div className="map" id="map">
          <Locate panTo={panTo} />
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={14}
            center={center}
            options={options}
            onClick={(e) => {
              if (e.placeId) {
                props.openModal("marker", { placeId: e.placeId });
                viewBusiness(e.placeId);
              }
            }}
            onLoad={(map) => setMapRef(map)}
          >
            <StandaloneSearchBox
              onLoad={onSearchLoad}
              onPlacesChanged={onPlacesChanged}
            >
              <input
                type="text"
                placeholder="Search for a business"
                id="search-bar"
              />
            </StandaloneSearchBox>
            {/* <button
              className="generate-route-btn"
              id={`gen-button-state-${genButtonState}`}
              onClick={() => {
                calcRoute(
                  props.currentLocation,
                  selectedFavorites(props.selected)
                );
                setGenButtonState(!genButtonState)
                setCount(count + 1);
              }}
            >
              Generate Route
            </button>
            <button
              id={`clear-button-state-${clearButtonState}`}
              onClick={() => {
                clearRoute();
                setCount(count - 1);
              }}
            >
              Clear Route
            </button> */}
            {(props.userId && props.selected.length) ? (
              <div className="map-buttons">{routeButtons[count]}</div>
            ) : (
              ""
            )}
          </GoogleMap>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Map;
