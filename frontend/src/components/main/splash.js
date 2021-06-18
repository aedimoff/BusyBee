import React from 'react';
import MapContainer from '../map/map_container';
// import FavoritesIndexContainer from './favorites_index_container'

class Splash extends React.Component {

  render() {
    return (
      <div className="splash-container">
        <div className="map-container">
            <MapContainer />
        </div>
      </div>
    );
  }
}

export default Splash;
