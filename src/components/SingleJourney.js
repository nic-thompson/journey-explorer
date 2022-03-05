import css from "./css/SingleJourney.module.css";
import SingleJourneyContainer from "./SingleJourneyContainer";

const SingleJourney = () => {
  // description,lat,lon,timestamp
  // old street,51.5255233,-0.0908146,2022-02-27 09:00
  // haringey,51.5879196,-0.1413858,2022-02-27 09:30
  // service station,51.9464502,-0.5088732,2022-02-27 10:30
  // bletchley park,51.9976597,-0.742875,2022-02-27 11:00
  // service station,51.6315845,-0.2671085,2022-02-27 17:30
  // haringey,51.5879196,-0.1413858,2022-02-27 18:00
  // old street,51.5255233,-0.0908146,2022-02-27 19:00
  const places = [
    {
      id: 1,
      title: "Old Street",
      direction: "OUTBOUND",
      time: "9:00",
      coordinates: [51.5255233, -0.0908146],
      class: "start-tooltip",
      pathOptions: { fillColor: "blue", color: "blue" },
    },
    {
      id: 2,
      title: "Haringey",
      direction: "OUTBOUND",
      time: "9:30",
      coordinates: [51.5879196, -0.1413858],
      class: "waypoint-tooltip",
      pathOptions: { fillColor: "blue", color: "blue" },
    },
    {
      id: 3,
      title: "Service Station",
      direction: "OUTBOUND",
      time: "10:30",
      coordinates: [51.9464502, -0.5088732],
      class: "waypoint-tooltip",
      pathOptions: { fillColor: "blue", color: "blue" },
    },
    {
      id: 4,
      title: "Bletchley Park",
      time: "11:00",
      duration: "347 mins",
      coordinates: [51.9976597, -0.742875],
      class: "destination-tooltip",
      pathOptions: { fillColor: "red", color: "red" },
    },
    {
      id: 5,
      title: "Service Station",
      direction: "INBOUND",
      time: "17:30",
      coordinates: [51.9464502, -0.5088732],
      class: "waypoint-in-tooltip",
      pathOptions: { fillColor: "blue", color: "blue" },
    },
    {
      id: 6,
      title: "Haringey",
      direction: "INBOUND",
      time: "18:00",
      coordinates: [51.5879196, -0.1413858],
      class: "waypoint-in-tooltip",
      pathOptions: { fillColor: "blue", color: "blue" },
    },
    {
      id: 7,
      title: "Old Street",
      direction: "INBOUND",
      time: "19:00",
      coordinates: [51.5255233, -0.0908146],
      class: "end-tooltip",
      pathOptions: { fillColor: "green", color: "green" },
    },
  ];

  return (
    <div className={css["single-journey"]}>
      <h3>Old Street to Bletchley Park to Old Street</h3>
      <SingleJourneyContainer places={places} />
    </div>
  );
};

export default SingleJourney;
