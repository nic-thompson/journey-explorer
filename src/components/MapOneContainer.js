import MapCard from "./MapCard";
import MapOneView from "./MapOneView";

const MapOneContainer = (places) => {

  return (
    <MapCard>
      <MapOneView places={places}/>
    </MapCard>
  );
};

export default MapOneContainer;
