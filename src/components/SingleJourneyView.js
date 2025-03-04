import singleJourneyViewCss from "./css/SingleJourneyView.module.css";
import {
  Tooltip,
  CircleMarker,
  MapContainer,
  TileLayer,
  Polyline,
} from "react-leaflet";

const SingleJourneyView = ({ places }) => {
  const circleMarkers = places.places.map((place) => {
    return (
      <CircleMarker
        key={place.id}
        center={place.coordinates}
        pathOptions={place.pathOptions}
        radius={35}
      >
        <Tooltip className={singleJourneyViewCss[`${place.class}`]} permanent>
          {place.title}
          <br />
          {place.time}
          <br />
          {place.duration && `( ${place.duration} )`}
          {place.direction && `${place.direction}`}
        </Tooltip>
      </CircleMarker>
    );
  });

  const polyLineCoordinates = places.places.map((place) => place.coordinates);

  return (
    <MapContainer center={[51.505, -0.09]} zoom={10}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {circleMarkers.map((circleMarker) => {
        return circleMarker;
      })}

      <Polyline
        pathOptions={{ color: "#01579b", weight: 5 }}
        positions={polyLineCoordinates}
      />
    </MapContainer>
  );
};

export default SingleJourneyView;
