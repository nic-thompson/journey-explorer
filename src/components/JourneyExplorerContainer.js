import MapCard from "./MapCard";
import JourneyExplorerView from "./JourneyExplorerView";

const JourneyExplorerContainer = ({ stage }) => {

  return (
    <MapCard>
      <JourneyExplorerView stage={stage}/>
    </MapCard>
  );
};

export default JourneyExplorerContainer;
