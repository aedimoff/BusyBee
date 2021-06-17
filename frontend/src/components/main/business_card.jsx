import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineCheckSquare } from 'react-icons/ai';

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
              
                <h1>Business 1</h1>
                <p>123 Fake St</p>
                <AiOutlineHeart />
                <AiOutlineCheckSquare size={15} onClick={this.addToSelected}/>
          </div>
    )
  }
}

export default BusinessCard;