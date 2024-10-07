import React from "react";
import ImageCollection from "../ImageCollection";
import marketModel from "../models/MarketModel";

const Content = () => {
  return (
    <div>
      <article className="post">
        {marketModel.items.map(
          (item, index) =>
            item.isSold === true && (
              <section key={index} className="post__container">
                <div className="product__container">
                  <ImageCollection imgName={item.image} />
                  <div className="product__info">
                    <span className="product__name">{item.title}</span>
                    <div className="product__upload--info">
                      <span className="location--clickable">
                        {item.location}
                      </span>
                      <span className="product__info--normaltext">·</span>
                      <span className="product__info--normaltext">
                        {item.timeAgo}
                      </span>
                    </div>
                    <span className="product__price">{item.price}</span>
                  </div>
                </div>
                <div className="interest__container">
                  {item.comments > 0 && (
                    <>
                      <ImageCollection imgName={"smallChat.svg"} />
                      <span className="product__info--normaltext">
                        {item.comments}
                      </span>
                    </>
                  )}
                  {item.likes > 0 && (
                    <>
                      <ImageCollection imgName={"heart.svg"} />
                      <span className="product__info--normaltext">
                        {item.likes}
                      </span>
                    </>
                  )}
                </div>
              </section>
            )
        )}
      </article>
    </div>
  );
};

export default Content;
