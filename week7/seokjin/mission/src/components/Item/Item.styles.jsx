import styled from "styled-components";

const StyledDiv = styled.div`
    width: 390px;
    height: 110px;
    display: flex;

    .img-container {
        margin-top: 19px;
        margin-left: 24px;
        img {
            width: 54px;
            height: 54px;
            flex-shrink: 0;
            border-radius: 8px;
        }
    }

    p {
        margin: 0;
    }

    .menuName {
        color: #333D4B;
        font-family: Pretendard;
        font-size: 17px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    .detail-container {
        display: flex;
        gap: 15px;
    }

    .detail {
        margin: 0;
        margin-top: 5px;
        color: #6B7684;
        font-family: Pretendard;
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

    .menuCnt {
        margin: 0;
        min-width: 50px;
        color: #6B7684;
        font-family: Pretendard;
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

    .fee {
        margin: 0;
        margin-top: 5px;
        color: #6B7684;
        font-family: Pretendard;
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
`;

export default StyledDiv;