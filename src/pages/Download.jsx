import * as React from 'react';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InsertDriveFileRoundedIcon from '@mui/icons-material/InsertDriveFileRounded';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
//importar paquete npm i file-saver//
import { saveAs } from 'file-saver';

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));
// agregar url de archivos ahora que esta en local, luego al subirlo hay que cambiarlos//
const files = [
    {
        url: 'http://localhost:3000/esterosycanales.kmz',
        name: 'esterosycanales.kmz',
        title: 'Esteros y Canales Machalí',
    },
    {
        url: 'http://localhost:3000/machalioctubre2019.dwg',
        name: 'machalioctubre2019.dwg',
        title: 'PRC Machalí',
    },
    {
        url: 'http://localhost:3000/poblaciones.kmz',
        name: 'poblaciones.kmz',
        title: 'Poblaciones Machalí',
    },
    {
        url: 'http://localhost:3000/zonaurbana.kmz',
        name: 'zonaurbana.kmz',
        title: 'Zona Urbana Delimitada',
    },
];

function onDownload(url, name) {
    saveAs(url, name);
}

export default function Download() {
    return (
        <Grid item xs={true} md={6} sx={{ mx: 'auto', minWidth: '90%' }}>
            <Typography
                sx={{ mt: 4, mb: 2, ml: 2 }}
                variant="h5"
                component="div"
            >
                Descargar archivos
            </Typography>
            <Demo>
                <List dense={false}>
                    {files.map((file) => (
                        <ListItem
                            secondaryAction={
                                <IconButton
                                    edge="end"
                                    aria-label="delete"
                                    onClick={() => {
                                        onDownload(file.url, file.name);
                                    }}
                                >
                                    <FileDownloadIcon />
                                </IconButton>
                            }
                        >
                            <ListItemAvatar>
                                <Avatar>
                                    <InsertDriveFileRoundedIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={file.title}
                                secondary={null}
                            />
                        </ListItem>
                    ))}
                </List>
            </Demo>
        </Grid>
    );
}