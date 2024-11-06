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

  const addProduct = (newProduct) => {
    // previousData(이전 배열 상태)를 매개변수로 받아와 새로운 배열을 만듬
    // ...previoiusData는 [product1, product2] 이런 식으로 배열을 펼쳐놓음 여기다가 newProduct를 끝에 추가해서 새로운 배열을 만드는 거임 => 기존 배열에다가 newProduct를 추가만 시킨다고 보면 됨
    setProduct((previousData) => [...previousData, newProduct]);
  };

  //deleteProduct => 먼저
  const deleteProduct = (deletedProduct) => {
    setProduct((previousDatas) =>
      previousDatas.filter(
        (previousData) => previousData.id !== deletedProduct.id
      )
    );
  };
  //editProduct => 가능하다면
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
        deleteProduct={deleteProduct}
      />
      <InputBar addProduct={addProduct} />
    </div>
  );
};
export default FilterableProductTable;
