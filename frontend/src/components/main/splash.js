import React from 'react';
import { openModal } from '../../actions/modal_actions';
import MapContainer from '../map/map_container';
// import NewMapContainer from '../map/new_map_container';
// import FavoritesIndexContainer from './favorites_index_container'

class Splash extends React.Component {

  componentDidMount() {
    this.props.openModal("signup")
  };

  render() {
    return (
      <div className="splash-container">
        <div className="map-container">
          {/* <NewMapContainer /> */}
            {/* <MapContainer /> */}
        </div>
      </div>
    );
  }
}

export default Splash;
