import React from "react"
import ProductCategoryRow from "./ProductCategoryRow"
import ProductRow from "./ProductRow"

const filterProducts= (products, filterText, inStockOnly) => {
    return products.filter((product) => {
        if(product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1){
            return false; //indexOf : 찾고자하는 값이 문자열에 존재하면 인덱스 반환, 없으면 - 1 반환, -1이면 false 를 return -> 해당 제품 제외
        }
        if(inStockOnly && !product.stocked) {
            return false;
        }
        return true;
    });
};

const groupedProductsByCategory = (products = []) => {
    return Object.values(
        products.reduce((acc, product) => {
        const { category } = product;
        if (!acc[category]) {
            acc[category] = { category, products: [] };
        }

        acc[category].products.push(product);
        return acc;
    }, {}),
    );
};

//ProductRow로 deleteProduct 를 props로 전달, product.id를 키값으로 사용
const ProductTable = ({ product,filterText,inStockOnly,deleteProduct}) => {
    const filteredProducts = filterProducts(product, filterText, inStockOnly);

    const groupedProducts = groupedProductsByCategory(filteredProducts);

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
                            <ProductRow key={product.id} product={product} deleteProduct={deleteProduct}/>
                        ))}
                    </React.Fragment>
                ))}
            </tbody>
        </table>
    );
};

export default ProductTable;