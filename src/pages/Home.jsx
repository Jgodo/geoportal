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
                    
                    <p style={{ fontSize: '1.8vw',}}>GEOPORTAL DE LA COMUNA MACHALÍ:</p>
                    <p style={{ fontSize: '1.8vw',}}>La información geográfica dispuesta en este geoportal es de carácter referencial,</p>
                    <p style={{ fontSize: '1.8vw',}}>se presenta con el objetivo es visibilizar la problemática de los microbasurales</p>
                    <p style={{ fontSize: '1.8vw',}}>en la Comuna de Machalí que afectan a la población y contaminan esteros y canales. </p>
                    <p style={{ fontSize: '1vw',}}>Geoportal desarrollado en el marco de la tesis para optar al título de geógrafo de Jacob Israel Godoy Pérez.</p>
                    <p style={{ fontSize: '1vw',}}>Dpto. de Geografía, Facultad de Arquitectura Urbanismo y Geografía, Universidad de Concepción. </p>  
                    
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
