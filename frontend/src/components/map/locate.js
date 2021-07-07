import React from "react";
import "@reach/combobox/styles.css";

class Locate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showText: "false"
    }
  }

  handleEvent() {
    if (this.state.showText === "false") {
      document.getElementById("compass-div").className = "compass-two";
      this.setState({showText: "true"})
    } else {
      document.getElementById("compass-div").className = "compass-one";
      this.setState({showText: "false"})
    };
  }

  render() { 
    return (
      <button 
      className="locate" 
      onMouseEnter={() => this.handleEvent()} 
      onMouseLeave={() => this.handleEvent()}
      onClick={() => {
        navigator.geolocation.getCurrentPosition((position) => {
          this.props.panTo({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        }, () => null);
      }}>
        <div id="compass-div" className="compass-one">Go To Current Location</div>
        <img 
        className="compass-img"
        src="compass.svg" 
        alt="compass - locate me"
        />

      </button>
    );
  }
};

export default Locate;