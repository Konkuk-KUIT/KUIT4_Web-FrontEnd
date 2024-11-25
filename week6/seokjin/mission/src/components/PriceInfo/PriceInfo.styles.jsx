import styled from "styled-components";

const StyledDiv = styled.div`
    .whilte-space {
        width: 390px;
        height: 16px;
        background-color: white;
    }

    .board {
        width: 390px;
        height: 38px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .left-text {
        margin-left: 24px;
        color: #8B95A1;
        font-family: Pretendard;
        font-size: 17px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

    .right-text {
        margin-right: 23px;
        color: #505967;
        text-align: right;
        font-family: Pretendard;
        font-size: 17px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

    .total-container {
        width: 390px;
        height: 54px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

     
`;

export default StyledDiv;