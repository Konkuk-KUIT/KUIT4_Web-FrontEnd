import React, { useState } from "react";

// [Edit] props에 새로운 함수들 추가
const ProductRow = ({ product, onDelete, onEdit, onUpdate, isEditing }) => {
  // [Add] 수정 중인 상품 데이터를 관리하기 위한 로컬 상태
  const [editedProduct, setEditedProduct] = useState({ ...product });

  // [Add] 수정 모드일 때 보여줄 UI
  if (isEditing) {
    return (
      <tr>
        <td>
          <input
            type="text"
            value={editedProduct.name}
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, name: e.target.value })
            }
          />
        </td>
        <td>
          <input
            type="number"
            value={editedProduct.price}
            onChange={(e) =>
              setEditedProduct({
                ...editedProduct,
                price: Number(e.target.value),
              })
            }
          />
        </td>
        <td>
          <input
            type="checkbox"
            checked={editedProduct.stocked}
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, stocked: e.target.checked })
            }
          />
        </td>
        <td>
          <button onClick={() => onUpdate(editedProduct)}>✅</button>
          <button onClick={() => onUpdate(product)}>❌</button>
        </td>
      </tr>
    );
  }

  // [Edit] 기존 UI에 수정/삭제 버튼 추가
  return (
    <tr>
      <td style={{ color: product.stocked ? "black" : "red" }}>
        {product.name}
      </td>
      <td>{product.price}</td>
      <td>
        <button onClick={() => onEdit(product)}>✏️</button>
        <button onClick={() => onDelete(product.id)}>🗑️</button>
      </td>
    </tr>
  );
};

export default ProductRow;
