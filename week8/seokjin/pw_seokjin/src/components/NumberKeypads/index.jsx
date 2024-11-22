import "./index.css";

/**
 * 
 * @param {number[]} numbers 
 * @param {function} onPress
 * @param {boolean} secure - (optional) default : false
 */
export default function NumberKeypads({ numbers, onPress }) {
    /*
    const handleKeyPress = () => {
        return (number) => {
            onPress(number);
        };
    };
   */
    const handleKeyPress = (number) => {
        onPress(number);
    };
    
    return (
        <div className="number-keypad">
            <div className="number-keypad-grid">
            {numbers.map((number) => (
                <button
                    key={number}
                    className="number-keypad-button"
                    onClick={() => handleKeyPress(number)}
                >
                    {number}
                </button>
            ))}
            </div>
        </div>
    )

}