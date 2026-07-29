import React from 'react';

const WelcomeMessage = () => {
  const sayMessage = (msg) => {
    alert(msg);
  };

  return (
    <div style={{ border: '1px solid #ddd', padding: 12, marginBottom: 12, borderRadius: 6 }}>
      <h3>Welcome Message</h3>
      <button onClick={() => sayMessage('Welcome')}>Say Welcome</button>
    </div>
  );
};

export default WelcomeMessage;
