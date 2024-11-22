export const getStores = async () => {
    const response = await fetch("http://localhost:8080/stores");
    const data = await response.json(); // json은 Promise를 반환하기 때문에 await 해줘야함.
    return data;
};

export const getStore = async (storeId) => {
    const response = await fetch(`http://localhost:8080/stores/${storeId}`);
    const data = await response.json(); // json은 Promise를 반환하기 때문에 await 해줘야함.
    return data;
};

