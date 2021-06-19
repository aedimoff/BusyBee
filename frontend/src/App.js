import logo from './logo.svg';
import './App.css';
import MapContainer from "./components/map/map_container";

require('dotenv').config()



function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {/* <MapContainer /> */}
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
