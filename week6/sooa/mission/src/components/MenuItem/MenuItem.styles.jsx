import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  > div {
    width: 54px;
    height: 54px;
    margin: 28px 24px 28px 16px;
    border-radius: 27px;
    background: #ececec;
  }
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 201px;
  align-items: center;
  gap: 5px;
  > h3 {
    width: 93px;
    height: 20px;
    font-size: 17px;
    font-weight: 600;
  }
  > span {
    width: 45px;
    height: 16px;
    font-size: 13px;
    font-weight: 500;
    color: #6b7684;
  }
  > p {
    width: inherit;
    height: 32px;
    font-size: 13px;
    font-weight: 500;
    color: #6b7684;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Wrapper, RightWrapper, ButtonWrapper };
