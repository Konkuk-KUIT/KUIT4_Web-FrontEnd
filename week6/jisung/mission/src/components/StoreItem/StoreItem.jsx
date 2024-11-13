import React from "react";
import {
  StoreButton,
  StoreItemContainer,
  StoreImageRectangle,
  StoreInfoContainer,
  StoreHeader,
  StoreDetail,
} from "./StoreItem.styles";
import stores from "../../models/stores";
import { useNavigate } from "react-router-dom";

const StoreItem = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용
  const handleStoreClick = (storeId) => {
    navigate(`/store/${storeId}`);
  };

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      {stores.map((store, index) => (
        <StoreButton key={store.id} onClick={() => handleStoreClick(store.id)}>
          <StoreItemContainer>
            <StoreImageRectangle />
            <StoreInfoContainer>
              <StoreHeader style={{ marginBottom: "2px" }}>
                {index + 1}위
              </StoreHeader>
              <StoreHeader style={{ marginBottom: "5px" }}>
                {store.name}
              </StoreHeader>
              <StoreDetail style={{ marginBottom: "4px" }}>
                ⭐️ {store.rate} ({store.reviewCnt})
              </StoreDetail>
              <StoreDetail>
                {store.minDeliveryTime}분~{store.maxDeliveryTime}분 배달비{" "}
                {store.deliveryFee}원
              </StoreDetail>
            </StoreInfoContainer>
          </StoreItemContainer>
        </StoreButton>
      ))}
    </div>
  );
};

export default StoreItem;
