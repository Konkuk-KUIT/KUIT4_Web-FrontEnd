import icon_chat_mini from "../assets/chat-mini.svg";
import icon_heart from "../assets/heart.svg";

const Content = ({ items }) => {

  return (
    <section className="home-posts">

      {items.map(
        (item, i) => (
          item.isSold === true &&
          <button className="product-post" type="button" key={i}>
            <img className="product-img" src={require(`../assets/${item.image}`)} alt={`${item.title} image`} />       
            <div className="product-info">
              <div className="product-name">{item.title}</div>
              <div className="product-location">{item.location} · {item.timeAgo}</div>
              <div className="product-price">{item.price}</div>
              <div className="product-contact">
                {item.comments === 0 ? <div></div> : <> <img src={icon_chat_mini} alt="chat count" /> <span className="product-count">{item.comments}</span> </>}
                {item.likes === 0 ? <div></div> : <> <img src={icon_heart} alt="like count" /> <span className="product-count">{item.likes}</span> </>}
              </div>
            </div>
          </button>
        ))
      }

    </section>
  );
};
export default Content;