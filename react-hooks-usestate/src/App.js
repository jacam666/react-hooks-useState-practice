import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  function decrementCount() {
    setCount(prevCount => prevCount - 1 )
  }

  function incrementCount() {
    setCount(prevCount => prevCount + 1 )
  }
  return (
    <div className='main-container'>
      <div className='container'>
        <button onClick={decrementCount} className='subtract-button'>-</button>
        <span className='counter'>{count}</span>
        <button onClick={incrementCount} className='addition-button'>+</button>
      </div>
    </div>

  );
}

export default App;
