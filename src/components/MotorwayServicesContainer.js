import MapCard from "./MapCard";
import MotorwayServicesView from "./MotorwayServicesView";

const MotorwayServicesContainer = ({ placemarks }) => {
  return (
    <MapCard>
      <MotorwayServicesView placemarks={placemarks} />
    </MapCard>
  );
};

export default MotorwayServicesContainer;
