import styled from 'styled-components';

export const NoStoreWrapper = styled.div`
  position: relative;
  top: 100px;
  text-align: center;
  width: 390px;
`;

export const StoreInfoWrapper = styled.div`

`;

export const InfoWrapper = styled.div`

    position: relative;
    top: 41px;
    width: 390px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #E5E8EB;
    padding: 0 0 14px 24px;
      > h1 {
        margin-top: 26px;
        margin-bottom: 0px;
        font-family: Pretendard;
        font-size: 26px;
        font-weight: 700;
        line-height: 31px;
      }
      > .storeReputation {
      display: flex;
      margin-top: 7px;
      margin-bottom: 12px;
      gap: 7px;
      }
    > .storeReputation .storeRate {
        font-family: Pretendard;
        font-size: 17px;
        font-weight: 600;
        line-height: 20.29px;
        color: #4E5968;
      }
    > .storeReputation .storeReviewCnt {
        font-family: Pretendard;
        font-size: 16px;
        font-weight: 500;
        line-height: 19.09px;
        color: #4E5968;
      }
    > .desc {
        font-family: Pretendard;
        font-size: 15px;
        font-weight: 500;
        line-height: 17.9px;
        color: #4E5968;
      }
    > .desc .descLine {
        margin-top: 9px;
      }
    > .desc .descTitle {
        margin-right: 12px;
        margin-top: px;
      }
`;

export const MenuWrapper = styled.div`
  height: 749px;
  position: fixed;
  top: 235px;
  left: 24px;
  > .category {
      width: 45px;
      height: 20px;
      margin-left: 24px;
      margin-top: 26px;
      
      font-family: Pretendard;
      font-size: 17px;
      font-weight: 600;
      line-height: 20.29px;
      color: #6B7684;
    }
`;
