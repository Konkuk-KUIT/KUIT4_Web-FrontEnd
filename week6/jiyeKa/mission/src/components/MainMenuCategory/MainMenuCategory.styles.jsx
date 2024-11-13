import styled from "styled-components";


export const Category = styled.div`
  display: flex;
  width: 108px;
  height: 74px;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  gap: 4px;
  background: #FAFAFB;
  &:hover{
    cursor:pointer;
  }
`;

export const CategoryGrid = styled.div`
  height: auto;
  display: grid;
  grid-template-rows: repeat(4, 74px);
  grid-template-columns: repeat(3, 108px);
  gap: 10px 9px;
  box-sizing: border-box;
  position: absolute;
  top: 70px;
  left: 24px;

`;

export const CategoryTextStyle = styled.div`
  color: #333D4B;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const CategoryComponent =styled.div`
  width: 390px;
  height: 552px;
  position: relative;
  top: 134px;
`