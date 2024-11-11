import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import InputBar from "./InputBar";

const FilterableProductTable = () => {
  const [product, setProduct] = useState([
    { id: "1", category: "Fruits", price: 1, stocked: true, name: "Apple" },
    {
      id: "2",
      category: "Fruits",
      price: 1,
      stocked: true,
      name: "Dragonfruit",
    },
    {
      id: "3",
      category: "Fruits",
      price: 2,
      stocked: false,
      name: "Passionfruit",
    },
    {
      id: "4",
      category: "Vegetables",
      price: 2,
      stocked: true,
      name: "Spinach",
    },
    {
      id: "5",
      category: "Vegetables",
      price: 4,
      stocked: false,
      name: "Pumpkin",
    },
    { id: "6", category: "Vegetables", price: 1, stocked: true, name: "Peas" },
  ]);

  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  // [Add] 수정 중인 상품을 추적하기 위한 상태 추가
  const [editingProduct, setEditingProduct] = useState(null);

  const addProduct = (newProduct) => {
    setProduct((previousData) => [...previousData, newProduct]);
  };

  // [Add] 상품 삭제 함수
  const deleteProduct = (productId) => {
    setProduct((previousData) =>
      previousData.filter((item) => item.id !== productId)
    );
  };

  // [Add] 상품 수정 함수
  const updateProduct = (updatedProduct) => {
    setProduct((previousData) =>
      previousData.map((item) =>
        item.id === updatedProduct.id ? updatedProduct : item
      )
    );
    setEditingProduct(null); // 수정 완료 후 수정 모드 종료
  };

  // [Add] 수정 모드 시작 함수
  const startEditing = (productToEdit) => {
    setEditingProduct(productToEdit);
  };

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        product={product}
        filterText={filterText}
        inStockOnly={inStockOnly}
        // [Add] 새로운 props 전달
        onDelete={deleteProduct}
        onEdit={startEditing}
        onUpdate={updateProduct}
        editingProduct={editingProduct}
      />
      <InputBar addProduct={addProduct} />
    </div>
  );
};

export default FilterableProductTable;
