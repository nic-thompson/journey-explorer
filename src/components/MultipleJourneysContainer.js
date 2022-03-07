import MapCard from "./MapCard";
import MultipleJourneysView from "./MultipleJourneysView";

const MultipleJourneysContainer = (places) => {

  return (
    <MapCard>
      <MultipleJourneysView places={places}/>
    </MapCard>
  );
};

export default MultipleJourneysContainer;
