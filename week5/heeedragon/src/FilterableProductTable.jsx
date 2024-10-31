import React, { useState } from "react"
import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable"
import InputBar from "./InputBar"

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
        { id: "6", category: "Vegetables", price: 1, stocked: true, name: "Peas" }
    ]);

    const [filterText, setFilterText] = useState(""); //상태 선언, 초기값 지정
    const [inStockOnly, setInStockOnly] = useState(false);
    
    const addProduct = (newProduct) => {
        setProduct((previousData) => [...previousData, newProduct]);
    }

    //deleteProduct
    const deleteProduct = (id) => {
        setProduct((previousData)=> previousData.filter((product) => product.id !== id));
        // product의 id 속성을 현재 받아온 id와 비교하여 같으면 product상태에서 해당 상품제거
    }

    //aditProduct

// ProductTable로 deleteProduct 함수 전달
    return (
        <div>
            <SearchBar
                filtertext={filterText}
                inStockOnly={false}
                onFilterTextChange={setFilterText}
                onInStockOnlyChange={setInStockOnly}
            />
            <ProductTable product={product} filterText={filterText} inStockOnly={inStockOnly} deleteProduct={deleteProduct}/>
            <InputBar addProduct={addProduct} />
        </div>
    );
};


export default FilterableProductTable;