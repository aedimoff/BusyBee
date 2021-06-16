import { connect } from 'react-redux'
import { fetchFavorites, fetchFavorite, addFavorite, removeFavorite } from '../../actions/favorites_actions'
import FavoritesIndex from './favorites_indexfavorites'

const mSTP = state => ({
    favorites: Object.values(state.user.favorites),
    // currentUser: state.session.currentUser
})

const mDTP = dispatch => ({
    fetchFavorites: () => dispatch(fetchFavorites()),
    fetchFavorite: (placeId) => dispatch(fetchFavorite(placeId)),
    addFavorite: (placeId) => dispatch(addFavorite(placeId)),
    removeFavorite: (placeId) => dispatch(removeFavorite(placeId))
})

export default connect(mSTP, mDTP)(FavoritesIndex)