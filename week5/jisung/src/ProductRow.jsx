import React from 'react'

const ProductRow = ({product, deleteProduct}) => {
  return (
    <tr>
        <td style={{color:product.stocked ? "black" : "red"}}> 
            {product.name}
        </td>
        <td>{product.price}</td>
        <td>
          <button type="button" onClick={() => deleteProduct(product.id)}>삭제</button>
          {/* 이벤트 위임 가능? */}
        </td>
    </tr>
  )
}

export default ProductRow
