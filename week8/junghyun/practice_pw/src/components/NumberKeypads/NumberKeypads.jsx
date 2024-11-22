import './NumberKeypads.css';

export default function NumberKeypads({ numbers, onPress, secure }) {
  const handleKeyPress = (number) => {
    onPress(number);
  };

  return (
    <div className="number-keypad">
      <div className="number-keypad-grid">
        {numbers.map((number, index) => (
          <button
            key={number}
            className={"number-keypad-button"}
            data-number={number}
            onClick={() => handleKeyPress(number)}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}