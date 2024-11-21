import React, { useState, useEffect } from "react";
import FilterableProductTable from "./FilterableProductTable";

const App = () => {
    const loadProducts = () => {
        const storedProducts = localStorage.getItem("productData");
        return storedProducts
            ? JSON.parse(storedProducts)
            : [
                  {
                      id: "1",
                      category: "Fruits",
                      price: 1,
                      stocked: true,
                      name: "Apple",
                  },
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
                  {
                      id: "6",
                      category: "Vegetables",
                      price: 1,
                      stocked: true,
                      name: "Peas",
                  },
              ];
    };

    const [product, setProduct] = useState(loadProducts);

    // product 상태가 변경될 때마다 로컬 스토리지에 저장
    useEffect(() => {
        localStorage.setItem("productData", JSON.stringify(product));
    }, [product]);

    return <FilterableProductTable product={product} setProduct={setProduct} />;
};
export default App;
