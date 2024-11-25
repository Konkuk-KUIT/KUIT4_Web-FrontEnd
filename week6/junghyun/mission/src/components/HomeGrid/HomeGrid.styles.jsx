import styled from 'styled-components';

const GridWrapper = styled.div`
  position: relative;
  top: 88px;
  display: flex;
  height: 326px;
  margin: 70px 24px 0px 24px;
  align-items: center;
  justify-content: space-between;
`;

const Grid = styled.div`
  diplay: flex;

`;

const Category = styled.div`
  width: 108px;
  height: 62px;
  padding-top: 12px;
  border-radius: 8px;
  background: #FAFAFB;
  text-align: center;
  margin-bottom: 10px;

> img {
    width: 28px;
    height: 28px;
  }

> div {
    margin-top: 4px;
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 600;
    line-height: 16.71px;
    text-align: center;
    text-color: #333D4B;
  }
`;
export { GridWrapper, Grid, Category };