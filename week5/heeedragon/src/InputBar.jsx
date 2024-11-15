import React, { useState } from "react"

const InputBar = ({addProduct}) => {

    const [newProduct, setNewProduct] = useState({
        id: "0",
        category: "",
        price: 0,
        stocked: true,
        name: ""
    });

    const handleChange = (value, label) => {
        setNewProduct({...newProduct, [label] : value})
    }

    const handleAddNewProduct = () => {
        const productWithID = {...newProduct, id: Date.now().toString()};
        addProduct(productWithID);
        setNewProduct({
            category: "",
            price: 0,
            stocked: true,
            name: ""});
    };

    return (
        <form>
            <input type="text"
            value={newProduct.category} 
            onChange={(e) => handleChange(e.target.value, "category")}
            placeholder="category..." />
            <input type="text"
            value={newProduct.price}
            onChange={(e) => handleChange(e.target.value, "price")}
            placeholder="price..." />
            <label>Is Stocked</label>
            <input type="checkbox"
            onChange={(e) => handleChange(e.target.checked, "stocked")}
            value={newProduct.stocked}/>
            <input type="text"
            value={newProduct.name}
            onChange={(e) => handleChange(e.target.value, "name")}
            placeholder="name..." />
            <button onClick={handleAddNewProduct} type={"button"}>ADD</button>
        </form>
    );
};

export default InputBar;