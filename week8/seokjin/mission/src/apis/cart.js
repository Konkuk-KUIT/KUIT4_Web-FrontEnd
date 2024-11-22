export const getCart = async () => {
    const response = await fetch("http://localhost:8080/cart");
    const text = await response.text();
    console.log("Response Text:", text); // 서버에서 반환되는 데이터를 확인
    const data = JSON.parse(text); // JSON으로 파싱
    //const data = await response.json();
    return data;
};

export const updateCart = async (store, menus) => {
    return await fetch("http://localhost:8080/cart", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            store,
            menus,
        })
    });
};