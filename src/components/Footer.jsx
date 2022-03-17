// es la barra de abajo
import React from 'react';
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebSiteRights,
    SocialIcons,
    SocialIconLink,
} from './FooterElements';

// importar los iconos de youtube y Github//
import { FaGithub } from 'react-icons/fa';

//mensaje parte baja//
export default function Footer() {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">Geoportal Machalí</SocialLogo>
                        <WebSiteRights>
                            Geoportal Machalí &#169; 2022 Todos los derechos
                            reservados
                        </WebSiteRights>
                        <SocialIcons>
                            <SocialIconLink
                                href="https://github.com/Jgodo/geoportal"
                                target="_blank"
                                aria-label="Github"
                            >
                                <FaGithub />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
}