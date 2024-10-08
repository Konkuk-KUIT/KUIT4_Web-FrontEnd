import icon_chat_mini from "../assets/chat-mini.svg";
import icon_heart from "../assets/heart.svg";

const Content = (props) => {

  console.log("Current path:", window.location.pathname);

  return (
    <section class="home-posts">

      {props.items.map(
        (prop, i) => (
          prop.isSold === true &&
          <button class="product-post" type="button" key={i}>
            <img class="product-img" src={require(`../assets/${prop.image}`)} alt={`${prop.title} image`} />
            {/* <img class="product-img" src={"http://placehold.co/110"} alt={`${prop.title} image`} /> */}          
            <div class="product-info">
              <div class="product-name">{prop.title}</div>
              <div class="product-location">{prop.location} · {prop.timeAgo}</div>
              <div class="product-price">{prop.price}</div>
              <div class="product-contact">
                {prop.comments === 0 ? <div></div> : <> <img src={icon_chat_mini} alt="chat count" /> <span class="product-count">{prop.comments}</span> </>}
                {prop.likes === 0 ? <div></div> : <> <img src={icon_heart} alt="like count" /> <span class="product-count">{prop.likes}</span> </>}
              </div>
            </div>
          </button>
        ))
      }

    </section>
  );
};
export default Content;