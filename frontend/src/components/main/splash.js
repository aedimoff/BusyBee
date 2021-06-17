import React from 'react';
// import MapContainer from './map_container'
import FavoritesIndexContainer from './favorites_index_container'
import BusinessCardContainer from './business_card_container';

class Splash extends React.Component {

  render() {
    return (
      <div className="splash-container">
        {/* <BusinessCardContainer /> */}
        <FavoritesIndexContainer />
        {/* <MapContainer /> */}
      </div>
    );
  }
}

export default Splash;
