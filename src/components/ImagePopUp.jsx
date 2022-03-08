// compilado de imagenes pop up para mostrar lugares donde se recolectó la información
import React from 'react';
import { Marker, Popup as PopupLeaftlet, LayerGroup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// icono de coordenada
const mapIcon = L.icon({
    iconUrl: require('./../images/camara.png'),
    iconSize: [38, 40],
});

//Lista de objeto donde cada objeto tiene la informacion de una foto diferente: ruta, titulo y coordenadas
const photos = [
    {
        src: `${require('./../images/popup/elbosque.jpg')}`,
        title: 'Villa el Bosque',
        coordinates: [-34.168211, -70.644524],
    },
    {
        src: `${require('./../images/popup/vistaelvalle.jpg')}`,
        title: 'Vista el Valle',
        coordinates: [-34.163696, -70.637797],
    },
    {
        src: `${require('./../images/popup/pantanito.jpg')}`,
        title: 'Sector Pantanito',
        coordinates: [-34.190211, -70.649538],
    },
    {
        src: `${require('./../images/popup/belloolivo.jpg')}`,
        title: 'Bello Olivo',
        coordinates: [-34.185895, -70.641359], 
    },
    {
        src: `${require('./../images/popup/lahacienda.jpg')}`,
        title: 'Camino la Hacienda',
        coordinates: [-34.180043, -70.656711], 
    },
    {
        src: `${require('./../images/popup/12febrero2.JPG')}`,
        title: 'Población 12 de febrero',
        coordinates: [-34.178153, -70.635507], 
    },
    {
        src: `${require('./../images/popup/calicanto.jpg')}`,
        title: 'Sector Calicanto',
        coordinates: [-34.190572, -70.642801], 
    },
    {
        src: `${require('./../images/popup/quebradamanzano.jpg')}`,
        title: 'Quebrada el Manzano',
        coordinates: [-34.176420, -70.632073], 
    },
    {
        src: `${require('./../images/popup/villavistahermosa.jpg')}`,
        title: 'Villa Vista Hermosa',
        coordinates: [-34.168192, -70.641166], 
    },
    {
        src: `${require('./../images/popup/villaelalamo.jpg')}`,
        title: 'Villa el Álamo',
        coordinates: [-34.170020, -70.634694], 
    },
    {
        src: `${require('./../images/popup/vistaelvalle2.JPG')}`,
        title: 'Vista el Valle',
        coordinates: [-34.166351, -70.641828], 
    },
    {
        src: `${require('./../images/popup/villaelllano.jpg')}`,
        title: 'Villa el Llano',
        coordinates: [-34.172060, -70.643390], 
    },
    {
        src: `${require('./../images/popup/villacordillera1.jpg')}`,
        title: 'Villa Cordillera',
        coordinates: [-34.171469, -70.638791], 
    },
    {
        src: `${require('./../images/popup/villalavinilla.jpg')}`,
        title: 'Límite Villa la Vinilla - Villa el Álamo',
        coordinates: [-34.1732449, -70.638710], 
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