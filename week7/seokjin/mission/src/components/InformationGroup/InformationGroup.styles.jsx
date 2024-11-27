import styled from 'styled-components';

const  StyledDiv = styled.div`
    width: 390px;
    height: 28px;
    padding-top: 9px;
    padding-bottom: 1px;
    padding-left: 24px;
    box-sizing: border-box;
    p { 
        margin: 0px;
        color: #4E5968;
        font-family: Pretendard;
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
`;

const Review = styled.div`
    width: 390px;
    height: 38px;
    display: flex;
    align-items: center;

    img {
        margin-left: 23px;
        fill: #FFD158;
        width: 18px;
        height: 19px;
        flex-shrink: 0;
        margin-right: 5px;
    }

    .rate { 
        margin: 0;
        margin-right: 9px;
        color: #4E5968;
        font-family: Pretendard;
        font-size: 17px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
    
    .reviewCnt {
        margin: 0;
        color: #4E5968;
        font-family: Pretendard;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
`;

const StyledDivLast = styled.div`
    width: 390px;
    height: 28px;
    padding-top: 9px;
    padding-bottom: 1px;
    padding-left: 24px;
    p { 
        margin: 0px;
        color: #4E5968;
        font-family: Pretendard;
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
    border-bottom: 1px solid #E5E8EB;
`;


export { StyledDiv, Review, StyledDivLast };