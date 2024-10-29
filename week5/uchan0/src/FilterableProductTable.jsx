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

  // 실제 삭제되는 로직 filter함수로 구현
  const deleteProduct = (doDeleteProduct) => {
    setProduct((previousData) => {
      return previousData.filter((item) => item.id !== doDeleteProduct.id);
    });
  };

  // 실제 수정되는 로직 구현.
  // ProductRow에서 입력창을 통해 각각의 정보를 입력받고 해당 id를 갖는 제품찾아서 수정.
  const editProduct = (doEditProduct, category, price, isStocked, name) => {
    //map() 이용해서 수정할 제품만 전체 객체 배열에서 찾아서 수정.
    setProduct((prevProducts) =>
      prevProducts.map((product) =>
        product.id === doEditProduct.id
          ? { ...product, category, price, stocked: isStocked, name }
          : product
      )
    );
  };

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />

      {/* deleteProduct, editProduct를 prop으로 넘기기 */}
      <ProductTable
        product={product}
        filterText={filterText}
        inStockOnly={inStockOnly}
        onClickDelete={deleteProduct}
        onClickEdit={editProduct}
      />
      <InputBar addProduct={addProduct} />
    </div>
  );
};

export default FilterableProductTable;
