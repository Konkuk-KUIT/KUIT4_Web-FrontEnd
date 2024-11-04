// eslint-disable-next-line no-unused-vars
import React from "react";
const SearchBar = ({
  filterText,
  inStockOnly,
  onFliterTextChange,
  onInStockOnly,
}) => {
  const handleTextChange = (e) => {
    onFliterTextChange(e.target.value);
  };
  const handleCheckboxChange = (e) => {
    onInStockOnly(e.target.checked);
  };
  return (
    <form>
      <input
        value={filterText}
        type="text"
        placeholder="Search.."
        onChange={handleTextChange}
      />
      <label>
        <input
          type="checkbox"
          value={inStockOnly}
          onChange={handleCheckboxChange}
        />
        Only show products in stock
      </label>
    </form>
  );
};
export default SearchBar;
