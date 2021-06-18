import React from 'react'; 
import { AiOutlineCheckSquare } from 'react-icons/ai'
import BusinessCard from './business_card';
import '../main/main.scss'

class FavoritesIndex extends React.Component {

    render() {
        console.log("in fav_index", this.props)
        const { favorites, addFavorite, deleteFavorite } = this.props
            return (
                <ul className="favorites-index">
                    {
                        favorites ? favorites.map((favorite, i) => (
                            <BusinessCard 
                                key={i}
                                formatted_address={favorite.formatted_address}
                                name={favorite.name}
                                lat={favorite.geometry.location.lat}
                                lng={favorite.geometry.location.lng}
                                rating={favorite.rating}
                                types={favorites.types}
                                website={favorites.website}  
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