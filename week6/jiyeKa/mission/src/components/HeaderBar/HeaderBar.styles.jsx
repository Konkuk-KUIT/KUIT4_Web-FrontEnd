import styled from 'styled-components';

const HeaderBarWrapper = styled.div`
    height: 41px;
    width: 390px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position:absolute;
    box-sizing: border-box;
    top:0;
    background-color: #FFFFFF;
    > img {
        margin-top: 7px;
        margin-left: 10px;
        margin-bottom: 10px;
        width: 24px;
        height: 24px;
    }
    > .cancel {
        margin-top: 9px;
        margin-right: 15px;
        margin-bottom: 10px;
        font-family: Pretendard;
        font-size: 16px;
        font-weight: 600;
        line-height: normal;
        text-align: left;
    }
`;
export default HeaderBarWrapper;