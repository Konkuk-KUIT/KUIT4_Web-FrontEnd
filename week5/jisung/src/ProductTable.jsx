import React from 'react'
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

const filterProducts = (products, filterText, inStockOnly) => {
    // 항상 비구조화 할당을 사용해서 인자를 받는 건 아니고
    // 목적에 따라 비구조화 할당을 사용할 수도 있고 안해도 됨

    return products.filter((product) => {
        if(product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
                                      // indexOf: 찾는 텍스트가 없으면 -1 반환
            return false;
        }

        // inStockOnly를 체크하면 product.stocked가 false인 제품은 보여주지 말아야 함
        if(inStockOnly && !product.stocked) {
            return false
        }

        return true
    })
}

const groupedProductsByCategory = ({ products: products = []}) => {
                                    // 왼쪽이 products1, 오른쪽이 products2
                                    // 전달받은 객체에서 products1이라는 프로퍼티를 추출해 products2라는 새로운 변수에 할당
                                    // 만약 products가 전달되지 않으면 products2에 빈 배열을 할당
                                    // 둘이 변수명이 똑같으니까 { products = [] } 이렇게 생략 가능
    
    
    // products배열을 받아 각 상품을 카테고리별로 그룹화하고,
    // 그 카테고리별 상품 리스트를 반환하는 로직
    return Object.values( 
        // Object.values(객체): 전달된 객체의 key, value 중 value만 배열로 반환함
        // 여기서 반환할 객체는 reduce()함수에 의해 생성된 객체, 
        // 즉 products배열을 category별로 그룹화한 객체를 value만 추출해서 배열로 반환함
        products.reduce((acc, product) => {
            // reduce(): 배열을 하나의 값으로 축약함
            // 여기서는 카테고리별로 상품을 그룹화한 객체를 생성하는 역할
            // acc: 현재까지 처리한 product객체들을 카테고리별로 저장하는 객체
            // product: products배열의 각 요소
            
            const { category } = product;
            // 비구조화 할당을 사용해 product객체의 id, price, category.. 등의 속성 중 cateogory속성을 변수로 받아 사용할 수 있음

            if (!acc[category]) { 
                // acc(누적값) 객체에 category(fruits, vegetables 등)라는 key가 존재하지 않는다면
                acc[category] = { 
                    category: category, 
                    products: [] 
                };
                // 그 카테고리를 key로 가지고 { category: category, products: []}를 value로 가지는 새로운 객체를 생성함
                // acc객체 생성 예시
                /*
                {
                    Fruits: { 
                      category: "Fruits", 
                      products: [] 
                    },
                    Vegetables: { 
                      category: "Vegetables", 
                      products: [] 
                    }
                 }
                 */
            }

            acc[category].products.push(product);
            // 만약 이미 해당 카테고리가 acc에 존재한다면 acc[category]객체의
            // products에 접근해 현재 product객체를 추가함

            return acc;
            // 누적값(acc) 반환
        }, {})
        // reduce()함수의 두 번째 인수로 {} 전달 <- 초기값을 전달한 것
        // 즉 빈 객체를 초기 누적값으로 설정해 빈 객체에서 시작하게 됨
    );
    // Object.values()가 reduce()에 의해 반환된 객체에서 value만 추출해 최종적으로 하나의 배열을 반환함
    // 배열 반환 예시
    /* 
    [
        { category: "Fruits", products: [...] },
        { category: "Vegetables", products: [...] }
    ]
    */

    /* 
    return Object.values(
        products.reduce((acc, product) => {
            const { category } = product;
            if (!acc[category]) {
                acc[category] = {
                    category: category,
                    products: []
                }
            }
            acc[category].products.push(product);
            return acc;
        }, {})
    );
    */
};

const ProductTable = ({ product, deleteProduct, editProduct, filterText, inStockOnly }) => {
    const filteredProducts = filterProducts(product, filterText, inStockOnly);
    
    const groupedProducts = groupedProductsByCategory({ products: filteredProducts });
   
     return (
       <table>
           <thead>
               <tr>
                   <th>Name</th>
                   <th>Price</th>
               </tr>
           </thead>
           <tbody>
               {groupedProducts.map((productCategory) => (
                   <React.Fragment key={productCategory.category}>
                       <ProductCategoryRow category={productCategory.category} />
                       
                       {productCategory.products.map((product) => (
                           <ProductRow key={product.id} product={product} deleteProduct={deleteProduct} editProduct={editProduct}/>
                       ))}
                   </React.Fragment>
               ))}
           </tbody>
       </table>
     );
}
   

export default ProductTable
