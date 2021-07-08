import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineCheckSquare } from 'react-icons/ai';
import * as MapAPIUtil from "../../util/map_api_util";

class InfoWindow extends React.Component {
  constructor(props) {
    super(props);
    this.getFavorite = this.getFavorite.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  getFavorite = (placeId) => {
    MapAPIUtil.getPlaceInfo(placeId).then(res => { 
        return this.props.addFavorite(res.data.result, this.props.userId) 
    }).catch(err =>
        console.log(err)
    )
  }

  handleClick = (placeId) => {
    this.getFavorite(placeId)
    this.props.closeModal()
  }
  render() {
    
    const { formatted_address, placeId, name, rating, website } = this.props
    return (
      <div className="business-card-container">
      <div className="business-card">
          <div className="click-icons"> 
          <AiOutlineHeart size={18} onClick={() => {this.handleClick(placeId)}} className="heart-icon"/>
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

export default InfoWindow;