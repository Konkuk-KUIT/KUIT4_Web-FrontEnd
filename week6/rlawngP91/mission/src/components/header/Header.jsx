import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 48px;
    background-color: white;
    border-bottom: 1px solid #E5E5E5;
    display: flex;
    align-items: center;
    padding: 0 16px;
`;

const BackButton = styled.button`
    font-size: 20px;
    border: none;
    background: none;
    cursor: pointer;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #333;

    &:hover {
        opacity: 0.8;
    }
`;

const Header = () => {
    const navigate = useNavigate();

    return (
        <HeaderContainer>
            <BackButton onClick={() => navigate(-1)}>
                ←
            </BackButton>
        </HeaderContainer>
    );
};

export default Header;