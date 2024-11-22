import Styled from 'styled-components';

const DetailWrapper = Styled.div`
  position: relative;
  top: 26px;
  width: 390px;
  height: 90px;
  display: flex;
  box-sizing: border-box;
  margin-top: 17px;
  margin-left: 24px;
`;

const DetailImg = Styled.img`
  width: 54px;
  height: 54px;
  border-radius: 8px;
  background-color: #ECECEC;
`;

const Details = Styled.div`
  margin-left: 17px;

> .TopThree, .name {
    font-family: Pretendard;
    font-size: 17px;
    font-weight: 600;
    line-height: 20.29px;
    text-color: #333D4B;
  }
> .name {
    margin-top: 2px;
  }

> .score, .delivery {
    font-family: Pretendard;
    font-size: 13px;
    font-weight: 500;
    line-height: 15.51px;
    text-color: #6B7684;
    margin-top: 4px;
  }
`;
export {DetailWrapper, DetailImg, Details};