export const getCart = async () => {
  const response = await fetch("http://localhost:8080/cart");
  const data = await response.json();
  return data;
};

export const updateCart = async (store, menus) => {
  return await fetch("http://localhost:8080/cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      store,
      menus,
    }),
  });
};

export const deleteCart = async () => {
  // 먼저 cart 데이터 가져오기
  const response = await fetch("http://localhost:8080/cart");
  const cart = await response.json();

  // cart가 비어 있다면 아무 작업도 하지 않음
  if (!cart || cart.length === 0) {
    console.log("Cart is already empty.");
    return;
  }

  // 각 리소스 삭제
  for (const item of cart) {
    const deleteResponse = await fetch(
      `http://localhost:8080/cart/${item.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!deleteResponse.ok) {
      throw new Error(`Failed to delete cart item with id: ${item.id}`);
    }
  }
};
