import { MapContainer, TileLayer } from 'react-leaflet';
import { useState } from 'react';
import CenterWatcher from './CenterWatcher'
import pointer from "../../assets/pointer.png"
import './MapCenterPointsSyle.css'

interface MapCenterPointProps {
  onChangeCenter?: (coords: [number, number]) => void;
}

export default function MapCenterPoint({ onChangeCenter } : MapCenterPointProps) {
  const [center, setCenter] = useState<[number, number]>([-7.94055, -34.88030]); 

  return (
    <div>
      <MapContainer center={center} zoom={17} style={{ height: '100vh', width: '100vw', zIndex: 0 }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <CenterWatcher setCenter={(newCenter) => {
          setCenter(newCenter);
          onChangeCenter?.(newCenter);
        }} />
      </MapContainer>

      <div className='center-pointer'>
        <img src={pointer} alt="pointer" width={40}/>
      </div>
    </div>
  );
}
