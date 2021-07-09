import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
// import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineCheckSquare, AiFillCheckSquare } from "react-icons/ai";
import "../main/main.scss";

const BusinessCard = (props) => {
  const {
    formatted_address,
    favorite,
    place_id,
    user_id,
    name,
    rating,
    website,
    deleteFavorite,
    receiveSelected,
    deleteSelected,
  } = props;

   const [isSelected, setIsSelected] = useState(false);

   function handleClick() {
     setIsSelected(!isSelected)
     if(isSelected) {
       deleteSelected(favorite)
     } else {
       receiveSelected(favorite);
     }
   }

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
          <div className="check-icon">
            {isSelected ? (
              <AiFillCheckSquare
                size={18}
                onClick={() => handleClick()}
              />
            ) : (
              <AiOutlineCheckSquare
                size={18}
                onClick={() => handleClick()}
              />
            )}
          </div>
        </div>
        <h1 className="business-title">{name}</h1>
        <h3 className="business-address">{formatted_address}</h3>
        <h3 className="business-rating">Rating: {rating}</h3>
        <h3> {website}</h3>
      </div>
    </div>
  );
}


export default BusinessCard;
