import logo from './logo.svg';
import './App.css';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import { useState } from 'react';

function App() {
  const [displayPage, setDisplayPage] = useState(<Home/>);
  function handleClick(clickedItem){
    switch(clickedItem){
      case "Home": 
        setDisplayPage(<Home />);
      break;
      case "About": 
        setDisplayPage(<About />);
      break;
      default: 
        setDisplayPage(<Home />);
      break;
    }
  }
  return (
    <div className="App">
      <header className="head-foot">
        <div className="row">
          <div className="col-md-6 lefthand">Company Name</div>
          <div className="col-md-6 righthand">
          <span className="p-l-20" onClick={()=>handleClick('Home')}>Home&nbsp;</span> 
          <span className="p-l-20" onClick={()=>handleClick('About')}>About</span> 
          </div>
        </div>
      </header>
      <div className="body-height">
          {displayPage}
      </div>
      <footer className="head-foot">

      </footer>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
