import { connect } from 'react-redux';
import Home from './home'

const mapStateToProps = state => ({
  directions: state.directions
});

export default connect(mapStateToProps, null)(Home);