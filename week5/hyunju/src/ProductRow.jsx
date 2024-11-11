import React from "react";

const ProductRow = ({ product, onDelete  }) => {
  return (
    <tr>
      <td style={{ color: product.stocked ? "black" : "red" }}>
        {product.name}
      </td>
      <td>{product.price}</td>
      <td>
        <button onClick={onDelete}>❌</button>
      </td>
    </tr>
  );
};

export default ProductRow;
