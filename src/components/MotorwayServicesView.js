import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";

const MotorwayServicesView = ({ placemarks }) => {
  const motorwayServices = placemarks.map((placemark, index) => {
    const coordinates = placemark.children[2].children[0].value
      .split(",")
      .reverse()
      .slice(1, 3);
    return (
      <CircleMarker
        key={index}
        center={coordinates}
        pathOptions={{ color: "blue" }}
        radius={10}
      >
        <Tooltip>{placemark.children[0].value}</Tooltip>
      </CircleMarker>
    );
  });

  return (
    <MapContainer center={[52.949152, -1.573693]} zoom={7}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {motorwayServices.map((motorwayService) => {
        return motorwayService;
      })}
    </MapContainer>
  );
};

export default MotorwayServicesView;
