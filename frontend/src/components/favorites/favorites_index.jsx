import React from 'react'; 
// import { AiOutlineCheckSquare } from 'react-icons/ai'
import BusinessCard from './business_card';
import '../main/main.scss'

class FavoritesIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllFavorites(this.props.user.id);
  }

  render() {
    const { favorites, user, addFavorite, deleteFavorite, receiveSelected } = this.props;
    console.log("indexfaves", favorites)
    // Filter out null or undefined values (bad data)
    const filteredFavorites = favorites.filter(
      (fav) => fav != null || fav != undefined
    );
    return (
      <div className="index-wrapper">
        <ul className="favorites-index">
          {filteredFavorites
            ? filteredFavorites.map((favorite, i) => (
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
                  favorite={favorite}
                  addFavorite={addFavorite}
                  deleteFavorite={deleteFavorite}
                  receiveSelected={receiveSelected}
                />
              ))
            : ""}
        </ul>
      </div>
    );
  }
}

export default FavoritesIndex