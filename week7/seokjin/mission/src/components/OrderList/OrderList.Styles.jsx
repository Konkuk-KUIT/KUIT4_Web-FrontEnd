import styled from "styled-components";

const StyledDiv = styled.div`
    
    .storeName {
        width: 390px;
        height: 58px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .left {
        margin: 0 0 0 20px;
        color: #6B7684;
        font-family: Pretendard;
        font-size: 17px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    .right {
        margin: 0;
        margin-left: 115px;
        color: #F04452;
        text-align: right;
        font-family: Pretendard;
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

    img {
        width: 13px;
        height: 13px;
        margin-right: 25px;
        flex-shrink: 0;
    }
`;

export default StyledDiv;