import React from 'react';

function Home({
  onIncrement,
  onDecrement,
  counter,
}) {
  return (
    <div>
      <h2>
        Vous avez cliqué {counter} fois
      </h2>
      <div className="buttonsCounter">
        <button className="decrement" onClick={onDecrement}>
          <p className="decrementText">-</p>
        </button>

        <button className="increment" onClick={onIncrement}>
          <p className="incrementText">+</p>
        </button>
      </div>
    </div>
  );
};

export default Home;
