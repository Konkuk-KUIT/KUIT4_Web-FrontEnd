import styled from "styled-components";

const StoreWrapper = styled.div`
  width: 390px;
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  padding: 14px 24px;
  box-sizing: border-box;
`;

const Title = styled.h1`
  width: 390px;
  height: 59px;
  font-size: 26px;
  font-weight: 700;
  color: #191f28;
`;

const SubTitle = styled.h3`
  width: 45px;
  height: 20px;
  font-size: 17px;
  font-weight: 600;
  background: #6b7684;
  margin: 24px 26px 11px 0;
`;

const Desc = styled.div`
  display: flex;
  width: 390px;
  height: 38px;
  > img {
    margin-right: 5px;
  }
  > .store-rate {
    width: 26px;
    height: 20px;
    font-size: 17px;
    font-weight: 600;
    color: #4e5968;
    margin-right: 9px;
  }
  > .store-review {
    width: 69px;
    height: 19px;
    font-size: 16px;
    font-weight: 500;
    color: #4e5968;
  }
`;

const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubDesc = styled.div`
  width: 390px;
  height: 28px;
  display: flex;
  gap: 12px;
  font-size: 15px;
  font-weight: 500;
  color: #4e5968;
`;

export { StoreWrapper, Title, SubTitle, Desc, DescWrapper, SubDesc };
