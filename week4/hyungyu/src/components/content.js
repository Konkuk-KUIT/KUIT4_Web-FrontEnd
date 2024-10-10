import heart from '../assets/heart.svg';
import chat from '../assets/chat.svg';

import marketModel from '../models/MarketModel';

const Content = () => {
    const { items } = marketModel;
    return(
      <article className="post">
        {
          items.map((item, index) => (
            <section key={index} className="daangn-post">
              <img src={item.image} alt={item.title} />
              <div className="post-info">
              <div className="post-item-info">
                <span className="item-name">{item.title}</span>
                <span className="posting-place-date">{item.location} • {item.timeAgo}</span>
                <span className="item-price">{item.price}</span>
              </div>
              <div className="post-item-chat-heart">
                <span>{item.likes}</span>
                <button type="button">
                  <img src={chat} className="chat-icon" alt="chat icon" />
                </button>
                <span>{item.comments}</span>
                <button type="button">
                  <img src={heart} className="heart-icon" alt="heart icon" />
                </button>
              </div>
            </div>
            </section>
          ))
        }
      </article>
    );
  };

  export default Content;