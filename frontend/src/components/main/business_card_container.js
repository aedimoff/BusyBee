import { connect } from 'react-redux'
import { addFavorite, deleteFavorite } from '../../actions/favorites_actions'
import BusinessCard from './business_card'

const mSTP = state => ({
    businesses: [
        {
            'model': 'user',
            'documents': [
                {
                    "placeId": "id1",
                    "name": "Fuller's Full Stacks",
                    "LatLng": "1, 2, 3, 4",
                    "Hours": "all day"
                },
                {
                    "placeId": "id2",
                    "name": "Brandon's Designs",
                    "LatLng": "4, 3, 2, 1",
                    "Hours": "also all day"
                },
                {
                    "placeId": "id3",
                    "name": "Danny's Big Time",
                    "LatLng": "2, 4, 3, 1",
                    "Hours": "not morning"
                },
                {
                    "placeId": "id4",
                    "name": "Arianne's Moose Tours",
                    "LatLng": "3, 4, 1, 2",
                    "Hours": "mon-fri"
                },
                {
                    "placeId": "id5",
                    "name": "Patty's Cakes",
                    "LatLng": "3, 2, 1, 4",
                    "Hours": "9-5"
                }
            ]
        }
    ]
})

const mDTP = dispatch => ({
    addFavorite: (placeId) => dispatch(addFavorite(placeId)),
    deleteFavorite: (placeId) => dispatch(deleteFavorite(placeId))
})

export default connect(mSTP, mDTP)(BusinessCard)