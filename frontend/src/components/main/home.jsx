import React from 'react';
import MapContainer from '../map/map_container';
import FavoritesIndexContainer from '../favorites/favorites_index_container';
import DirectionsContainer from '../map/directions_container';

class Home extends React.Component {

  render() {
    return (
      <div className="home-container">
        <div className="map-container">
          <MapContainer/>
        </div>
          <FavoritesIndexContainer />
          <DirectionsContainer/>
      </div>
    );
  }
}

export default Home;