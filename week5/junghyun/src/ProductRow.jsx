import React, {useState} from "react";  // eslint-disable-line no-unused-vars

const ProductRow = ({product, deleteProduct, editProduct}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [edittingProduct, setEditProduct] = useState({...product});
  console.log(product);

  const handleChange = (value, label) => {
    setEditProduct({...edittingProduct, [label]: value});
    console.log({...edittingProduct});
  };

  const handleEditProduct = () => {
    editProduct(edittingProduct);
    setIsEditing(false);
  };

  return (
    <tr>
      <td style={{color: product.stocked ? "black" : "red"}}>
        {product.name}
      </td>
      <td>
        {product.price}
      </td>
      <td>
        <button type={"button"} onClick={() => deleteProduct(product)}>X</button>
      </td>
      <td>
        {!isEditing && 
          <button type={"button"} onClick={() => setIsEditing(true)}>E</button>
        }
        {isEditing && 
          <form>
            <input
              type="text"
              value={edittingProduct.category}
              onChange={(e) => handleChange(e.target.value, "category")}
              placeholder="category..."
            />
            <input
              type="text"
              value={edittingProduct.price}
              onChange={(e) => handleChange(e.target.value, "price")}
              placeholder="price..."
            />
            <label>Is Stocked</label>
            <input
              type="checkbox"
              value={edittingProduct.stocked}
              onChange={(e) => handleChange(e.target.checked, "stocked")}
              checked={edittingProduct.stocked}
            />
            <input
              type="text"
              value={edittingProduct.name}
              onChange={(e) => handleChange(e.target.value, "name")}
              placeholder="name..."
            />
            <button type={"button"} onClick={handleEditProduct}>
              Edit
            </button>
            <button type={"button"} onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </form>
        }
      </td>
    </tr>
  );
};
export default ProductRow;