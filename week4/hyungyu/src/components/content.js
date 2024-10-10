import heart from '../assets/heart.svg';
import chat from '../assets/chat.svg';

const Content = (props) => {
    const { items } = props.marketModel;
    const soldItems = items.filter(item => item.isSold === true); //조건부 랜더링
    return(
      <article className="post">
        {
          soldItems.map((item, index) => (
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
          )) //배열 랜더링
        }
      </article>
    );
  };

  export default Content;