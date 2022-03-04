import css from "./css/MapThreeContainer.module.css";
import MapThreeView from "./MapThreeView";

const MapThreeContainer = ({ stage }) => {

  return (
    <div className={css["map-three-container"]}>
      <MapThreeView stage={stage}/>
    </div>
  );
};

export default MapThreeContainer;
