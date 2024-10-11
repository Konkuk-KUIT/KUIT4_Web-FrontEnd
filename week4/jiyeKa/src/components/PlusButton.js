import plus from '../assets/plus.svg';

const PlusButton = () => {
    return(
        <div class="fixed-button">
            <img class="plus-button" alt="plus" src={plus} />
        </div>
    );
};

export default PlusButton;