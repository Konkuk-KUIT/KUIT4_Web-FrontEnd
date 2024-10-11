import plus from '../assets/plus.svg';

const PlusButton = () => {
    return(
        <div className="fixed-button">
            <img className="plus-button" alt="plus" src={plus} />
        </div>
    );
};

export default PlusButton;