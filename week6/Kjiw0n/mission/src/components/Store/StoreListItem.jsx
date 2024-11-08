import styled from "styled-components";
import { ItemTitle, ItemContent } from "../../styles/FontStyle";

const StoreListItem = ({ store }) => {
  return (
    <StoreListItemContainer>
      <ItemImg src="http://placehold.co/54" />

      <ItemInfoContainer>
        <ItemTitle>
          {store.id}위 <br />
          {store.name}
        </ItemTitle>

        <ItemReviewContainer>
          <img
            src="Star1.svg"
            alt="star icon"
            style={{ width: "13.6px", height: "13.6px" }}
          />
          <ItemContent>
            {store.rate} ({store.reviewCnt.toLocaleString()})
          </ItemContent>
        </ItemReviewContainer>
        <ItemContent>
          {store.minDeliveryTime}분~{store.maxDeliveryTime}분 ∙ 배달비{" "}
          {store.deliveryFee.toLocaleString()}
        </ItemContent>
      </ItemInfoContainer>
    </StoreListItemContainer>
  );
};

export default StoreListItem;

const StoreListItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 17px;
  padding: 16px 24px;
`;

const ItemImg = styled.img``;

const ItemInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const ItemReviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 2px 0;
`;
