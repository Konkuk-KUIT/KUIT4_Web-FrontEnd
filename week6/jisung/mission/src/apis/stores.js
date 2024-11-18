export const getStores = async () => { 
    // async: 함수가 항상 Promise를 반환하도록 함
    // 비동기 동작을 포함하는 함수에 사용
    const response = await fetch("http://localhost:8080/stores");
    // await: Promise가 해결될 때까지 기다림
    // async 함수 내부에서만 사용 가능
    // 이 await는 fetch()가 끝날 때까지 기다림
    const data = await response.json();
    // response.json()이 끝날 때까지 기다림 
    return data;
}

export const getStore = async (storeId) => {
    const response = await fetch(`http://localhost:8080/stores/${storeId}`);
    const data = await response.json();
    return data;
}