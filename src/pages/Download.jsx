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
        url: `${process.env.React_App_URL}/esterosycanales.kmz`,
        name: 'esterosycanales.kmz',
        title: 'Esteros y Canales Machalí',
    },
    {
        url: `${process.env.React_App_URL}/OrdenanzaGestionMedioambientalMachali.pdf`,
        name: 'OrdenanzaGestionMedioambientalMachali.pdf',
        title: 'Ordenanza Gestión Medioambiental Comuna de Machalí',
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
                Descargar archivos usar google earth pro para visualizar
            </Typography>
            <Demo>
                <List dense={false}>
                    {files.map((file) => (
                        <ListItem
                            key={file.name}
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