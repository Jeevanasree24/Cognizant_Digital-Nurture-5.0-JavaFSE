import React, { useState } from 'react';
import './App.css';
import GuestPage from './components/GuestPage';
import UserPage from './components/UserPage';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => setLoggedIn(true);
  const handleLogout = () => setLoggedIn(false);

  return (
    <div className="App">
      {loggedIn ? (
        <UserPage onLogout={handleLogout} />
      ) : (
        <GuestPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
