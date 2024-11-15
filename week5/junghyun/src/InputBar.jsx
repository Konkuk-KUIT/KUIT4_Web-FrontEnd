import React, {useState} from "react";  // eslint-disable-line no-unused-vars

const InputBar = ({addProduct}) => {
  const [newProduct, setNewProduct] = useState({
    id: "0",
    category: "",
    price: 0,
    stocked: false,
    name: "",
  });

  const handleChange = (value, label) => {
    setNewProduct({...newProduct, [label]: value});
  };

  const handleAddNewProduct = () => {
    const productWithId = {...newProduct, id: Date.now().toString()};
    addProduct(productWithId);
    setNewProduct({category: "", price: 0, stocked: false, name: ""});
  };

  return (
    <form>
      <input
        type="text"
        value={newProduct.category}
        onChange={(e) => handleChange(e.target.value, "category")}
        placeholder="category..."
      />
      <input
        type="text"
        value={newProduct.price}
        onChange={(e) => handleChange(e.target.value, "price")}
        placeholder="price..."
      />
      <label>Is Stocked</label>
      <input
        type="checkbox"
        value={newProduct.stocked}
        onChange={(e) => handleChange(e.target.checked, "stocked")}
      />
      <input
        type="text"
        value={newProduct.name}
        onChange={(e) => handleChange(e.target.value, "name")}
        placeholder="name..."
      />
      <button type={"button"} onClick={handleAddNewProduct}>
        Click
      </button>
    </form>
  )
};
export default InputBar;