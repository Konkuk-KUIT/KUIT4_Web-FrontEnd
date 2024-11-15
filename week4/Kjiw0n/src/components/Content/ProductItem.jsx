const ProductItem = ({
    image,
    image_alt,
    title,
    location,
    timeAgo,
    price,
    comments,
    likes,
}) => {
    return (
        <>
            <div className="product-list__item-container">
                <img src={image} alt={image_alt} className="item__img" />
                <div className="item__info">
                    <div className="item__content">
                        <span className="item__title">{title}</span>
                        <div className="item__info-detail">
                            <span>
                                {location}·{timeAgo}
                            </span>
                        </div>
                        <span className="item__price">{price}</span>
                    </div>

                    <div className="item__icon-container">
                        <div className="item__comment-icon">
                            <img src="/assets/comment.svg" alt="comment icon" />
                            <span className="item__comment-count">
                                {comments}
                            </span>
                        </div>
                        <div className="item__favorite-icon">
                            <img
                                src="assets/favorite.svg"
                                alt="favorite icon"
                            />
                            <span className="item__favorite-count">
                                {likes}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductItem;
