import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineCheckSquare } from 'react-icons/ai';
import './main.scss'

class BusinessCard extends React.Component{
  constructor(props){
    super(props);
  }

addToSelected() {
    // if !selected
    // some function to add to selected if we're still doing that
    // selected add to "selected" array, which interacts with directions api, 
}

removeFromSelected() {
    // if selected 
}

  render() {
        
    return(
          <div className="business-card">
              
                <h1 className="business-title">Business 1</h1>
                <p className="business-address">123 Fake St</p>
                <AiOutlineHeart size={15} />
                <AiOutlineCheckSquare size={15} onClick={this.addToSelected}/>
          </div>
    )
  }
}

export default BusinessCard;