import plus from '../assets/plus.svg';

const ButtonPlus = () => {
    return(
      <nav className="plus-button-circle">
          <button type="button">
              <img src={plus} alt="plus button"/>
          </button>
       </nav>
    );
  }

export default ButtonPlus;