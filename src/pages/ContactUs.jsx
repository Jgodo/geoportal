import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Button,TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

// Aquí le puede cambiar el color al botón
const theme = createTheme({
    palette: {
        neutral: {
            main: '#64748B',
            contrastText: '#fff',
        },
    },
});

export default function ContactUs() {
    const formParams = useRef();

    //esta es la función que envía el correo//
    function sendEmail() {
        emailjs
            .sendForm(
                process.env.React_App_SERVICE_ID,
                process.env.React_App_TEMPLATE_ID,
                formParams.current,
                process.env.React_App_USER_ID,
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                },
            );
        formParams.current.reset();
    }
    return (
        <div>
             <img
                    src={require('./../images/logo.jpeg')}
                    alt="Logo"
                    loading="lazy"
                    height="34%"
                    style={{
                        position: 'absolute',
                        top: '16%',
                        left:'20%',
                        padding: '1rem',
                        display: 'flex',
                    }}
                />
                <Box
                ref={formParams}
                component="form"
                sx={{
                    '& .MuiTextField-root': {
                        m: 1,
                        width: '30%',
                    },
                }}
                noValidate
                autoComplete="off"
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'right',
                        marginRight: '5%',
                        marginTop: '5%',
                    }}
                >
                    <TextField
                        id="filled-helperText"
                        label="Nombre"
                        variant="filled"
                        name="name"
                    />
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'right',
                        marginRight: '5%',
                    }}
                >
                    <TextField
                        id="filled-helperText"
                        label="Email"
                        variant="filled"
                        name="email"
                    />
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'right',
                        marginRight: '5%',
                    }}
                >
                    <TextField
                        id="filled-multiline-static"
                        label="Mensaje"
                        multiline
                        rows={4}
                        variant="filled"
                        name="message"
                    />
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'right',
                        margin: '2.5% 5.5% 5.5% 0',
                    }}
                >
                    <ThemeProvider theme={theme}>
                        <Button
                            color="neutral"
                            variant="outlined"
                            endIcon={<SendIcon />}
                            onClick={sendEmail}
                        >
                            Enviar
                        </Button>
                    </ThemeProvider>
                </div>
            </Box>
        </div>
        
    );
}