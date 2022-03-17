// similitud con el navbar ya que es la parte lateral de la pagina cuando se achica//
import React from 'react';
import {
    SideBarContainer,
    Icon,
    CloseIcon,
    SideBarWrapper,
    SideBarMenu,
    SideBarLink,
} from './SideBarElements';
// el importar el isOpen y el toggle es para que la momento de achicar la ventana y presionar la barra esta no se quede pegada sino que desaparezca//
export default function SideBar({ isOpen, toggle }) {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="/" onClick={toggle}>
                        Inicio
                    </SideBarLink>
                    <SideBarLink to="/visor" onClick={toggle}>
                        Visor
                    </SideBarLink>
                    <SideBarLink to="/galeria" onClick={toggle}>
                        Galería
                    </SideBarLink>
                    <SideBarLink to="/contactanos" onClick={toggle}>
                        Contáctanos
                    </SideBarLink>
                </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>
    );
}