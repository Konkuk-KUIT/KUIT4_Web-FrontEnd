import React from "react";

const ProductItem = (item) => {
  return (
    <>
      <div className="item-list">
        <button type="button" className="item-container">
          <img src={item.image} alt={item.title} />

          <div className="item-desc">
            <div className="item-info">
              <span className="item-name">{item.title}</span>

              <div className="item-about">
                <span>{item.location}</span>
                <span>·</span>
                <span>{item.timeAgo}</span>
              </div>
              <span className="item-price">{item.price}</span>
            </div>

            <div className="item-follower">
              {item.comments ? (
                <div className="comments">
                  <img src="assets/comments.svg" alt="댓글" />
                  <span>{item.comments}</span>
                </div>
              ) : null}

              {item.likes ? (
                <div className="likes">
                  <img src="assets/likes.svg" alt="좋아요" />
                  <span>{item.likes}</span>
                </div>
              ) : null}
            </div>
          </div>
        </button>
      </div>
      <div className="divider"> </div>
    </>
  );
};

const Content = ({ items }) => {
  return (
    <div className="product-list">
      {items.map(
        (item, index) => item.isSold && <ProductItem key={index} {...item} />
      )}
    </div>
  );
};

export default Content;
