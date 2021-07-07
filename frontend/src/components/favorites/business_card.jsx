import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineCheckSquare } from 'react-icons/ai';
import '../main/main.scss'

class BusinessCard extends React.Component{

    addToSelected() {
        // if !selected
        // some function to add to selected if we're still doing that
        // selected add to "selected" array, which interacts with directions api, 
    }

    removeFromSelected() {
        // if selected 
    }
    
    handleClick() {
    
    }

  render() {
    const { formatted_address, favorite, place_id, user_id, name, lat, lng, rating, types, website, addFavorite, deleteFavorite, receiveSelected } = this.props
    return(
        <div className="business-card-container">
          <div className="business-card">
              <div className="click-icons"> 
              <p>Remove Favorite</p>
              <AiOutlineHeart size={18} onClick={() => deleteFavorite(place_id, user_id)} className="heart-icon"/>
                <AiOutlineCheckSquare size={18} onClick={() => receiveSelected(favorite)} className="check-icon"/>
              </div>
                <h1 className="business-title">{name}</h1>
                <h3 className="business-address">{formatted_address}</h3>
                <h3 className="business-rating">Rating: {rating}</h3>
                <h3> {website}</h3>
          </div>
        </div>
    )
  }
}

export default BusinessCard;