import "../styles/Content.css";

import Chat from "../assets/chat.svg";
import Heart from "../assets/heart.svg";
const Content = ({ items }) => {
  return (
    <div>
      {items.map(
        (item, index) => item.isSold && <DataList {...item} key={index} />
      )}
    </div>
  );
};

const DataList = (data) => {
  return (
    <>
      <section>
        <button className="item-container">
          <img src={require("../assets/" + data.image)} />
          <div className="item">
            <div className="item__desc">
              <span className="item__name">{data.title}</span>
              <div className="item__subdesc">
                <span>{data.location}</span>
                <span>·</span>
                <span>{data.timeAgo}</span>
              </div>
              <span className="item__price">{data.price}</span>
            </div>

            <div className="item__icon">
              <div className="item__icon-container">
                <img src={Chat} alt="댓글 개수 표현 사진" />
                <span>{data.comments}</span>
              </div>
              <div className="item__icon-container">
                <img src={Heart} alt="좋아요 개수 표현 사진" />
                <span>{data.likes}</span>
              </div>
            </div>
          </div>
        </button>
      </section>
    </>
  );
};

export default Content;
