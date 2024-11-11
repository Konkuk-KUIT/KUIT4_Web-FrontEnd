import React, { useState } from "react";

const InputBar = ({ addProduct }) => {
  const [newProduct, setNewProduct] = useState({
    id: "0",
    category: "",
    price: 0,
    stocked: true,
    name: "",
  });

  const handleChange = (value, label) => {
    setNewProduct({ ...newProduct, [label]: value }); // ...newProduct는 newProduct의 키-값을 그대로 복사하여 새로운 객체를 만들어냄, [lavel]:value는 이 복사된 새로운 객체에서 label값의 value를 새로 넣거나 갱신함
  };

  const handleAddNewProduct = () => {
    const productWithId = { ...newProduct, id: Date.now().toString() };
    addProduct(productWithId);
    setNewProduct({ category: "", price: 0, stocked: true, name: "" });
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
      <input
        type="checkbox"
        value={newProduct.stocked}
        onChange={(e) => handleChange(e.target.value, "stocked")}
      />
      <input
        type="text"
        value={newProduct.name}
        onChange={(e) => handleChange(e.target.value, "name")}
        placeholder="name..."
      />
      <button onClick={handleAddNewProduct} type="button">
        Click
      </button>
    </form>
  );
};

export default InputBar;
