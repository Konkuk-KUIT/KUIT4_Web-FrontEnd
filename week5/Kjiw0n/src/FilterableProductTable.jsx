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

    // deleteProduct
    const deleteProduct = () => {};

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
            />
            <InputBar addProduct={addProduct} />
        </div>
    );
};

export default FilterableProductTable;
