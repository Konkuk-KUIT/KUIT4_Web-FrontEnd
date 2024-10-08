import React from "react";
import "./style.css";

const Content = ({products}) => {
    
// const [data, Setdata] =useState();
    return (
      <div className="main-contents">
        {products.map((i)=>(
            (i.isSold)
            &&(
            <div className="main-article">
                <img src={`/assest/${i.imgSrc}`}className="productImg" alt="제품사진6"/>
                <div className="article1-desc">
                    <div className="desc-header">{i.descHeader}</div>
                    <div className="desc-text">
                        <div className="desc-where">{i.descWhere} </div>
                        <div className="desc-when">{i.descWhen}</div>
                    </div>  
                    <div className="desc-cost">{i.dsecCost}</div>
                    <div className="img-zone"> </div>
                </div>
            </div>
            )
        ))}
          <div className="fixed-button">
              <img className="plus-button" alt="can go anywhere to want" src="/assest/Frame 21.svg" />
          </div>
      </div>
    //   <img className="desc-message-img1" src="/assest/bx_chat.svg" alt="메시지 아이콘"/>
    //   <span>3</span>
    //   <img className="desc-heart-img2" src="/assest/ant-design_heart-outlined.svg" alt="하트 아이콘"/>
    //   <span>11</span>
    );
};

export default Content;
