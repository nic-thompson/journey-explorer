import { MapContainer, TileLayer, Polyline } from "react-leaflet";

const MultipleJourneyView = ({ places }) => {

  return (
    <MapContainer center={[51.505, -0.09]} zoom={9}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Polyline
        pathOptions={{ color: "#01579b", weight: 5 }}
        positions={places.places}
      />
    </MapContainer>
  );
};

export default MultipleJourneyView;
