import MapCard from "./MapCard";
import MapThreeView from "./MapThreeView";

const MapThreeContainer = ({ stage }) => {

  return (
    <MapCard>
      <MapThreeView stage={stage}/>
    </MapCard>
  );
};

export default MapThreeContainer;
