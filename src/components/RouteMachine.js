import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const CreateRouteMachineLayer = ({ stage }) => {
  // console.log("...stage.startLatLang", stage.startLatLang);
  // console.log("...stage.endLatLang", stage.endLatLang);

  console.log(stage.waypoints);
  
  const waypoints = stage.waypoints.map((waypoint) => {
    return L.latLng(waypoint);
  });

  console.log(waypoints);

  
  const instance = L.Routing.control({
    // waypoints: [L.latLng(...stage.startLatLang), L.latLng(...stage.endLatLang)],
    waypoints: waypoints,
    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 4 }],
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: true,
    showAlternatives: false,
  });

  return instance;
};

const RoutingMachine = createControlComponent(CreateRouteMachineLayer);

export default RoutingMachine;
