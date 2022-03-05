import css from "./css/MapCard.module.css";

const MapCard = (props) => {
  return <div className={css['map-card']}>{props.children}</div>;
};

export default MapCard;
