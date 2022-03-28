// barra de navegacion en general //
import * as React from 'react';
import { Nav, NavLink, Bars, NavMenu, MobileIcon } from './NavBarElements';

// cada nav link es un link perteneciente a la barra, el primero es el logo//
export default function NavBar({ toggle }) {
    return (
        <Nav>
            <MobileIcon onClick={toggle}>
                <Bars />
            </MobileIcon>
            {/*cada uno de los textos de la barra de navegacion, el link va a la ruta definida del app.js, en español porque es lo que se mostrará en la pag. */}
            <NavMenu>
                <NavLink to="/">
                    Inicio
                </NavLink>
                <NavLink to="/visor">
                    Visualizador de Mapa
                </NavLink>
                <NavLink to="/galeria">
                    Galería
                </NavLink>
                <NavLink to="/contactanos">
                    Contáctanos
                </NavLink>
            </NavMenu>
        </Nav>
    );
}