export const GET_DIRECTIONS = "GET_DIRECTIONS";

export const receiveDirections = directions => {
    console.log("action", directions);
    return { type: GET_DIRECTIONS, directions };
};

export const getDirections = (directions) => dispatch => {
  dispatch(receiveDirections(directions));
};
