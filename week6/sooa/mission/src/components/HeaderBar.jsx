import styled from "styled-components";
import HeaderBarIMG from "../assets/header-bar.svg";
import ArrowBack from "../assets/arrow-back.svg";

const StyledDiv = styled.div`
  width: 390px;
  height: 47px;
  position: fixed;
  top: 0;
  background-color: white;
`;

const PlaceHolder = styled.div`
  width: 390px;
  height: 41px;
  top: 47px;
  position: fixed;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px 0 10px;
  box-sizing: border-box;
  > img {
    width: 24px;
    height: 24px;
  }
  > span {
    font-size: 16px;
    font-weight: 600;
    color: #333d4b;
  }
`;

const Holder = styled.div`
  width: 390px;
  height: 88px;
`;
const HeaderBar = ({ arrow, cancel }) => {
  console.log("arrow:", arrow); // true가 출력되어야 함
  console.log("cancel:", cancel); // false가 출력되어야 함

  return (
    <>
      <StyledDiv>
        <img src={HeaderBarIMG} />
      </StyledDiv>
      <PlaceHolder>
        {arrow && <img src={ArrowBack} />}
        {cancel && <span>주문취소</span>}
      </PlaceHolder>
      <Holder />
    </>
  );
};

export default HeaderBar;
