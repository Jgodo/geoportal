import React from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Survey() {
    return (
        <Box
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
                    helperText="*Necesario"
                    variant="filled"
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
                    label="Correo"
                    helperText="*Debe ser un correo válido"
                    variant="filled"
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
                    helperText="*Necesario"
                />
            </div>
        </Box>
    );
}