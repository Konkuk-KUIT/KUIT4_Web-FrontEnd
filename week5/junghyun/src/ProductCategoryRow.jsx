import React from "react";  // eslint-disable-line no-unused-vars

const ProductCategoryRow = ({category}) => {
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  );
};
export default ProductCategoryRow;