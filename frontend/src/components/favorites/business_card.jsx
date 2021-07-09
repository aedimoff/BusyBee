import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
// import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineCheckSquare, AiFillCheckSquare } from "react-icons/ai";
import "../main/main.scss";

class BusinessCard extends React.Component {

  render() {
    const {
      formatted_address,
      favorite,
      selected,
      place_id,
      user_id,
      name,
      rating,
      website,
      deleteFavorite,
      receiveSelected,
      deleteSelected,
    } = this.props;
    return (
      <div className="business-card-container">
        <div className="business-card">
          <div className="click-icons">
            <p>Remove Favorite</p>
            <AiOutlineHeart
              size={18}
              onClick={() => deleteFavorite(place_id, user_id)}
              className="heart-icon"
            />
            {selected.includes(favorite) ? (
              <AiFillCheckSquare
                size={18}
                onClick={() => deleteSelected(favorite)}
                className="check-icon"
              />
            ) : (
              <AiOutlineCheckSquare
                size={18}
                onClick={() => receiveSelected(favorite)}
                className="check-icon"
              />
            )}
          </div>
          <h1 className="business-title">{name}</h1>
          <h3 className="business-address">{formatted_address}</h3>
          <h3 className="business-rating">Rating: {rating}</h3>
          <h3> {website}</h3>
        </div>
      </div>
    );
  }
}

export default BusinessCard;
