import styled from "styled-components";

const StyledDiv = styled.div`
  width: 390px;
  height: 88px;
  position: fixed;
  top: 0;
  background-color: white;
`;

const PlaceHolder = styled.div`
  height: 88px;
`;
const HeaderBar = () => {
  return (
    <>
      <StyledDiv />
      <PlaceHolder />
    </>
  );
};

export default HeaderBar;
