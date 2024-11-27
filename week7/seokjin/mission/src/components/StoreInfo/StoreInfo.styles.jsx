import styled from 'styled-components';

export const StoreInfoStyles = styled.div`
    
    width: 390px;
    height: 116px;
    display: flex;
    gap: 17px;
    .img-container {
        margin-left: 24px;
        margin-top: 16px;
    }

    img {
        border-radius: 8px;
    }

    p {
        margin: 0;
    }

    p:first-child {
        margin-top: 16px;
    }

    .store-name {
        color: #333D4B;
        font-family: Pretendard;
        font-size: 17px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    .rate-container {
        display: flex;
    }

    .rate {
        margin-top: 5px;
        color: #6B7684;
        font-family: Pretendard;
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

    .reviewCnt {
        color: #4E5968;
        font-family: Pretendard;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

    .delivery-info {
        margin-top: 5px;
        color: #6B7684;
        font-family: Pretendard;
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
`;