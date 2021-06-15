import { connect } from 'react-redux'
import FavoritesIndex from './favorites_indexfavorites'
// import { fetchFavorites probably }

const mSTP = state => ({
    favorites: Object.values(state.favorites)
})

const mDTP = dispatch => ({
    fetchFavorites: () => dispatch(fetchFavorites)
})

export default connect(mSTP, mDTP)(FavoritesIndex)