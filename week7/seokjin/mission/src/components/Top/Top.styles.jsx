import styled from 'styled-components';

// Wrapper 컴포넌트 추가하여 세로 배치 설정
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* 수평 중앙 정렬 */
  width: 390px;
`;

const TopContainer = styled.div`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
`;

const Under = styled.div`
  width: 390px;
  height: 41px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    margin-left: 10px;
  }

  p {
    margin-right: 15px;
    color: #333D4B;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

const Time = styled.p`
  margin-top: 14px;
  margin-bottom: 12px;
  display: flex;
  width: 54px;
  height: 21px;
  padding-top: 1px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 24px;
  font-size: 16px;
  font-weight: bold;
`;

const Notch = styled.div`
  width: 156px;
  height: 33px;
  margin: 0px 13px 0px 36px;
  flex-shrink: 0;
`;

const IconsContainer = styled.div`
  display: flex;
  gap: 5px;
  margin-left: 10px;
`;

export { Wrapper, TopContainer, Time, Notch, IconsContainer, Under };
