import React, { useState } from 'react'

const ProductRow = ({product, deleteProduct, editProduct}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedProduct, setEditedProduct] = useState({
    name: product.name,
    price: product.price,
    stocked: product.stocked,
    id:  product.id,
    category: product.category
  })

  const handleEdit = () => {
    if (isEditing) {
      editProduct(editedProduct)
    }
    setIsEditing(!isEditing)
  }

  const handleChange = (e) => {
    const {name, value, type, checked} = e.target
    // == e.target.name, e.target.value, ...
    // e.target.___ 는 HTML태그의 attribute값을 가져오는 것임
    // +) name속성은 보통 필드의 식별자로 사용되며, 서버에 데이터 보낼 때도 사용됨

    setEditedProduct({
      ...editedProduct, // 객체의 프로퍼티를 펼치고
      [name]: type === "checkbox" ? checked : value
      // 예를 들어 e.target.name이 price라고 하자
      // name이 price인 input태그의 type은 checkbox가 아니니까(number니까),
      // 이 경우 [name]: type === "checkbox" ? checked : value의 최종 결과는
      // price: e.target.value 라는 key-value가 생성됨
      // ([name]이 key가 되고 type === "checkbox" ? checked : value가 value가 됨)
      // 그럼 ...editedProduct의 프로퍼티에서 key가 price인 프로퍼티를 찾아서
      // 해당 key의 value를 e.target.value(수정된 가격)으로 수정함
    })
  }

  return (
    <tr>
        <td style={{color:product.stocked ? "black" : "red"}}> 
          {isEditing ? <input type="text" name="name" value={editedProduct.name} onChange={handleChange}/> : product.name}
        </td>
        <td>
          {isEditing ? <input type="number" name="price" value={editedProduct.price} onChange={handleChange}/> : product.price}
        </td>
        <td>
          {isEditing ? <input type="checkbox" name="stocked" checked={editedProduct.stocked} onChange={handleChange}/> : null}
        </td>
        <td>
          <button type="button" onClick={() => deleteProduct(product.id)}>삭제</button>
          {/* 이벤트 위임 가능? <- 컴포넌트끼리는 props로 전달하면 되고, 이벤트 위임은 HTML태그들끼리 버블링돼서 구현되는거*/}
          <button type="button" onClick={handleEdit}>
            {isEditing ? "저장" : "수정"}
          </button>
        </td>
    </tr>
  )
}

export default ProductRow
