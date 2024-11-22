import styled from "styled-components";
import { ItemTitle, ItemContent } from "../../styles/FontStyle";
import { useNavigate } from "react-router-dom";
import StarIcon from "/src/assets/Star1.svg";

const StoreListItem = ({ store }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/store/${store.id}`);
  };

  return (
    <StoreListItemContainer onClick={handleClick}>
      <ItemImg />

      <ItemInfoContainer>
        <ItemTitle>
          {store.id}위 <br />
          {store.name}
        </ItemTitle>

        <ItemReviewContainer>
          <StarIcon style={{ width: "13.6px", height: "13.6px" }} />
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
  cursor: pointer;
`;

const ItemImg = styled.img`
  width: 54px;
  height: 54px;
  border-radius: 8px;
  background: #ececec;
`;

const ItemInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const ItemReviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3px;
  margin: 2px 0;
`;
