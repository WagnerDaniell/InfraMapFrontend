import { useMapEvents } from 'react-leaflet';
import type { LatLngTuple } from 'leaflet';

// Componente para capturar duplo clique
const DbClickHandler = ({ onDbClick }: { onDbClick: (coords: LatLngTuple) => void }) => {
  useMapEvents({
    dblclick(e) {
      const coords: LatLngTuple = [e.latlng.lat, e.latlng.lng];
      onDbClick(coords);
    }
  });

  return null;
};

export default DbClickHandler;
