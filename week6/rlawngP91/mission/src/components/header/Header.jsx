import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="fixed top-0 left-0 right-0 h-12 bg-white border-b flex items-center px-4">
            <button className='back'>
                ←
            </button>
        </header>
    );
};
export default Header