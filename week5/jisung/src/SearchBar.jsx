import React from 'react'

const SearchBar = ({
    filterText,
    inStockOnly,
    onFilterTextChange,
    onInStockOnlyChange
}) => {
    const handleTextChange = (e) => {
        onFilterTextChange(e.target.value);
        // e.target: 이벤트가 발생한 DOM요소(HTML요소), 여기서 e.target은 input태그를 가리킴
        // e.target.value: 이벤트가 발생한 요소(input)의 값을 가져옴
    }
    const handleCheckBoxChange = (e) => {
        onInStockOnlyChange(e.target.checked);
    }

    return (
        <form>
            <input type="text" value={filterText} placeholder="Search..." onChange={handleTextChange} />
            <label>
                <input value={inStockOnly} type="checkbox" onChange={handleCheckBoxChange} />
                Only show products in stock
            </label>
        </form>
    )
}

export default SearchBar
