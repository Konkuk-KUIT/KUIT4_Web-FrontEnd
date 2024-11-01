import React from "react";

const ProductRow = ({ product, deleteProduct }) => {
  return (
    <tr>
      <td style={{ color: product.stocked ? "black" : "red" }}>
        {product.name}
      </td>
      <td>{product.price}</td>
      <button onClick={()=>deleteProduct(product.id)}> 🚫🚫</button>
    </tr>
  );
};

export default ProductRow;