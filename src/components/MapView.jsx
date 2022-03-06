import React from 'react';
import { MapContainer, TileLayer, GeoJSON, LayersControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import esterosycanales from './../data/esterosycanales.json';
import zonaurbana from './../data/zonaurbana.json'
import poblaciones from './../data/poblaciones.json'


// cambiar el color y la opacidad de la capa
const center = [-34.17593, -70.64524];
const areaStyle = {
    fillColor: 'orange',
    fillOpacity: 0.14,
    color: 'orange',
}
// hacer que se vea el nombre de estero y canales
function onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.name) {
        layer.bindPopup(feature.properties.name);
    }
}
// constante de estilo poblaciones
const pobStyle = {
    fillColor: 'purple',
    fillOpacity: 0.5,
    color: 'purple',
}
// layer control es para el contenedor de capas, baselayer para mapas base, overlay es para las prender y apagar las capas
const MapView = () => {
    return (
        <MapContainer center={center} zoom={14.5}>
            <LayersControl position="topright">
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                <LayersControl.Overlay name="Zona Urbana">
                    <GeoJSON data={zonaurbana} style={areaStyle} />
                </LayersControl.Overlay>
                <LayersControl.Overlay name="Esteros y Canales">
                    <GeoJSON
                        data={esterosycanales}
                        onEachFeature={onEachFeature}
                    />
                </LayersControl.Overlay>
                <LayersControl.Overlay name="Poblaciones">
                    <GeoJSON data={poblaciones} onEachFeature={onEachFeature} style={pobStyle}/>
                </LayersControl.Overlay>
                
            </LayersControl>
        </MapContainer>
    );
};

export default MapView;