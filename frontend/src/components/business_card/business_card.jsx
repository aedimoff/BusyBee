// import React from 'react';
// import { AiOutlineHeart } from 'react-icons/ai';
// import { AiOutlineCheckSquare } from 'react-icons/ai';
// import '../main/main.scss';

// class BusinessCard extends React.Component{
//   constructor(props){
//     super(props);
//   }

//   getFavorites() {
//     if (this.props.session.currentUser) {
//       return this.props.session.currentUser.favorites
//     } else {
//       return this.props.session.user.favorites
//     }
//   };

//     addToFavorites() {

//     }

//     removeFromFavorites() {
    
//     }

//     addToSelected() {
//         // if !selected
//         // some function to add to selected if we're still doing that
//         // selected add to "selected" array, which interacts with directions api, 
//     }

//     removeFromSelected() {
//         // if selected 
//     }
    
//     handleClick() {
    
//     }

//   render() {
        
//     return(
//         <div className="business-card-container">
//           <div className="business-card">
//               <div className="click-icons"> 
//                 <AiOutlineHeart size={18} className="heart-icon"/>
//                 <AiOutlineCheckSquare size={18} onClick={`{this.addToSelected}`} className="check-icon"/>
//               </div>
//                 <h1 className="business-title">Business 1</h1>
//                 <p className="business-address">123 Fake St</p>
//           </div>
//         </div>
//     )
//   }
// }

// export default BusinessCard;