import React, { useState } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import InputBar from './InputBar'

const FilterableProductTable = ({ product, setProduct }) => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  
  const addProduct = (newProduct) => {
    // setState함수는 이전 상태의 값을 인자로 받아 새로운 상태를 반환하는 함수를 사용할 수 있음
    // 아래의 previousData에는 기존 배열 데이터가 담겨있음
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

  const editProduct = (editedProduct) => {
    setProduct((previousProducts) => 
      previousProducts.map((product) => 
        product.id === editedProduct.id ? editedProduct : product
      )
    )
    // map(): 새로운 배열 생성, 시간복잡도 O(n)
    // findIndex()로 인덱스 접근 및 배열 수정: 새로운 배열 생성 X, O(n) + O(1)
    // => 두번째 방법이 메모리 측면에서 효율적
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
            editProduct={editProduct}
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
