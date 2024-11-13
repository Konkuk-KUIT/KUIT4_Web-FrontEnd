import React from "react";
import {
  StoreItemContainer,
  StoreImageRectangle,
  StoreInfoContainer,
  StoreHeader,
  StoreDetail,
} from "./StoreItem.styles";
import stores from "../../models/stores"

const StoreItem = () => {
  return (
    <div style={{ paddingBottom: "88px" }}>
			{
				stores.map((store, index) => (
					<StoreItemContainer key={store.id}>
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
						{store.minDeliveryTime}분~{store.maxDeliveryTime}분 배달비 {store.deliveryFee}원
						</StoreDetail>
					</StoreInfoContainer>
				</StoreItemContainer>
				))
			}
    </div>
  );
};

export default StoreItem;
