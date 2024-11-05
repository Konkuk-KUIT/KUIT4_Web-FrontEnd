import styled from 'styled-components'

export const OrderBarContainer = styled.div`
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    box-shadow: 0px -4px 12px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 16px 24px 30px 24px;
`

export const TotalPriceText = styled.div`
    font-family: 'Pretendard';
    font-size: 15px;
    font-weight: 400; //regular
    color: #333D4B;
    margin-bottom: 5px;
`

export const TotalPriceNum = styled.div`
    font-family: 'Pretendard';
    font-size: 17px;
    font-weight: 600; //semibold
    color: #4E5968;
`

