import "../styles/Content.css";

import ChatMessageBlock from "../assets/chat-message_block.svg";
import Heart from "../assets/heart.svg";

const ProductItem = (item) => {
  return (
    <>
      <div className="product-item">
        <div className="product-item__image">
          <img src={require(`../assets/${item.image}`)} alt={item.title} />
        </div>
        <div className="product-item__details">
          <h2 className="product-item__name">{item.title}</h2>
          <div className="product-item__location">
            {item.location} · {item.timeAgo}
          </div>
          <span className="product-item__price">{item.price}</span>
          <div className="product-item__meta">
            <div className="meta__wrap">
              <img src={ChatMessageBlock} alt="채팅 이미지" />
              <span className="meta-text">{item.comments}</span>
            </div>

            <div className="meta__wrap">
              <img src={Heart} alt="하트 이미지" className="meta_icon" />
              <span className="meta-text">{item.likes}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="underline_1px"></div>
    </>
  );
};
const Content = (props) => {
  return (
    <>
      <div className="product-list">
        {props.items.map(
          (item, idx) => item.isSold && <ProductItem key={idx} {...item} />
        )}
      </div>
    </>
  );
};
export default Content;
