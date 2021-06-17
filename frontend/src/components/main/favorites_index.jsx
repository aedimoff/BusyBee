import React from 'react'; 
// import some data or some shit
import { AiOutlineCheckSquare } from 'react-icons/ai'
import BusinessCard from './business_card';

class FavoritesIndex extends React.Component {
    constructor(props) {
        super(props)
        // this.addToSelected = this.addToSelected.bind(this)
        // this.state = {
        //     favorites: []
        // }
    }

    

    render() {
        // if (this.props.favorites.length) {
            return (
        //         <div> 
        //              {this.props.favorites.map(fav =>
        //              <i onClick = addToFavorite>heart icon </i> <BusinessItem key={place_id} className=fav-index/>
        //              <button onClick={this.addToSelected} <i check mark icon ></i>>{fav}</button>
        //             )}
        //         </div>
               <div>
                <BusinessCard />
                <BusinessCard />
                <BusinessCard />
                <BusinessCard />
                <BusinessCard />
                <BusinessCard />
                {/* <h1>List of favorite businesses here</h1> */}
                {/* <h1>{this.props.favorites.place_id}</h1> */}
               </div>
            )
        // }
    }
}

export default FavoritesIndex