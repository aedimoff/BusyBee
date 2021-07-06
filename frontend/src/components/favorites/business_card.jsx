import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineCheckSquare } from 'react-icons/ai';
import '../main/main.scss'

class BusinessCard extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      selected: 'false'
    }
  }

    toggleSelected() {
        if (this.state.selected === 'false') {
          this.setState({selected: 'true'});
        } else {
          this.setState({selected: 'false'});
        }
    }
    
    handleClick() {
    
    }

  render() {
    const { formatted_address, place_id, user_id, name, lat, lng, rating, types, website, addFavorite, deleteFavorite } = this.props
    return(
        <div className="business-card-container">
          <div className="business-card">
              <div className="click-icons"> 
              <p>Remove Favorite</p>
              <AiOutlineHeart size={18} onClick={() => deleteFavorite(place_id, user_id)} className="heart-icon"/>
                <AiOutlineCheckSquare onClick={() => this.toggleSelected()} size={18} className="check-icon"/>
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