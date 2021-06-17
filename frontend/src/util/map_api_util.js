import React from 'react';
import axios from 'axios';

export const getPlaceInfo = (placeId) => {
    return axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=formatted_address,rating,name,location,opening_hours,place_id,types,website&key=${process.env.REACT_APP_MAPS_API_KEY}`,
      {}
    );
}