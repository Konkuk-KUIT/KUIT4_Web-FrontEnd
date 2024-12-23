import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const groupProductsByCategory = (products = []) => {
  return Object.values(
    products.reduce((acc, product) => {
      const { category } = product;
      if (!acc[category]) {
        acc[category] = { category, products: [] };
      }
      acc[category].products.push(product);
      return acc;
    }, {})
  );
};
const filteredProducts = (products, filterText, inStockOnly) => {
  return products.filter((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) == -1) {
      return false;
    }
    if (inStockOnly && !product.stocked) {
      return false;
    }
    return true;
  });
};

const ProductTable = ({
  product,
  filterText,
  inStockOnly,
  deleteProduct,
  editProduct,
}) => {
  const filterProducts = filteredProducts(product, filterText, inStockOnly);
  const groupedProducts = groupProductsByCategory(filterProducts);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>NAME</th>
            <th>PRICE</th>
          </tr>
        </thead>

        <tbody>
          {groupedProducts.map((productCategory) => (
            <React.Fragment key={productCategory.category}>
              <ProductCategoryRow category={productCategory.category} />
              {productCategory.products.map((product) => (
                <ProductRow
                  key={`${productCategory.category}-${product.id}`}
                  product={product}
                  deleteProduct={deleteProduct}
                  editProduct={editProduct}
                />
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default ProductTable;
