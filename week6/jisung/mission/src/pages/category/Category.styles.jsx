import styled from 'styled-components'

export const TextContainer = styled.div`
    justify-content: start;
    padding-top: 25px;
    margin-left: 24px;
    margin-bottom: 66px;
`

export const StyledText1 = styled.div`
    font-family: 'Pretendard';
    font-size: 26px;
    font-weight: bold;
    color: #191F28;
    margin-bottom: 13px;
`
export const StyledText2 = styled.div`
    font-family: 'Pretendard';
    font-size: 17px;
    font-weight: normal;
    color: #333D4B;
`

export const CategoryListContainer = styled.div`
    width: 342px;
    height: 326px;
    display: grid; // 그리드
    grid-template-columns: repeat(3, auto); // 가로 3개
    grid-template-rows: repeat(4, auto); // 세로 4개
    gap: 10px 9px; // 세로 10px, 가로 9px
    margin-left: 24px;
    margin-bottom: 160px;
`

export const CategoryItemContainer = styled.div`
    width: 108px;
    height: 74px;
    display: flex;
    flex-direction: column; // 수직 정렬
    align-items: center; // 수직 중앙 정렬
    justify-content: center; // 수평 중앙 정렬
    background-color: #FAFAFB;
    border-radius: 8px;
    &:hover {
    cursor: pointer;
  }
`

export const CategoryTextStyle = styled.div`
    font-family: 'Pretendard';
    font-size: 14px;
    font-weight: semibold;
    color: #333D4B;
`