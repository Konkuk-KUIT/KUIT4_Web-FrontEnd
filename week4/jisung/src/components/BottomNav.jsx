const BottomNav = ({ navBarLists }) => {
    return (
      <div className="bottonNavigation">
        {navBarLists.map((navBarItem, index) => (
          <button key={index} className="nav-item" type="button">
            <img src={`./assets/${navBarItem.image}`} alt="navBarItem.type" />
            <div>{navBarItem.type}</div>
          </button>
        ))}
      </div>
    );
  };

  export default BottomNav;