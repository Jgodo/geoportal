//importacion de .Geojson en data donde hay que cambiar la extensión a json para poder visualizar. importando tambien las capas
// esteros y canales, y las otrasm tambien el marker que es el punto en cual se despliegan las imagenes//
import React from 'react';
import { MapContainer, TileLayer, GeoJSON, LayersControl } from 'react-leaflet';
import ImagePopUp from './../components/ImagePopUp';

// estilos de mapa que luego en el app.css los sobre escribimos//
import 'leaflet/dist/leaflet.css';

//importamos los datas osea las capas en formato Geojson pero convertido en json
import esterosycanales from '../data/esterosycanales.json';
import zonaurbana from '../data/zonaurbana.json'
import poblaciones from '../data/poblaciones.json'


// center es donde abrirá el mapa, osea la coordenada central//
//cambiar el color y la opacidad de la capa en el areastyle//
const center = [-34.17593, -70.64524];
const areaStyle = {
    fillColor: 'orange',
    fillOpacity: 0.14,
    color: 'orange',
}

// constante de estilo poblaciones
const pobStyle = {
    fillColor: 'purple',
    fillOpacity: 0.5,
    color: 'purple',
}

// hacer que se vea el nombre de estero y canales
function onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.name) {
        layer.bindPopup(feature.properties.name);
    }
}

// layer control es para el contenedor de capas, baselayer para mapas base, overlay es para las prender y apagar las capas
export default function MapViewer() {
    return (
        <MapContainer center={center} zoom={14.5}>
            <LayersControl position="topright">
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                {/* colocar a todos los overlay el checked para que se queden activas las capas al momento de ingresar  */}
                <LayersControl.Overlay name="Zona Urbana" checked>
                    <GeoJSON data={zonaurbana} style={areaStyle} />
                </LayersControl.Overlay>

                <LayersControl.Overlay name="Esteros y Canales" checked>
                    <GeoJSON
                        data={esterosycanales}
                        onEachFeature={onEachFeature}
                    />
                </LayersControl.Overlay>

                <LayersControl.Overlay name="Poblaciones"  checked>
                    <GeoJSON data={poblaciones} onEachFeature={onEachFeature} style={pobStyle}/>
                </LayersControl.Overlay> 

                {/* cambiar las coordenadas y tamaños desplegado  */}
                <LayersControl.Overlay name="Registro Visual Microbasurales" checked>
                    <ImagePopUp />
                </LayersControl.Overlay>  
            </LayersControl>
        </MapContainer>
    );
};
