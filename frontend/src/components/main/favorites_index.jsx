import React from 'react'; 
// import some data or some shit
import { AiOutlineCheckSquare } from 'react-icons/ai'

class FavoritesIndex extends React.Component {
    constructor(props) {
        super(props)
        // this.addToSelected = this.addToSelected.bind(this)
        // this.state = {
        //     favorites: []
        // }
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
        // if (this.props.favorites.length) {
            return (
        //         <div> 
        //              {this.props.favorites.map(fav =>
        //              <i onClick = addToFavorite>heart icon </i> <BusinessItem key={place_id} className=fav-index/>
        //              <button onClick={this.addToSelected} <i check mark icon ></i>>{fav}</button>
        //             )}
        //         </div>
               <div>
                <button className="select-button"><AiOutlineCheckSquare size={15}/>Select</button>
                {/* <h1>List of favorite businesses here</h1> */}
               </div>
            )
        // }
    }
}

export default FavoritesIndex