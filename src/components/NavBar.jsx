// barra de navegacion en general //
import * as React from 'react';
import { Nav, NavLink, Bars, NavMenu, MobileIcon } from './NavBarElements';

// cada nav link es un link perteneciente a la barra, el primero es el logo//
export default function NavBar({ toggle }) {
    return (
        <Nav>
            <NavLink to="/">
                <img
                    src={require('./../images/logo.jpeg')}
                    alt="Logo"
                    loading="lazy"
                    height="80vh"
                    width="80vw"
                />
            </NavLink>
            <MobileIcon onClick={toggle}>
                <Bars />
            </MobileIcon>
            {/*cada uno de los textos de la barra de navegacion, el link va a la ruta definida del app.js, en español porque es lo que se mostrará en la pag. */}
            <NavMenu>
                <NavLink to="/map-viewer" activeStyle>
                    Visor
                </NavLink>
                <NavLink to="/gallery" activeStyle>
                    Galería
                </NavLink>
                <NavLink to="/download" activeStyle>
                    Descargas
                </NavLink>
                <NavLink to="/survey" activeStyle>
                    Encuesta
                </NavLink>
            </NavMenu>
        </Nav>
    );
}