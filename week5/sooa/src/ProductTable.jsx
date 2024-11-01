import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const filterProducts = (products, filterText, inStockOnly) => {
  return products.filter((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      // indexOf()는 문자열을 포함하면 해당 인덱스를 반환
      return false;
    }

    if (inStockOnly && !product.stocked) {
      return false;
    }
    return true;
  });
};

const grupedProductByCategory = (products = []) => {
  return Object.values(
    products.reduce((acc, product) => {
      // product를 순회하며? acc 객체를 만들어나간다고 생각하면 됨
      const { category } = product; // category를 키값으로 씀
      if (!acc[category]) {
        acc[category] = { category, products: [] };
      }

      acc[category].products.push(product);
      return acc;
    }, {}) // 뒤의 {}는 초기값
  );
};

const ProductTable = ({ product, filterText, inStockOnly, deleteProduct }) => {
  const filteredProducts = filterProducts(product, filterText, inStockOnly);

  const grupedProducts = grupedProductByCategory(filteredProducts);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {grupedProducts.map((productCategory) => (
          //Fragment 사용하면 DOM요소에 그려지지 않아서 불필요한 렌더링 막음
          <React.Fragment key={productCategory.category}>
            <ProductCategoryRow category={productCategory.category} />
            {productCategory.products.map((product) => (
              <ProductRow
                key={product.id}
                product={product}
                deleteProduct={deleteProduct}
              />
            ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
