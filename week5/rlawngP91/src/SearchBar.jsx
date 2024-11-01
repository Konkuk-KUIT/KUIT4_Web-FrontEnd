import React from 'react';

const SearchBar = ({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) => {

    const handleTextChange = (e) => {
        onFilterTextChange(e.target.value);
    };
    const handleCheckboxChange = (e) => {
        onInStockOnlyChange(e.target.checked);
    };

    return (
        <form>
            <input
                type="text"
                value={filterText}
                placeholder="Search..."
                onChange={handleTextChange}
            />
            <label>
                <input
                    value={inStockOnly}
                    type="checkbox"
                    onChange={handleCheckboxChange}
                />
                Only show products in stock
            </label>
        </form>
    );
};

export default SearchBar;