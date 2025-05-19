import { useMap } from "react-leaflet";
import { useEffect } from "react";
import type { LatLngTuple } from "leaflet";

function ChangeView({ center }: { center: LatLngTuple }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, 18);
  }, [center, map]);
  return null; 
}

export default ChangeView