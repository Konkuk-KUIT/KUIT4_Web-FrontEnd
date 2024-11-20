import React, { useState } from "react";

const ProductRow = ({ product, deleteProduct, editProduct }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [productName, setProductName] = useState(product.name);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        editProduct(product.id, { name: productName });
        setIsEditing(false);
    };

    return (
        <tr>
            <td style={{ color: product.stocked ? "black" : "red" }}>
                {isEditing ? (
                    <input
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                    />
                ) : (
                    product.name
                )}
            </td>
            <td>{product.price}</td>
            <td
                style={{ cursor: "pointer", paddingRight: "10px" }}
                onClick={() => deleteProduct(product.id)}
            >
                🗑️
            </td>
            <td
                style={{ cursor: "pointer" }}
                onClick={isEditing ? handleSaveClick : handleEditClick}
            >
                {isEditing ? "☑️" : "✏️"}
            </td>
        </tr>
    );
};

export default ProductRow;
