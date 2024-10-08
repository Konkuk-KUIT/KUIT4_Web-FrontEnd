import icon_chat_mini from "../assets/chat-mini.svg";
import icon_heart from "../assets/heart.svg";

const Content = ({ items }) => {

  console.log("Current path:", window.location.pathname);

  return (
    <section class="home-posts">

      {items.map(
        (item, i) => (
          item.isSold === true &&
          <button class="product-post" type="button" key={i}>
            <img class="product-img" src={require(`../assets/${item.image}`)} alt={`${item.title} image`} />
            {/* <img class="product-img" src={"http://placehold.co/110"} alt={`${item.title} image`} /> */}          
            <div class="product-info">
              <div class="product-name">{item.title}</div>
              <div class="product-location">{item.location} · {item.timeAgo}</div>
              <div class="product-price">{item.price}</div>
              <div class="product-contact">
                {item.comments === 0 ? <div></div> : <> <img src={icon_chat_mini} alt="chat count" /> <span class="product-count">{item.comments}</span> </>}
                {item.likes === 0 ? <div></div> : <> <img src={icon_heart} alt="like count" /> <span class="product-count">{item.likes}</span> </>}
              </div>
            </div>
          </button>
        ))
      }

    </section>
  );
};
export default Content;