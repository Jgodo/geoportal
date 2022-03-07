// importacion de react
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import YoutubeEmbeded from './../components/YoutubeEmbeded'
export default function Gallery() {
    return (
        <ImageList sx={{ width: 1, height: 1, m: 'auto' }}>
            <ImageListItem key="Subheader" cols={2}>
                <ListSubheader component="div" style={{fontSize: '3rem'}}>
                    
                    Galería Sectores Microbasurales
                </ListSubheader>
            </ImageListItem>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={item.title}
                        subtitle={item.author}
                        actionIcon={
                            <IconButton
                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                aria-label={`info about ${item.title}`}
                            >
                                <InfoIcon />
                            </IconButton>
                        }
                    />
                </ImageListItem>
            ))}

            {youtubeData.map((item) => (
                <ImageListItem key={item.embedId}>
                   <YoutubeEmbeded embedId={item.embedId}/>
                    <ImageListItemBar
                        title={item.title}
                        subtitle={item.author}
                        position={'top'}
                        actionIcon={
                            <IconButton
                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                aria-label={`info about ${item.title}`}
                            >
                                <InfoIcon />
                            </IconButton>
                        }
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

const itemData = [
    {
        img: `${require('./../images/vistaelvalle2.JPG')}`,
        title: 'Vista el Valle',
        author: 'Jacob Godoy',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: `${require('./../images/vistaelvalle23.JPG')}`,
        title: 'Vista el Valle 2',
        author: 'Jacob Godoy',
    },
    {
        img: `${require('./../images/villacordillera2.JPG')}`,
        title: 'Villa Cordillera',
        author: 'Jacob Godoy',
    },
    {
        img: `${require('./../images/villaelalamo2.jpg')}`,
        title: 'Villa el Álamo',
        author: 'Jacob Godoy',
        cols: 2,
    },
    {
        img: `${require('./../images/quebradamanzano2.JPG')}`,
    title: 'quebrada el Manzano',
        author: 'Jacob Godoy',
        cols: 2,
    },
    {
        img: `${require('./../images/12febrero.JPG')}`,
        title: 'Población 12 de febrero',
        author: 'Jacob Godoy',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: `${require('./../images/belloolivo2.jpg')}`,
        title: 'Población Bello Olivo',
        author: 'Jacob Godoy',
    },
    {
        img: `${require('./../images/calicanto2.jpg')}`,
        title: 'Sector Calicanto',
        author: 'Jacob Godoy',
    },
    
];
const youtubeData = [
    {
        embedId: 'b5HClrjDgE8',
        title: 'Canal Cachapoal - Villa Cordillera - Machalí',
        author: 'Jacob Godoy Autel Evo 2 Pro V2'
    },
    {
        embedId: 'rL7sfsgBDrc',
        title: 'Canal Cachapoal - Vista el Valle - Canal Lucano- Machalí',
        author: 'Jacob Godoy Autel Evo 2 Pro V2'
    },
    {
        embedId: 'Vyh6R8swx6o',
        title: 'Canal Lucano - Villa el Bosque- Villa Horizonte - Vista el Valle - Canal Cachapoal- Machalí',
        author: 'Jacob Godoy Autel Evo 2 Pro V2'
    },
    {
        embedId: 'H1xjAOo4F5o',
        title: 'Población 12 de febrero - Quebrada el Manzano 1',
        author: 'Jacob Godoy Autel Evo 2 Pro V2'
    },
]