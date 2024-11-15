import React from 'react'

const SearchBar = ({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) => {
    const handleTextChange = (e) => {
        onFilterTextChange(e.target.value); //이벤트객체의 타겟 요소로부터 value를 가져옴...
    }
    
    const handleCheckboxChange = (e) => {
        onInStockOnlyChange(e.target.checked);
    }

    return (
        <form>
            <input type="text" value={filterText} placeholder="Search..." onChange={handleTextChange} />
            <lable>
                <input value={inStockOnly} type="checkbox" onChange={handleCheckboxChange} />
                Only show products in stock
            </lable>
        </form>
    );
};

export default SearchBar;