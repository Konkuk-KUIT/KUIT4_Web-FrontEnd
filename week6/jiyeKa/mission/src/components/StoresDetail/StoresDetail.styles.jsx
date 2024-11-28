import styled from 'styled-components';

const DetailWrapper = styled.div`
    width: 390px;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
`;

const IMG = styled.div`
    width: 54px;
    height: 54px;
    margin-left: 24px;
    margin-top:20px;
    margin-bottom: 46px;
    margin-right: 17px;
`
const Details = styled.div`
    > .TopThree, .inTopThreeName {
        font-family: Pretendard;
        font-size: 17px;
        font-weight: 600;
        line-height: 20.29px;
        text-color: #333D4B;
    }
    > .TopThree {
        margin-top: 16px;
        margin-bottom: 2px;
    }
    > .name {
        font-family: Pretendard;
        font-size: 17px;
        font-weight: 600;
        text-color: #333D4B;
        margin-top: 16px;
    }
    > .score, .delivery {
        font-family: Pretendard;
        font-size: 13px;
        font-weight: 500;
        text-color: #6B7684;
        margin-top: 4px;
    }
`;
export {DetailWrapper, IMG, Details};