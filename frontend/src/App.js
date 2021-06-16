import logo from './logo.svg';
import './App.css';
import Map from "./components/map/map";
require('dotenv').config()


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {Map()}
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;