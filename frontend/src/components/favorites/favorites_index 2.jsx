import React from 'react'; 
import { AiOutlineCheckSquare } from 'react-icons/ai'
import BusinessCard from './business_card';
import '../main/main.scss'

class FavoritesIndex extends React.Component {

    render() {
        const { favorites, user, addFavorite, deleteFavorite } = this.props

        // Filter out null or undefined values (bad data)
        const filteredFavorites = favorites.filter((fav) => fav !== null || fav !== undefined)
            return (
                <ul className="favorites-index">
                    {
                        filteredFavorites ? filteredFavorites.map((favorite, i) => (
                            <BusinessCard 
                                key={i}
                                formatted_address={favorite.formatted_address}
                                name={favorite.name}
                                lat={favorite.geometry.location.lat}
                                lng={favorite.geometry.location.lng}
                                rating={favorite.rating}
                                types={favorites.types}
                                website={favorites.website}  
                                place_id={favorite.place_id}
                                user_id={user.id}
                                addFavorite={addFavorite}   
                                deleteFavorite={deleteFavorite}
                            />
                        )) : ""
                    }
                </ul>
            )
        }
}

export default FavoritesIndex