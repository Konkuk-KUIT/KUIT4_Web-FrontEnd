import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import InputBar from "./InputBar";

const FilterableProductTable = ({ product, setProduct }) => {
    const [filterText, setFilterText] = useState("");
    const [inStockOnly, setInStockOnly] = useState(false);

    const addProduct = (newProduct) => {
        setProduct((previousData) => [...previousData, newProduct]);
    };

    const deleteProduct = (id) => {
        setProduct((previousData) =>
            previousData.filter((item) => item.id !== id)
        );
    };

    // editProduct
    const editProduct = () => {};

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
