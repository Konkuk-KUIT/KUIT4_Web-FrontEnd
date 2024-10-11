import ProductItem from "./ProductItem";

const Content = ({ items }) => {
    return (
        <>
            <section className="product-list">
                {items.map(
                    ({
                        id,
                        title,
                        location,
                        timeAgo,
                        price,
                        image,
                        image_alt,
                        comments,
                        likes,
                        isSold,
                    }) =>
                        isSold === true ? (
                            <ProductItem
                                key={id}
                                title={title}
                                location={location}
                                timeAgo={timeAgo}
                                price={price}
                                image={image}
                                imageAlt={image_alt}
                                comments={comments}
                                likes={likes}
                            />
                        ) : null
                )}
            </section>
        </>
    );
};

export default Content;
