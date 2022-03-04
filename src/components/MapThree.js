import { useState } from "react";

import css from "./css/MapThree.module.css";

import MapThreeContainer from "./MapThreeContainer";
import MapThreeSelector from "./MapThreeSelector";

const MapThree = () => {
  const [stage, setStage] = useState(1);
  // description,lat,lon,timestamp
  // old street,51.5255233,-0.0908146,2022-02-27 09:00
  // haringey,51.5879196,-0.1413858,2022-02-27 09:30
  // service station,51.9464502,-0.5088732,2022-02-27 10:30
  // bletchley park,51.9976597,-0.742875,2022-02-27 11:00
  // service station,51.6315845,-0.2671085,2022-02-27 17:30
  // haringey,51.5879196,-0.1413858,2022-02-27 18:00
  // old street,51.5255233,-0.0908146,2022-02-27 19:00
  const journeyStages = [
    {
      id: 1,
      title: "Old Street to Harringey",
      time: "9:00 - 9:30",
      waypoints: [
        [51.5255233,-0.0908146],
        [51.5879196, -0.1413858],
      ],
    },
    {
      id: 2,
      title: "Haringey to Service Station",
      time: "9:30 - 10:30",
      waypoints: [
        [51.5255233,-0.0908146],
        [51.5879196, -0.1413858],
        [51.9464502, -0.5088732],
      ],
    },
    {
      id: 3,
      title: "Service Station to Bletchley Park",
      time: "10:30 - 11:00",
      waypoints: [
        [51.5255233,-0.0908146],
        [51.5879196, -0.1413858],
        [51.9464502, -0.5088732],
        [51.9976597, -0.742875],
      ],
    },
    {
      id: 4,
      title: "Bletchley Park to Service Station",
      time: "11:00 - 17:30",
      waypoints: [
        [51.5255233,-0.0908146],
        [51.5879196, -0.1413858],
        [51.9464502, -0.5088732],
        [51.9976597, -0.742875],
        [51.6315845, -0.2671085],
      ],
    },
    {
      id: 5,
      title: "Service Station to Haringey",
      time: "17:30 - 18:00",
      waypoints: [
        [51.5255233,-0.0908146],
        [51.5879196, -0.1413858],
        [51.9464502, -0.5088732],
        [51.9976597, -0.742875],
        [51.6315845, -0.2671085],
        [51.5879196, -0.1413858],
      ],
    },
    {
      id: 6,
      title: "Haringey to Old Street",
      time: "18:00 - 19:00",
      waypoints: [
        [51.5255233,-0.0908146],
        [51.5879196, -0.1413858],
        [51.9464502, -0.5088732],
        [51.9976597, -0.742875],
        [51.6315845, -0.2671085],
        [51.5879196, -0.1413858],
        [51.5255233, -0.0908146],
      ],
    },
  ];

  const currentStage = journeyStages.find(
    (journeyStage) => journeyStage.id === stage
  );

  const timeChangeHandler = (time) => {
    if (time === "back" && stage > 1) {
      setStage(stage - 1);
    }
    if (time === "forward" && stage < journeyStages.length) {
      setStage(stage + 1);
    }
  };

  return (
    <div className={css['map-three']}>
      <MapThreeSelector
        onTimeChange={timeChangeHandler}
        time={currentStage.time}
        title={currentStage.title}
      />
      <MapThreeContainer stage={currentStage} />
    </div>
  );
};

export default MapThree;
