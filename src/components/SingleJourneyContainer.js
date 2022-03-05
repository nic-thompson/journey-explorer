import MapCard from "./MapCard";
import SingleJourneyView from "./SingleJourneyView";

const SingleJourneyContainer = (places) => {

  return (
    <MapCard>
      <SingleJourneyView places={places}/>
    </MapCard>
  );
};

export default SingleJourneyContainer;
