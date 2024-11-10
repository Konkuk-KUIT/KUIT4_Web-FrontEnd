import styled from "styled-components"

export const BottomOrderBar = styled.div`
    border-radius: 16px 16px 0px 0px;
    background: #FFF;
    box-shadow: 0px -8px 16px 0px rgba(0, 0, 0, 0.10);
    width:100%;
    box-sizing: border-box;
    flex-shrink: 0;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direection: row;
    justify-content:space-between;
    padding: 19px 24px 34px 24px;
    
`

export const TotalPriceInKor = styled.div`
    font: normal 400 15px normal Pretendard;
    color: #687684;
`
export const TotalPrice = styled.div`
    font: normal 600 17px normal Pretendard;
    color: #4E5968;
`
export const ToTalPriceContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`