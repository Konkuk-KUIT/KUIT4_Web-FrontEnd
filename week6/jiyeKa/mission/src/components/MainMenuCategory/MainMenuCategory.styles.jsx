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
  background: #FAFAFB;
  &:hover{
    cursor:pointer;
  }
`;

export const CategoryGrid = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-rows: repeat(4, 74px);
  grid-template-columns: repeat(3, 108px);
  gap: 10px 9px;
  margin-bottom: 169px;
  position: absolute; // 절대 위치로 설정
  top: 170px;
  left: 50px; // 수정 필요!!!! -> 질문
  box-sizing: border-box;
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
