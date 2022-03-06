// esto le da estilo y diseño a la barra lateral//
import styled from 'styled-components';
import { NavLink as LinkS } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const SideBarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #243538;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;
// la x de la barra lateral//
export const CloseIcon = styled(FaTimes)`
    color: #fefefe;
`;
export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SideBarWrapper = styled.div`
    color: #fefefe;
`;

export const SideBarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 90px);
    text-align: center;
    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`;

export const SideBarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fefefe;
    cursor: pointer;
    &:hover {
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }
`;