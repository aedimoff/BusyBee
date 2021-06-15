import logo from './logo.svg';
import './App.css';
require('dotenv').config()


function App() {
  console.log("ENV", process.env)
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <iframe
            width="450"
            height="250"
            frameBorder="0" 
            style={{ border: 0 }}
            src={`https://www.google.com/maps/embed/v1/search?key=${process.env.REACT_APP_MAPS_API_KEY}&q=record+stores+in+seattle`}>
          </iframe>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default App;
