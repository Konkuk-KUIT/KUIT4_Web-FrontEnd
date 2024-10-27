import React from "react";

const ProductRow = ({ product, ondeleteProduct}) => {
  return (
    <tr>
      <td style={{ color: product.stocked ? "black" : "red" }}>
        {product.name}
      </td>
      <td>{product.price}</td>
      <td> <button  type={"button"} onClick={()=>ondeleteProduct(product.id)}>
        Delete
      </button></td>
      <td> <button  type={"button"} onClick={()=>ondeleteProduct(product.id)}>
        Edit
      </button></td>

    </tr>
  );
};

export default ProductRow;
