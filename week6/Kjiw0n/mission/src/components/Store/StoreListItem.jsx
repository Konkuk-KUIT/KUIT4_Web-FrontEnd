import styled from "styled-components";
import { ItemTitle, ItemContent } from "../../styles/FontStyle";

const StoreListItem = () => {
  return (
    <StoreListItemContainer>
      <ItemImg src="http://placehold.co/54" />

      <ItemInfoContainer>
        <ItemTitle>
          1위 <br />
          샐로리 한남점
        </ItemTitle>

        <ItemReviewContainer>
          <img
            src="Star1.svg"
            alt="star icon"
            style={{ width: "13.6px", height: "13.6px" }}
          />
          <ItemContent>4.9 (3,919)</ItemContent>
        </ItemReviewContainer>
        <ItemContent>13분~30분 ∙ 배달비 2,000원</ItemContent>
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
