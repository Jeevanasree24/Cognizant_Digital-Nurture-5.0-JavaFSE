import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prev => prev + 1);
    alert('Hello! Counter Incremented');
  };

  const handleDecrement = () => {
    setCount(prev => prev - 1);
  };

  return (
    <div style={{ border: '1px solid #ddd', padding: 12, marginBottom: 12, borderRadius: 6 }}>
      <h3>Counter</h3>
      <p>Current Value: {count}</p>
      <button onClick={handleIncrement} style={{ marginRight: 8 }}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
