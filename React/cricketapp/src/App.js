import React from 'react';
import './App.css';
import ListofPlayers from './components/ListofPlayers';
import IndianPlayers from './components/IndianPlayers';

function App() {
  const flag = true; // change to false to show IndianPlayers

  if (flag) {
    return (
      <div className="App">
        <ListofPlayers />
      </div>
    );
  } else {
    return (
      <div className="App">
        <IndianPlayers />
      </div>
    );
  }
}

export default App;
