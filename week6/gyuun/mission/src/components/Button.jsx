import styled from "styled-components";
import { Link } from "react-router-dom";

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
  font-size: ${(props) => sizeStyles[props.size]?.fontSize};
  /* width: 84px; */
height: 38px;
top: 19px;
left: 282px;
padding: 10px 16px 10px 16px;
gap: 0px;
border-radius: 8px;
opacity: 0px;
position: absolute;
`;

const Button = ({ children, type = "button", size = "sm", disabled }) => {
  return (
    <Link to={"/cart"}>
    <StyledButton type={type} size={size} disabled={disabled}>
      {children}
    </StyledButton>
    </Link>
  );
};

export default Button;
