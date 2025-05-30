import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import type { Icon, LatLngTuple } from 'leaflet';
import ChangeView from './Changeview';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MdError } from 'react-icons/md';

const icon: Icon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

type point = {
  _id: string;
  name: string;
  description: string;
  image: string;
  coordinates: [number, number]; //lon lat
};

const Mapa = ({ busca }: { busca: LatLngTuple }) => {
  const [points, setPoints] = useState<point[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const buscarPoints = async () => {
      try {
        const response = await axios.get("https://inframap-back-end-3zs0.onrender.com/points/allpoints");
        setPoints(response.data);
        console.log(response)
      } catch (error) {
        navigate("/");
        if (axios.isAxiosError(error)) {
          toast.error("A plataforma não está respondendo!", {
            icon: <MdError color="#1F3B4D" size={24} />
          });
        } else {
          toast.error("Erro desconhecido, entre em contato conosco pelo WhatsApp.", {
            icon: <MdError color="#1F3B4D" size={26} />
          });
        }
      }
    };

    buscarPoints();
  }, []);

  return (
    <MapContainer center={busca} zoom={14} style={{ height: '100vh', width: '100vw', zIndex: 0 }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <ChangeView center={busca} />

      {points.map((point) => (
        <Marker
          key={point._id}
          position={[point.coordinates[1], point.coordinates[0]]}
          icon={icon}
        >
          <Popup>
            <strong>{point.name}</strong><br />
            {point.description}<br />
            <img src={`https://inframap-back-end-3zs0.onrender.com/uploads/${point.image}`} alt="Imagem não carregada." width={100} />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Mapa;
