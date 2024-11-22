import styled from 'styled-components';

const NoStoreWrapper = styled.div`
  position: relative;
  top: 100px;
  text-align: center;
`;

const StoreInfoWrapper = styled.div``;

const InfoWrapper = styled.div`
  position: relative;
  top: 80px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #E5E8EB;
  padding-left: 24px;
  padding-bottom: 14px;

> h1 {
    margin-top: 26px;
    margin-bottom: 0px;
    font-family: Pretendard;
    font-size: 26px;
    font-weight: 700;
    line-height: 31.03px;
  }

> .storeReputation {
  display: flex;
  margin-top: 7px;
  margin-bottom: 12px;
  gap: 7px;
}

> .storeReputation .storeRate {
    font-family: Pretendard;
    font-size: 17px;
    font-weight: 600;
    line-height: 20.29px;
    color: #4E5968;
  }

> .storeReputation .storeReviewCnt {
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 500;
    line-height: 19.09px;
    color: #4E5968;
  }

> .desc {
    font-family: Pretendard;
    font-size: 15px;
    font-weight: 500;
    line-height: 17.9px;
    color: #4E5968;
  }

> .desc .descLine {
    margin-top: 9px;
  }

> .desc .descTitle {
    margin-right: 12px;
    margin-top: px;
  }
`;

const MenuWrapper = styled.div`
  position: relative;
  top: 110px;
  padding-left: 24px;
  margin-bottom: 400px;

> .category {
    font-family: Pretendard;
    font-size: 17px;
    font-weight: 600;
    line-height: 20.29px;
    color: #6B7684;
  }
`;

const ModalBackground = styled.div`
  z-index: 1;
  position: fixed;
  display : flex;
  justify-content : center;
  align-items : center;
  background-color: #00000080;
  top : 0;
  left : 0;
  right : 0;
  bottom : 0;
`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  width: 321px;
  heigth: 202px;
  background-color: #FFFFFF;

> .modalTitle {
    font-family: Pretendard;
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    margin-top: 22px;
    margin-left: 23px;
    margin-right: 52px;
  }

> .modalDesc {
    font-family: Pretendard;
    font-size: 15px;
    font-weight: 600;
    line-height: 17.9px;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #6B7684;
    margin-top: 12px;
    margin-left: 23px;
  }
`;

const ModalBtnWrapper = styled.div`
  display: flex;
  margin-top: 22px;
  margin-left: 17px;
  margin-right: 17px;
  margin-bottom: 17px;
  jsutify-content: space-between;
`;

const BtnCancel = styled.div`
  width: 139px;
  height: 55px;
  padding-top: 17px;
  padding-bottom: 18px;
  border-radius: 16px;
  box-sizing: border-box;
  background-color: #F2F4F6;
  cursor: pointer;
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 600;
  line-height: 20.29px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #505967;
  margin-right: 9px;
`;

const BtnReset = styled.div`
  width: 139px;
  height: 55px;
  padding-top: 17px;
  padding-bottom: 18px;
  border-radius: 16px;
  box-sizing: border-box;
  background-color: #3182F6;
  cursor: pointer;
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 600;
  line-height: 20.29px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #FFFFFF;
`;
export {
  NoStoreWrapper, StoreInfoWrapper, InfoWrapper, MenuWrapper, 
  ModalBackground, ModalWrapper, ModalBtnWrapper, BtnCancel, BtnReset
};