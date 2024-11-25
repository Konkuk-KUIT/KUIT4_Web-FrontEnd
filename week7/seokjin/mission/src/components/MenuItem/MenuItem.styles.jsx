//todo 스타일 컴포넌트를선언해서, Menuitem.jsx 에서 import하여 사용하기
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 390px;
    height: 116px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    box-sizing: border-box;

    img {
        width: 54px;
        height: 54px;
        border-radius: 50%;
    }

    .img-container {
        display: flex;
    }

    .text-container {
        width: 201px;
        gap: 5px;
    }

    .menu-name {
        display: flex;
        margin: 16px 0 0 0;
        margin-bottom : 5px;
        color: #333D4B;
        font-family: Pretendard;
        font-size: 17px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    span {
        color: #6B7684;
        font-family: Pretendard;
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

    .menu-ingredient {
        margin: 5px 0 0 0;
        color: #6B7684;
        font-family: Pretendard;
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
    
`;

export { StyledDiv };