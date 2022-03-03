import { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import RouteMachine from "./RouteMachine";

const Map = ({ stage }) => {
  const [currentStage, setCurrentStage] = useState([]);

  useEffect(() => {
    setCurrentStage(stage);
  }, [stage]);

  return (
    <MapContainer
      doubleClickZoom={false}
      id="mapId"
      zoom={13}
      center={[51.505, -0.09]}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <RouteMachine stage={currentStage} key={JSON.stringify(currentStage)} />
    </MapContainer>
  );
};

export default Map;
