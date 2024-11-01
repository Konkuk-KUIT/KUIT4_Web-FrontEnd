import React, {useState} from 'react'

const ProductRow = ({product, deleteProduct, editProduct}) => {


  return (
    <tr>
      <td style={{color: product.stocked ? "black" : "red"}}>{product.name}</td>
      <td>{product.price}</td>
      <td><input type="button" value="✖️" style={{"border":"none", "backgroundColor":"transparent"}} onClick={() => {deleteProduct(product)}}/></td>
      <td><input type="button" value="🔧" style={{"border":"none", "backgroundColor":"transparent"}} onClick={() => {editProduct(product)}}/></td>
    </tr>
  )
}

export default ProductRow