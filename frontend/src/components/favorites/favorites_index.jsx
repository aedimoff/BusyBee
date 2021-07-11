import React from 'react'; 
// import { AiOutlineCheckSquare } from 'react-icons/ai'
import BusinessCard from './business_card';
import '../main/main.scss'

class FavoritesIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectFav: "true"
    }
    this.buttonText="Collapse Favourites"
    // this.handleFav() = this.handleFav().bind(this)
  }
  componentDidMount() {
    this.props.fetchAllFavorites(this.props.user.id);
  }

  handleFav() {
    if (this.props.favorites.length > 0) {
      if (this.state.selectFav === "true") {
        document.getElementById("fav-index").className = "fav-no-display";
        this.buttonText = "Show Favourites"
        this.setState({selectFav: "false"})
      } else {
        document.getElementById("fav-index").className = "index-wrapper";
        this.buttonText = "Collapse Favourites"
        this.setState({selectFav: "true"})
      };
    };
  }



  render() {
    const { favorites, user, addFavorite, deleteFavorite, receiveSelected } = this.props;
    // Filter out null or undefined values (bad data)
    const filteredFavorites = favorites.filter(
      (fav) => fav != null || fav != undefined
    );
    return (
      <div> 
        <button 
          onClick={()=>this.handleFav()}
          className="fav-button">
          {this.buttonText}
        </button>
        <div id="fav-index" className="index-wrapper">
          {filteredFavorites
            ? filteredFavorites.map((favorite, i) => (
              <ul className="favorites-index">
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
            </ul>
              ))
            : ""}
        </div>
      </div>
    );
  }
}

export default FavoritesIndex