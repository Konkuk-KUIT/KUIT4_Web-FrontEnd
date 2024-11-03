import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { useState } from "react";
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
  const [inStockOnly, setIsnStockOnly] = useState(false);
  const addProduct = (newProduct) => {
    setProduct((prev) => [...prev, newProduct]);
  };

  const deleteProduct = (e) => {
    const newProduct = product.filter((product) => product.id != e.id);
    setProduct(newProduct);
  };

  const editProduct = (e) => {
    const updatedProducts = product.map((p) => (p.id === e.id ? e : p));
    setProduct(updatedProducts);
  };

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFliterTextChange={setFilterText}
        onInStockOnly={setIsnStockOnly}
      />
      <ProductTable
        product={product}
        filterText={filterText}
        inStockOnly={inStockOnly}
        deleteProduct={deleteProduct}
        editProduct={editProduct}
      />
      <InputBar addProduct={addProduct} />
    </div>
  );
};

export default FilterableProductTable;
