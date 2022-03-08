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
                        fontSize: '3rem',
                        backgroundColor: 'rgba(52, 52, 52, 0.8)',
                        padding: '1rem',
                    }}
                >
                    <p>fdggfdgdfgfdgfdgdfgdfgdfgdfgfdggfdgfgdTEXT</p>
                    <p>TgfdgdfggdfgdfgfdfgdfgfdgfdgdfgdfgdffgdfXT</p>
                    <p>TEXgdfgdfgdfgdfgdfgdfgdfgdfgdfdfgdgdfgdfgdT</p>
                    <p>TEgdfgdfgfdgdfgdfgdfgdfgdfgdfgfdgdfgdfgdfgdXT</p>   
                    
                </div>
                <img
                    src={require('./../images/logo.jpeg')}
                    alt="Logo"
                    loading="lazy"
                    height="80%"
                    width="80%"
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
