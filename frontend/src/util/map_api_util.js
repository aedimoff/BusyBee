import axios from 'axios';

export const getPlaceInfoFromGoogle = (placeId) => {
    console.log("this is API UTIL GOOGLE")
    return axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=formatted_address,rating,name,location,opening_hours,place_id,types,website&key=${process.env.REACT_APP_MAPS_API_KEY}`, {}
    );
}
export const getPlaceInfo = (placeId) => {
    console.log("this is API UTIL INFO")
    return axios.get(
        `api/googleroute/getplace`,
        {params: placeId}
    );
}

