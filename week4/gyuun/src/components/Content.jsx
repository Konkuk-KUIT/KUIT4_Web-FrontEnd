import tranImage from '../assets/tran.svg';
import seeImage from '../assets/see.svg';
import vectorImage from '../assets/vector.svg';
import vectorsImage from '../assets/vectors.svg';
import comment from '../assets/comment.svg';
import heart from '../assets/heart.svg';
import React from "react";
import "./index.css";
import marketModel from "../models/MarketModel";
const Middletopheaderaddress = () => {
    return (
      <div className="header__address">
        <div className="header__address-title">
          {marketModel.location}
        </div>
        <img src={tranImage} alt="잉" className="tran" />
      </div>
    );
  };
  
  const Middletopheadericons = () => {
    return (
      <div className="header__icons">
        <img src={seeImage} alt="봐라" />
        <img src={vectorImage} alt="보라고" />
        <img src={vectorsImage} alt="넹" />
      </div>
    );
  };
  
  const Middletop = () => {
    return (
      <div className="middel-top-bar">
        <Middletopheaderaddress />
        <Middletopheadericons />
      </div>
    );
  }; 
  const Line2 = () =>{
    return <>
    <div className="line2"></div>
    </>
  }
  
  const Middlecontent = () => {
    return <>
      {marketModel.items
      .filter(item => item.isSold)
      .map((item,index)=>(
        <div key = {index} className="middle_content_s">
          <img src={item.image} alt="" className="contentimg" />
          <div className="middle_content_s_right">
              <div className="middle_content_s_top">
                <div className="title">{item.title}</div>
                <div className="title_location">{item.location} · {item.timeAgo}</div>
                <div className="discount">{item.price}</div>
              </div>
  
              <div className="middle_content_s_bottom">
                <div className="middle_content_icontent">
                      <img src={comment} alt="comment" className="icon" />
                      <div className="middle_content_content">{item.comments}</div>
                </div>
                <div className="middle_content_icontent">
                <img src={heart} alt="heart" className="icon" />
                      <div className="middle_content_content">{item.likes}</div>
               
                </div>
              </div>
  
              
  
          </div>
  
        </div>
  
      ))}
  
    </>
  };
  
  const Content = () => {
    return (
      <div className="middle-menu">
        <Middletop />
        <Line2/>
        <div className="middle_content">
        <Middlecontent />
        </div>
      </div>
    );
  };
  export default Content;
