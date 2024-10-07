const Content = ({ products }) => {
    return (
      <div className="content-product">
        {products.map((product, index) => (
          <button key={index} className="product-item" type="button" style={{ display: 'block' }}>
            <div className="product-image">
              <img src={`./assets/${product.image}`} alt={product.title} />
              {/* 백틱으로 템플릿 리터럴로 나타내 동적으로 src 경로 설정 */}
            </div>
            <div className="product-info">
              <span>{product.title + " "}</span>
              <span>{product.location + " "}</span>
              <span>{product.timeAgo + " "}</span>
              <span>{product.price + " "}</span>
              <span>{product.comments + " "}</span>
              <span>{product.likes + " "}</span>
              {product.isSold ? <span>판매됨</span> : <span>판매중</span>}
            </div>
          </button>
        ))}
      </div>
    );
  };

  export default Content;