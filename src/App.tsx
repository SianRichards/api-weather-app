import React from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from "./components/weather";
import Header from "./components/header";


const App: React.FC = () => {
  return (
    <React.Fragment>
      <div className="Header">
    <Header />
    </div>
    <div className="App">
            <Weather />
    </div>
    </React.Fragment>
  );
}

export default App;
