import { useEffect, useState } from "react";
import XMLParser from "react-xml-parser";
import MotorwayServicesContainer from "./MotorwayServicesContainer";
import axios from "axios";
import xmlData from "../xml/motorway-services.xml";

const MotorwayServices = () => {
  const [placemarks, setPlacemarks] = useState([]);

  useEffect(() => {
    axios
      .get(xmlData, {
        "Content-Type": "application/xml; charset=utf-8",
      })
      .then((response) => {
        const parsedXML = new XMLParser().parseFromString(response.data);
        const placemarks = parsedXML.getElementsByTagName("Placemark");
        setPlacemarks(placemarks);
      });
  }, []);

  return <MotorwayServicesContainer placemarks={placemarks} />;
};

export default MotorwayServices;
