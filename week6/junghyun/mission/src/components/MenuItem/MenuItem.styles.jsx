import styled from 'styled-components';

const MenuItemWrapper = styled.div`
  display: flex;
  height: 110px;
  box-sizing: border-box;
  margin-top: 16px;
  margin-bottom: 16px;
  jsutify-content: space-between;

> img {
    width: 54px;
    height: 54px;
    border-radius: 27px;
    color: #ECECEC;
  }
`;

const ItemDescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  width: 100%;

> span {
    font-family: Pretendard;
    font-size: 13px;
    font-weight: 500;
    line-height: 15.51px;
    color: #6B7684;
    margin-top: 5px;
  }

> p {
    font-family: Pretendard;
    font-size: 13px;
    font-weight: 500;
    line-height: 15.51px;
    color: #6B7684;
    margin-top: 5px;
    margin-right: 19px;
  }
`;

const NameWrapper = styled.div`
  display: flex;
  height: 20px;
  box-sizing: border-box;

> h3 {
    font-family: Pretendard;
    font-size: 17px;
    font-weight: 600;
    line-height: 20.29px;
    color: #333D4B;
    margin-top: 0px;
    margin-bottom: 0px;
  }

> h4 {
    font-family: Pretendard;
    font-size: 17px;
    font-weight: 600;
    line-height: 20.29px;
    color: #3182F6;
    margin-top: 0px;
    margin-left: 6px;
  }
`;

const ButtonWrapper = styled.div`
    width: 100px;
    padding: 8px 14px 8px 15px;
    font-size: 13px;
    margin-top: 10px;
`;
export {MenuItemWrapper, ItemDescWrapper, NameWrapper, ButtonWrapper};