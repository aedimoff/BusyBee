import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

class BusinessCard extends React.Component{
  constructor(props){
    super(props);

    // this.state = {
    //     placeId: null,
    //     Name: "",
    //     LatLng: "",
    //     Hours: ""
    // }
  }

  render() {
      

        
    return(
          <div className="business-card">
              <ul>
                  {this.props.businesses.map(business => (
                    <div onClick={this.props.addFavorite(business.placeId)}>
                    <AiOutlineHeart className="favorite-button"/>
                    <span>{business.name}</span>
                    <span>{business.hours}</span>
                    </div>
                ))}
                </ul>
          </div>
       
    )
  }
}

export default BusinessCard;