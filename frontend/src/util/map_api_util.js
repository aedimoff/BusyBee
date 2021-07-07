const axios = require('axios');
export const getPlaceInfo = (placeId) => {
    return axios.post(
        `/api/googleroute/getplace`,
        { params: { 
            placeId: placeId
            } 
        }
    );
}

