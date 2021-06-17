import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

class BusinessCard extends React.Component{
  constructor(props){
    super(props);

    this.state = {
        placeId: null,
        Name: "",
        LatLng: "",
        Hours: ""
    }
  }

  render() {
    return(

          <div className="business-card">
              <div onClick={this.props.addFavorite(this.state.placeId)}><AiOutlineHeart className="favorite-button"/></div>
            <span>{this.state.name}</span>
            <span>{this.state.hours}</span>
          </div>
       
    )
  }
}

export default BusinessCard;