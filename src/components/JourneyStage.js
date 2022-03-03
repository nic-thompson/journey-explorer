import css from "./css/JourneyStage.module.css";
import Map from "./Map";

const JourneyStage = ({ stage }) => {

  return (
    <div className={css["journey-stage"]}>
      <Map stage={stage}/>
    </div>
  );
};

export default JourneyStage;
