import React, { useState } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import InputBar from './InputBar'

const FilterableProductTable = ({ product, setProduct }) => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  
  const addProduct = (newProduct) => {
    setProduct((previousData) => [...previousData, newProduct]);
  }
  const deleteProduct = (productId) => {
    const index = product.findIndex(product => product.id === productId)
    // setProduct(product.splice(index, 1))
    // splice()는 원본 배열을 수정한 후 삭제된 요소를 반환하므로
    // 위 코드는 목적과 반대로 삭제한 요소 하나만 남기게 됨 

    product.splice(index, 1); // 배열에서 원하는 요소 하나 삭제하고
    setProduct([...product]); // 변경된 배열을 상태에 반영
  }

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
            deleteProduct={deleteProduct}
            filterText={filterText} 
            inStockOnly={inStockOnly}
        />
        <InputBar 
          addProduct={addProduct}
        />
    </div>
  )
}

export default FilterableProductTable
