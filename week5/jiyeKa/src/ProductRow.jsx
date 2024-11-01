import React, {useState} from 'react'

const ProductRow = ({product, deleteProduct, editProduct}) => {
  const [isEdit, setisEdit] = useState(false);
  const [editedProduct, setEditedProduct] = useState({ name: product.name, price: product.price});

  const handleEditChange = (e) => {
    const {name, value} = e.target;
    setEditedProduct({...editedProduct,[name]:value});
  };

  const handleSaveEdit = () => {
    editProduct(product.id, editedProduct);
    setisEdit(false);
  };

  return (
    <tr>
      <td style={{color: product.stocked ? "black" : "red"}}>
        {isEdit ? (
          <input type="text" name="name" value={editedProduct.name} onChange={handleEditChange}/>
        ) : (
          product.name
        )}
      </td>
      <td>
      {isEdit ? (
          <input type="text" name="price" value={editedProduct.price} onChange={handleEditChange}/>
        ) : (
          product.price
        )}
      </td>
      
      <td><button style={{border:"none", backgroundColor:"transparent"}} onClick={() => {deleteProduct(product)}}>✖️</button></td>
      <td>{isEdit ? (
          <button style={{border:"none", backgroundColor:"transparent"}} onClick={handleSaveEdit}>🔧</button>
        ) : (
          <button style={{ border: "none", backgroundColor: "transparent" }} onClick={()=>{setisEdit(true)}}>🔧</button>
        )}
        </td>
    </tr>
  )
}

export default ProductRow