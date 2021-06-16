import { connect } from 'react-redux'
import FavoritesIndex from './favorites_indexfavorites'
// import { fetchFavorites probably }

const mSTP = state => ({
    favorites: Object.values(state.user.favorites)
})

const mDTP = dispatch => ({
    // fetchFavorites: () => dispatch(fetchFavorites),
    // fetchFavorite: () dispatch(fetchFavorite),
    // addFavorite: 
})

export default connect(mSTP, mDTP)(FavoritesIndex)