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
    setProduct((previousData) => [...previousData, newProduct]);
  };
  const deleteProduct = (deProduct)  =>{
    setProduct((previousData) =>
      previousData.filter((product)=> product.id !== deProduct));
  }
  const editProducts = (editproduct)=>{
    // console.log("Editing Product:", updatedProduct);

    setProduct((previousData)=>
      previousData.map((product) =>{
        if(product.id===editproduct.id) {
          return {
            ...product,
            price: editproduct.price, // 수정된 price 반영
            stocked: editproduct.stocked,
             // 수정된 stocked 반영
          };
        }
    else
    return product
      }));
  }
  //deleteProduct
  //EditProduct
  return (
    <div>
      <SearchBar
        filterText={filterText}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        product={product}
        filterText={filterText}
        inStockOnly={inStockOnly}
        ondeleteProduct={deleteProduct}
        oneditProduct = {editProducts}
      />
      <InputBar addProduct={addProduct} />
    </div>
  );
};

export default FilterableProductTable;
