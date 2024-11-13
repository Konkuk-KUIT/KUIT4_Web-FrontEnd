import styled from "styled-components"

export const BottomOrderBar = styled.div`
    border-radius: 16px 16px 0px 0px;
    background: #FFF;
    box-shadow: 0px -8px 16px 0px rgba(0, 0, 0, 0.10);
    width:390px;
    height: 77px;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    position: fixed;
    top: 686px;
    padding-right: 24px;
    padding-left: 24px;
    padding-top: 19px;
    padding-bottom: 20px;
    box-sizing: border-box;
    
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
    gap: 5px;
`