import { useMapEvent } from 'react-leaflet';

const CenterWatcher = ({ setCenter }: { setCenter: (center: [number, number]) => void }) => {
  useMapEvent('moveend', (event) => {
    const map = event.target;
    const center = map.getCenter();
    setCenter([center.lat, center.lng]);
  });

  return null;
}

export default CenterWatcher