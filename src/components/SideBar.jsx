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
                    <SideBarLink to="/map-viewer" onClick={toggle}>
                        Visor
                    </SideBarLink>
                    <SideBarLink to="/gallery" onClick={toggle}>
                        Gallery
                    </SideBarLink>
                    <SideBarLink to="/download" onClick={toggle}>
                        Download
                    </SideBarLink>
                    <SideBarLink to="/survey" onClick={toggle}>
                        Survey
                    </SideBarLink>
                </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>
    );
}