import React, { useState } from "react";

const ProductRow = ({ product, ondeleteProduct,oneditProduct}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedPrice, setEditedPrice] = useState(product.price); // 초기 값 설정
    const [editedStocked, setEditedStocked] = useState(product.stocked); // 초기 값 설정
        const handleSave = () => {
            const updatedProduct = {
            ...product,
            price: editedPrice,
            stocked: editedStocked,
            };
            oneditProduct(updatedProduct); // 상위 컴포넌트로 변경된 product 전달
            setIsEditing(false);
        };
        const editProductBox = (
        
            <>
            
              <input
                type="text"
                value={editedPrice}
                placeholder="price..."
                onChange={(e) => {setEditedPrice(e.target.value);
                  
                }} // editProduct로 수정 전송

              />
              <label>Is Stocked</label>
              <input
                type="checkbox"
                checked={editedStocked} // value 대신 checked 속성을 사용해야 함
                onChange={(e) => {setEditedStocked(e.target.checked);
                    
                }}

              />
             <button type="button" onClick={handleSave}>
                Save
                
            </button>
            </>
            
          );
         
    
    
  return (
    <tr>
      <td style={{ color: product.stocked ? "black" : "red" }}>
        {product.name}
      </td>
      <td>{product.price}</td>
      <td> <button  type={"button"} onClick={()=>ondeleteProduct(product.id)}>
        Delete
      </button></td>
      <td> <button  type={"button"} onClick={()=>setIsEditing(!isEditing)}>
      {isEditing ? "Cancel" : "Edit"}
      </button></td>
        <td>{isEditing&&editProductBox}</td>
    </tr>
  );
};

export default ProductRow;
