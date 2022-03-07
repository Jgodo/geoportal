// importamos el react , luego se define la constante con los estilos el componente home, como por ejemplo el ancho del componente de la pagina, color de fondo ,etc //
import React from 'react';

const styleHome = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#F4F3F0',
};

// por completar
export default function Home() {
    return (
        <div style={styleHome}>
            <img style={{objectFit: 'contain', maxWidth: '100%', height: 'auto'}} src={require('./../images/MAX_0036.JPG')} alt="home" />
        </div>
    );

    
}