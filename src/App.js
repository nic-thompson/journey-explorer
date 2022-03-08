import { Route, Switch } from "react-router-dom";
import "./App.css";
import Welcome from "./components/Welcome";
import SingleJourney from "./components/SingleJourney";
import MultipleJourneys from "./components/MultipleJourneys";
import JourneyExplorer from "./components/JourneyExplorer";
import Layout from "./components/layout/Layout";
import FileUpload from "./components/FileUpload";
import MotorwayServices from "./components/MotorwayServices";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/single-journey" component={SingleJourney} />
        <Route exact path="/multiple-journeys" component={MultipleJourneys} />
        <Route exact path="/journey-explorer" component={JourneyExplorer} />
        <Route exact path="/file-upload" component={FileUpload} />
        <Route exact path="/motorway-services" component={MotorwayServices} />
      </Switch>
    </Layout>
  );
};

export default App;
