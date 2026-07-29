import React from 'react';

const SyntheticEvent = () => {
  const handleClick = (e) => {
    // e is a React synthetic event
    alert('I was clicked');
  };

  return (
    <div style={{ border: '1px solid #ddd', padding: 12, marginBottom: 12, borderRadius: 6 }}>
      <h3>Synthetic Event</h3>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default SyntheticEvent;
