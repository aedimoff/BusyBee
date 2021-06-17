import { connect } from 'react-redux'
import { addFavorite, deleteFavorite } from '../../actions/favorites_actions'
import BusinessCard from './business_card'

// const mSTP = state => ({

// })

const mDTP = dispatch => ({
    addFavorite: (placeId) => dispatch(addFavorite(placeId)),
    deleteFavorite: (placeId) => dispatch(deleteFavorite(placeId))
})

export default connect(mDTP)(BusinessCard)