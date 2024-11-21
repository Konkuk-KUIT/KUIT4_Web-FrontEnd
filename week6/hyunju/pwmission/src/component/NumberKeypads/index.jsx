import React, { useState } from 'react';
import './index.css';


export default function NumberKeypads({ numbers, onPress, secure }) {
  const [pressedNumber, setPressedNumber] = useState(null);
  const [randomNumber, setRandomNumber] = useState(null);

  const isPressed = (number) =>
    number === pressedNumber || number === randomNumber;

  const handlePress = (number) => {
    setPressedNumber(number);

    if (secure) {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * numbers.length);
      } while (numbers[randomIndex] === number);

      setRandomNumber(numbers[randomIndex]);
    }
  };

  const handlePressEnd = () => {
    setPressedNumber(null);
    setRandomNumber(null);
  };

  return (
    <div className="number-keypad">
      <div className="number-keypad-grid">
        {numbers.map((number) => (
          <button
            key={number}
            className={`number-keypad-button ${
              isPressed(number) ? 'pressed' : ''
            }`}
            data-number={number}
            onMouseDown={() => handlePress(number)}
            onMouseUp={handlePressEnd}
            onClick={() => {
              onPress(number);
            }}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}