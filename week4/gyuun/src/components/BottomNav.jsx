


import plus from '../assets/plus.svg';
import homein from '../assets/home_indicator.svg';

const Bottommenubutton = ()=>{
    return(
      <>
      <div className="botton_menu_button">
        <div className="circle">
          <img src={plus} alt="" />
        </div>
      </div>
      </>
    );
  }
  const Bottommenubar = ({ marketModel: { home } }) => {
    return (
      <>
        <div className="botton_menu_bar">
          <div className="botton_menu_bar_top">
            {home.map(({ image, location }, index) => (
              <div key={index} className="menu_bar_button">
                <img src={image} alt="" className="home1" />
                <div className="home2">{location}</div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };
  const Bottommenubarbottom = ()=>{
    return (<>
    <button className="botton_menu_bar_bottom">
      <img src={homein} alt="" className="homeindicator" />
    </button>
    </>)
  }
  const BottomNav = ({marketModel}) => {
    return (<>
    <nav className="botton_menu">
      <Bottommenubutton/>
      <Bottommenubar marketModel={marketModel}/>
      <Bottommenubarbottom/>
    </nav>
    </>);
  }; 
  export  default BottomNav;