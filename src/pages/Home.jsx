// importamos el react , luego se define la constante con los estilos el componente home, como por ejemplo el ancho del componente de la pagina, color de fondo ,etc //
import React from 'react';
import { Card, CardMedia } from '@mui/material';

const styleHome = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#F4F3F0',
};

// por completar
    
export default function Home() {
    return (
        <Card>
            <div style={{ position: 'relative' }}>
                <CardMedia
                    style={{objectFit: 'contain', maxWidth: '100%', maxHeight: '100%',display: 'flex'}}
                    component="img"
                    image={require('./../images/MAX_0036.JPG')}
                    title="Home"
                    alt="HOME"
                />

                <div
                    style={{
                        position: 'absolute',
                        color: 'white',
                        top: '25%',
                        left: '2%',
                        fontSize: '2rem',
                        backgroundColor: 'rgba(52, 52, 52, 0.8)',
                        padding: '1rem',
                    }}
                >
                    <p>GEOPORTAL MACHALÍ:</p>
                    <p>Bienvenidos al proyecto de tesis de geoportal para</p>
                    <p>la comuna de Machalí, en el podrás encontrar algunas</p>
                    <p>herramientas que te ayudarán a entender las problemáticas </p>
                    <p>asociadas al territorio, entre ellas la ubicación de</p>
                    <p>microbasurales dentro de la zona urbana de la comuna.</p>
                       
                    
                </div>
                <img
                    src={require('./../images/logo.jpeg')}
                    alt="Logo"
                    loading="lazy"
                    height="40%"
                    width="24%"
                    style={{
                        position: 'absolute',
                        top: '15%',
                        left:'65%',
                        padding: '1rem',
                    }}
                />
            </div>
        </Card>
    );
}      
