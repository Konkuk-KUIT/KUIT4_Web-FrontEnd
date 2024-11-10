import styled from 'styled-components';

export const CartItemWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 16px;
  display: flex;
> img {
    width: 54px;
    height: 54px;
    border-radius: 8px;
    color: #ECECEC;
    margin-left: 24px;
    margin-right: 16px;
  }
`;

export const ItemDescWrapper = styled.div`
  display: flex;
  flex-direction: column;
> .name {
    font-family: Pretendard;
    font-size: 17px;
    font-weight: 700;
    line-height: 20.29px;
    color: #333D4B;
  }
> .myOrder {
    font-family: Pretendard;
    font-size: 13px;
    font-weight: 500;
    line-height: 15.51px;
    color: #6B7684;
    margin-top: 5px;
  }
> .price {
    font-family: Pretendard;
    font-size: 13px;
    font-weight: 500;
    line-height: 15.51px;
    color: #6B7684;
    margin-top: 5px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: auto;
  margin-right: 20px;
> .count {
    font-family: Pretendard;
    font-size: 15px;
    font-weight: 500;
    line-height: 17.9px;
    color: #6B7684;
  }
> img {
    width: 16px;
    height: 16px;
    margin-left: 14px;
  }
`;
