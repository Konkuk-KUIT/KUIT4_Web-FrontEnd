import { useState } from "react";

const ProductRow = ({ product, deleteProduct, editProduct }) => {
  const [editableProduct, setEditableProduct] = useState({ ...product });
  const [isEdit, setIsEdit] = useState(false);
  const handleDelete = (e) => {
    deleteProduct(product);
  };
  const handleEdit = (e) => {
    setIsEdit(true);
  };
  const handleSave = () => {
    setIsEdit(false);
    editProduct(editableProduct);
  };
  const handleChange = (value, label) => {
    setEditableProduct((pre) => ({
      ...pre,
      [label]: value,
    }));
  };
  if (isEdit) {
    return (
      <tr>
        <td>
          <label>category</label>
          <br></br>
          <input
            type="text"
            defaultValue={product.category}
            onChange={(e) => handleChange(e.target.value, "category")}
          />
        </td>
        <td>
          <label>price</label>
          <br></br>
          <input
            type="text"
            defaultValue={product.price}
            onChange={(e) => handleChange(e.target.value, "price")}
          />
        </td>
        <td>
          <label>isstocked</label>
          <br></br>
          <input
            type="checkbox"
            defaultChecked={product.stocked}
            onChange={(e) => handleChange(e.target.value, "stocked")}
          />
        </td>
        <td>
          <label>name</label>
          <br></br>
          <input
            type="text"
            defaultValue={product.name}
            onChange={(e) => handleChange(e.target.value, "name")}
          />
        </td>
        <td>
          <button type="button" onClick={handleSave}>
            Click
          </button>
        </td>
      </tr>
    );
  }
  return (
    <tr>
      <td style={{ color: product.stocked ? "black" : "red" }}>
        {product.name}
      </td>
      <td>{product.price}</td>
      <td onClick={handleEdit}>✏</td>
      <td onClick={handleDelete}>🗑</td>
    </tr>
  );
};

export default ProductRow;
