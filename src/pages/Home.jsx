// importamos el react , luego se define la constante con los estilos el componente home, como por ejemplo el ancho del componente de la pagina, color de fondo ,etc //
import React from 'react';
import { Card, CardMedia } from '@mui/material';

// por completar
    
export default function Home() {
    return (
        <Card>
            <div style={{ position: 'relative' }}>
                <CardMedia
                    style={{objectFit: 'contain', maxWidth: '100%', maxHeight: '100%',display: 'flex'}}
                    component="img"
                    image={require('./../images/machali.JPG')}
                    title="Home"
                    alt="HOME"
                />

                <div
                    style={{
                        position: 'absolute',
                        color: 'white',
                        top: '48%',
                        left: '2%',
                        backgroundColor: 'rgba(52, 52, 52, 0.8)',
                        padding: '1rem',
                    }}
                >
                    
                    <p style={{ fontSize: '1.8vw',}}>GEOPORTAL MACHALÍ:</p>
                    <p style={{ fontSize: '1.8vw',}}>Bienvenidos al proyecto de tesis de geoportal para</p>
                    <p style={{ fontSize: '1.8vw',}}>la comuna de Machalí. En él podrás encontrar algunas</p>
                    <p style={{ fontSize: '1.8vw',}}>herramientas que te ayudarán a entender las problemáticas </p>
                    <p style={{ fontSize: '1.8vw',}}>asociadas al territorio, entre ellas la ubicación de</p>
                    <p style={{ fontSize: '1.8vw',}}>microbasurales dentro de la zona urbana de la comuna.</p>
                       
                    
                </div>
                <img
                    src={require('./../images/logo.jpeg')}
                    alt="Logo"
                    loading="lazy"
                    height="34%"
                    width="15%"
                    style={{
                        position: 'absolute',
                        top: '11%',
                        left:'15%',
                        padding: '1rem',
                        display: 'flex',
                    }}
                />
            </div>
        </Card>
    );
}      
