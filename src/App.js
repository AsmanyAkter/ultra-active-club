import logo from './logo.svg';
import React from 'react'
import './App.css';
import Gym from './components/Gym/Gym';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Gym></Gym>

    </div>
  );
}

export default App;
