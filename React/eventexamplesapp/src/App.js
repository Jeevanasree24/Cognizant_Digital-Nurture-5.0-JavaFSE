import React from 'react';
import './App.css';
import Counter from './components/Counter';
import WelcomeMessage from './components/WelcomeMessage';
import SyntheticEvent from './components/SyntheticEvent';
import CurrencyConvertor from './components/CurrencyConvertor';

function App() {
  return (
    <div style={{ maxWidth: 800, margin: '24px auto', padding: 12 }}>
      <h1>Event Examples App</h1>
      <Counter />
      <WelcomeMessage />
      <SyntheticEvent />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
