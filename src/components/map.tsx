'use client';

import L from 'leaflet';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import ReactDOMServer from 'react-dom/server';

import 'leaflet/dist/leaflet.css';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

import MapIcon from './map-icon';

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: markerIcon.src,
    iconRetinaUrl: markerIcon2x.src,
    shadowUrl: markerShadow.src,
});

interface MarkerProps {
    name: string;
    coordinates: number[];
}

interface MapProps {
    markers: MarkerProps[];
}

const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const Map: React.FC<MapProps> = ({ markers }) => {

    const renderMapIcon = (name: string) => {
        const icon = L.divIcon({
            className: 'custom-icon',
            html: ReactDOMServer.renderToString(<MapIcon label={name} />)
        });
        return icon;
    };

    return (
        <MapContainer
            center={markers[0]?.coordinates as L.LatLngExpression || [51, -0.09]}
            zoom={4}
            scrollWheelZoom={true}
            className="h-[800px] w-full absolute top-52 overflow-hidden left-11 z-[8] rounded-lg"
        >
            <TileLayer
                url={url}
                attribution={attribution}
            />
            {markers.map((marker, index) => (
                <Marker key={index} position={marker.coordinates as L.LatLngExpression} icon={renderMapIcon(marker.name)} />
            ))}
        </MapContainer>
    );
};

export default Map;