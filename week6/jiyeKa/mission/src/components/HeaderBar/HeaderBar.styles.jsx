import styled from 'styled-components';

const HeaderBarWrapper = styled.div`
    width: 100%;
    height: 41px;
    display: flex;
    justify-content:space-between;
    align-items:center;
    padding-left:10px;
    padding-right:15px;
    position:fixed;
    top:0;
    background-color: #FFFFFF;
    > img {
        margin-top: 10px;
        margin-left: 17px;
        margin-bottom: 13.52px;
        width: 9.95px;
        height: 17.48px;
    }
    > .cancel {
        margin-top: 9px;
        margin-right: 15px;
        margin-bottom: 13px;
        font-family: Pretendard;
        font-size: 16px;
        font-weight: 600;
        line-height: 19.09px;
        text-align: left;
    }
`;
export default HeaderBarWrapper;