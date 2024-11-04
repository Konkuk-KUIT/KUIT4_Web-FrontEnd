import React from 'react'

//아이콘 클릭시, props로 받아온 deleteProduct 함수 호출
const ProductRow = ({product, deleteProduct}) => {
    return (
        <tr>
            <td style={{color: product.stocked ? "black" : "red"}}>
                {product.name}
            </td>
            <td>
                {product.price}
            </td>
            <button onClick={()=>deleteProduct(product.id)}>🗑️</button>
        </tr>
    );
};

export default ProductRow;