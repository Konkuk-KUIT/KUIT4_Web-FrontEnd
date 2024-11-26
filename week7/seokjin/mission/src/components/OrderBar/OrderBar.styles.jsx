import styled from 'styled-components';

export const OrderbarStyles = styled.div`
    position: absolute;
    top: 733px;
    width: 390px;
    height: 77px;
    border-radius: 16px 16px 0px 0px;
    background: #FFF;
    box-shadow: 0px -8px 16px 0px rgba(0, 0, 0, 0.10);


    .order-content {
        width: 390px;
        height: 77px;
        display: flex;
        align-items: center; /* 중앙 정렬 */
        justify-content: space-between;
    }

    .text-group {
        display: flex;
        flex-direction: column;
        margin-left: 24px;
        gap: 5px;
    }

    .total-price {
        margin: 0;
        color: #6B7684;
        font-family: Pretendard;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .price-num {
        margin: 0;
        color: #4E5968;
        font-family: Pretendard;
        font-size: 17px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    .order-content > button {
        margin-right: 24px;
    }
`;

