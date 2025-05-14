import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import type { Icon, LatLngTuple } from 'leaflet';

const icon: Icon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const pontos = [
  { id: 1, nome: 'Recife', coords: [-8.0476, -34.8770] as LatLngTuple }, // Use 'as LatLngTuple' aqui
  { id: 2, nome: 'Olinda', coords: [-7.993, -34.842] as LatLngTuple },
  { id: 3, nome: 'Jaboatão', coords: [-8.112, -35.015] as LatLngTuple },
];

export default function Mapa() {
  return (
    <MapContainer center={[-8.0476, -34.8770]} zoom={14} style={{ position: 'relative', height: '100vh', width: '211vh' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      
      {pontos.map(ponto => (
        <Marker key={ponto.id} position={ponto.coords} icon={icon}>
          <Popup>{ponto.nome} teste</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}