import styled from "styled-components";

const sizeStyles = {
  sm: {
    padding: "8px 14px 8px 15px",
    fontSize: "13px",
  },
  lg: {
    padding: "10px 16px",
    fontSize: "15px",
  },
  xl: {
    padding: "18px 112px 19px 113px",
    fontSize: "16px",
  },
};

const StyledButton = styled.button`
  color: white;
  background-color: ${(props) => (props.disabled ? "#D0DFFB" : "#3182f6")};
  font-weight: 500;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  border-width: 0;
  border-radius: 8px;
  padding: ${(props) => sizeStyles[props.size]?.padding};
  // ?는 swift의 Optional chaining과 같음
  // sizeStyles.lg.padding 처럼 접근하면 되는데, 여기서는 size가 변수로 들어오기 떄문에
  // . 으로 접근이 안되고 대괄호를 사용해 접근함
  // 대괄호는 키가 동적으로 결정되는 경우에 사용!
  font-size: ${(props) => sizeStyles[props.size]?.fontSize};
`;

const Button = ({ children, type = "button", size = "sm", disabled, onClick}) => {
  return (
    <StyledButton type={type} size={size} disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
