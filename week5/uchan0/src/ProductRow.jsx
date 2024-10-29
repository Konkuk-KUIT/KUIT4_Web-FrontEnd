import React, { useState } from "react";

const ProductRow = ({ product, onClickDelete, onClickEdit }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [toEditProduct, setToEditProduct] = useState({
    id: "0",
    category: "",
    price: 0,
    stocked: false,
    name: "",
  });

  const handleChange = (value, label) => {
    setToEditProduct({ ...toEditProduct, [label]: value });
  };

  const editProduct = () => {
    onClickEdit(
      product,
      toEditProduct.category,
      toEditProduct.price,
      toEditProduct.stocked,
      toEditProduct.name
    );
  };

  const handleDeleteProduct = () => {
    //모달창으로 삭제할 것인지 확인
    const confirm = window.confirm(
      `${product.name} 제품을 정말 삭제하시겠습니까?`
    );
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
        {/* 연필 버튼 클릭 시 해당 제품 정보 수정 */}
        {/* 클릭 시 editMode로 바뀜. 한번 더 클릭하면 취소됨 */}
        <button type="button" onClick={() => setIsEditMode(!isEditMode)}>
          ✏️
        </button>
        {/* 쓰레기통 버튼 클릭 시 해당 제품 삭제 */}
        <button
          type="button"
          onClick={handleDeleteProduct}
          style={{ marginLeft: "10px" }}
        >
          🗑️
        </button>
      </td>
      <td>
        {/* editMode가 되면 입력창이 뜨게함 */}
        {isEditMode && (
          <form>
            <input
              type="text"
              value={toEditProduct.category}
              onChange={(e) => handleChange(e.target.value, "category")}
              placeholder="category..."
            />
            <input
              type="text"
              value={toEditProduct.price}
              onChange={(e) => handleChange(e.target.value, "price")}
              placeholder="price..."
            />
            <label>Is Stocked?</label>
            <input
              type="checkbox"
              value={toEditProduct.stocked}
              onChange={(e) => handleChange(e.target.checked, "stocked")}
            />
            <input
              type="text"
              value={toEditProduct.name}
              onChange={(e) => handleChange(e.target.value, "name")}
              placeholder="name..."
            />
            {/* 모든 입력을 했을 때만 확인 버튼이 보이게 함 */}
            {toEditProduct.category &&
              toEditProduct.price &&
              toEditProduct.name && (
                <button
                  onClick={editProduct}
                  type={"button"}
                  style={{
                    marginLeft: "5px",
                    padding: "5px 10px",
                    border: "1px solid #000",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  확인!
                </button>
              )}

            <button
              onClick={() => {
                setToEditProduct({
                  category: "",
                  price: 0,
                  stocked: true,
                  name: "",
                });
                setIsEditMode(false);
              }}
              type={"button"}
              style={{
                marginLeft: "5px",
                padding: "5px 10px",
                border: "1px solid #000",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              취소
            </button>
          </form>
        )}
      </td>
    </tr>
  );
};

export default ProductRow;
