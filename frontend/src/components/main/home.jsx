import React from 'react';
import MapContainer from '../map/map_container';
import FavoritesIndexContainer from '../favorites/favorites_index_container';

class Home extends React.Component {
  constructor(props) {
    super(props);

    // this.displayMap = this.displayMap.bind(this);
  }

  // displayMap() {
  //   if (this.props.sessionApi.currentUser || this.props.sessionApi.user) {
  //     return <MapContainer />
  //   }
  // };

  render() {
    return (
      <div className="home-container">
        <div className="map-container">
          <MapContainer />
            {/* {this.displayMap()} */}
        </div>
        <div className="index-container">
          <FavoritesIndexContainer />
        </div>
      </div>
    );
  }
}

export default Home;