import React from 'react';

const Directions = (legs) => {
  if (legs !== undefined) {
    console.log("dir legs", legs[0]?.steps[0])
    return (
      <div className="LEGS">
        first step {legs[0]?.steps[0].distance.text}
      </div>
    );
  }
}



export default Directions;