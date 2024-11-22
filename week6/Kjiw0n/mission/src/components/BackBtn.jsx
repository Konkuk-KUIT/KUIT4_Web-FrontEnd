import styled from "styled-components";
import ArrowBack from "/src/assets/arrowBack.svg";

const BackBtn = ({ onClick }) => {
  return <Back onClick={onClick} />;
};
export default BackBtn;

const Back = styled(ArrowBack)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  padding: 10px;
`;
