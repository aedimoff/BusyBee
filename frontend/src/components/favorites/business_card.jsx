import React, { useState } from "react";
import { BiSquare } from "react-icons/bi";
import {IoHeartDislikeOutline } from 'react-icons/io5'
import { AiOutlineCheckSquare } from "react-icons/ai";
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
          <IoHeartDislikeOutline
            size={18}
            onClick={() => deleteFavorite(place_id, user_id)}
            className="heart-icon"
          />
          <div className="check-icon">
            {isSelected ? (
              <AiOutlineCheckSquare
                id="checked-square"
                size={18}
                onClick={() => handleClick()}
              />
            ) : (
              <BiSquare size={18} onClick={() => handleClick()} />
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
