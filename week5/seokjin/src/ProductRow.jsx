import React from "react";

const ProductRow = ({ product, deleteProduct }) => {
  return (
    <tr>
      <td style={{ color: product.stocked ? "black" : "red" }}>
        {product.name}
      </td>
      <td>{product.price}
        <button onClick={() => deleteProduct(product.id)} style={{ marginLeft: "10px" }}>
          🗑️
        </button>
      </td>
    </tr>
  );
};

export default ProductRow;
