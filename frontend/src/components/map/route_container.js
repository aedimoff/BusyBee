import { connect } from "react-redux";
import Route from "./route";
import { getDirections } from "../../actions/directions_actions";

const mapStateToProps = (state) => ({
  userId: state?.sessionApi?.user?.id,
  currentLocation: state.sessionApi.location,
  selected: state.selected.selected,
});

const mapDispatchToProps = (dispatch) => ({
    getDirections: directions => {
        dispatch(getDirections(directions));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Route);
