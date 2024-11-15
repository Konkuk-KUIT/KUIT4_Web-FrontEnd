import icon_plus from "../assets/plus.svg";

const FloatingButton = () => {
  return (
    <button className="write__btn" type="button">
      <img src={icon_plus} alt="write button" />
    </button> 
  );
};
export default FloatingButton;