import styled from "styled-components";
import { Title } from "../../styles/FontStyle";

const StoreDetailInfo = () => {
  return (
    <>
      <StoreInfoWrapper>
        <Title>샐로디 한남점</Title>
        <StoreReview>
          <ReviewScore>4.9</ReviewScore>
          <ReviewCnt>리뷰3,919</ReviewCnt>
        </StoreReview>

        <StoreDescContainer>
          <StoreDescWrapper>
            <Desc>결제방법 </Desc>
            <Desc>토스결제만 현장결제 안됨 </Desc>
          </StoreDescWrapper>
          <StoreDescWrapper>
            <Desc>최소주문 </Desc>
            <Desc>13,000원 </Desc>
          </StoreDescWrapper>
          <StoreDescWrapper>
            <Desc>배달시간 </Desc>
            <Desc>약 15-25분 </Desc>
          </StoreDescWrapper>
        </StoreDescContainer>
      </StoreInfoWrapper>
    </>
  );
};

export default StoreDetailInfo;

const StoreInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StoreReview = styled.div`
  display: flex;
  flex-direction: row;
  gap: 9px;
`;

const ReviewScore = styled.p`
  color: #4e5968;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const ReviewCnt = styled.p`
  color: #4e5968;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const StoreDescContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StoreDescWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

// StoreDescription Text Style
const Desc = styled.p`
  color: #4e5968;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
