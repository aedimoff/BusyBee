import { connect } from 'react-redux';
import Route from './route'

const mapStateToProps = state => ({
    userId: state?.sessionApi?.user?.id,
    currentLocation: state.sessionApi.currentLocation
})


export default connect(mapStateToProps, null)(Route)