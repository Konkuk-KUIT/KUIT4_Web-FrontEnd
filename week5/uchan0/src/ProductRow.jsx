import React from "react";

const ProductRow = ({ product, onClickDelete }) => {
  const handleDeleteProduct = () => {
    //모달창으로 삭제할 것인지 확인
    const confirm = window.confirm("정말 삭제하시겠습니까?");
    //확인 눌렀을 때만 삭제
    if (confirm) {
      onClickDelete(product);
    }
  };

  return (
    <tr>
      <td style={{ color: product.stocked ? "black" : "red" }}>
        {product.name}
      </td>
      <td>{product.price}</td>
      <td>
        <button type="button" onClick={handleDeleteProduct}>
          🗑️
        </button>
      </td>
    </tr>
  );
};

export default ProductRow;
