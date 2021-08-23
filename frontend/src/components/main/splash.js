import React, { useEffect } from 'react';
import MapContainer from '../map/map_container';

const Splash = (props) => {

  useEffect(() => {
    props.openModal("signup")
  });


    return (
      <div className="splash-container">
        <div className="map-container">
            <MapContainer />
        </div>
      </div>
    );
  
}

export default Splash;
