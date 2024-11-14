import React from "react";

const ProductRow = ({ product, deleteProduct }) => {
  return (
    <tr>
      <td style={{ color: product.stocked ? "black" : "red" }}>
        {product.name}
      </td>
      <td>{product.price}</td>
      <td>
        <button type="button" onClick={() => deleteProduct(product)}>
          🗑️
        </button>
      </td>
    </tr>
  );
};

export default ProductRow;
