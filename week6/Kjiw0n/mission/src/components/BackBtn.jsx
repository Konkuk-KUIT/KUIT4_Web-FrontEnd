import styled from "styled-components";

const BackBtn = ({ onClick }) => {
  return <Back src="/arrowBack.svg" alt="back icon" onClick={onClick} />;
};
export default BackBtn;

const Back = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  padding: 10px;
`;
