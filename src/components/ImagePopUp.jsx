// compilado de imagenes pop up para mostrar lugares donde se recolectó la información
import React from 'react';
import { Marker, Popup as PopupLeaftlet, LayerGroup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// icono de coordenada
const mapIcon = L.icon({
    iconUrl: require('./../images/icon-map.png'),
    iconSize: [38, 40],
});

//Lista de objeto donde cada objeto tiene la informacion de una foto diferente: ruta, titulo y coordenadas
const photos = [
    {
        src: `${require('./../images/popup/elbosque.JPG')}`,
        title: 'Villa el Bosque',
        coordinates: [-34.168211, -70.644524],
    },
    {
        src: `${require('./../images/popup/vistaelvalle.JPG')}`,
        title: 'Vista el Valle',
        coordinates: [-34.163696, -70.637797],
    },
    {
        src: `${require('./../images/popup/spantanito.jpg')}`,
        title: 'Sector Pantanito',
        coordinates: [-34.190211, -70.649538],
    },
    {
        src: `${require('./../images/popup/belloolivo.jpg')}`,
        title: 'Bello Olivo',
        coordinates: [-34.185895, -70.641359], 
    },
];

const markers = photos.map((photo) => (
    <Marker position={photo.coordinates} icon={mapIcon}>
        <PopupLeaftlet>
            <div>
                <img src={photo.src} height="600rem" width="auto" alt="map" />
                <h3>{photo.title}</h3>
            </div>
        </PopupLeaftlet>
    </Marker>
));

export default function ImagePopUp() {
    return <LayerGroup>{markers}</LayerGroup>;
}