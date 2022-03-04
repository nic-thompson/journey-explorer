import css from "./css/MapOneContainer.module.css";
import MapOneView from "./MapOneView";

const MapOneContainer = (places) => {

  return (
    <div className={css["map-one-container"]}>
      <MapOneView places={places}/>
    </div>
  );
};

export default MapOneContainer;
