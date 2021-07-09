import { connect } from 'react-redux';
import Directions from './directions';

const mapStateToProps = state => ({
  directions: state.directions
});


export default connect(mapStateToProps, null)(Directions);