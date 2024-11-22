import React from 'react';
import { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import InputBar from './InputBar';

const FilterableProductTable = ({ product, setProduct }) => {

    const [filterText, setFilterText] = useState("");
    const [inStockOnly, setInStockOnly] = useState(false);

    const addProduct = (newProduct) => {
        setProduct((previousData) => [...previousData, newProduct]);
    };
    // mission
    const deleteProduct = (productId) => {
        setProduct((previousData) =>
            previousData.filter(product => product.id !== productId)
        );
    };

    return (
        <div>
            <SearchBar filterText={filterText} inStockOnly={inStockOnly} onFilterTextChange={setFilterText} onInStockOnlyChange={setInStockOnly} />
            <ProductTable products={product} filterText={filterText} inStockOnly={inStockOnly} onDelete={deleteProduct} />
            <InputBar addProduct={addProduct} />
        </div>
    );
};

export default FilterableProductTable;