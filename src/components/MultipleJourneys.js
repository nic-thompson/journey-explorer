import css from "./css/MultipleJourneys.module.css";
import MultipleJourneysContainer from "./MultipleJourneysContainer";

const MultipleJourneys = () => {
  const places = [
    [51.558009, -0.119141],
    [51.461740, -0.137663],
    [51.527290, -0.183157],
    [51.529513, 0.005318],
    [51.570986, -0.194943],
    [51.407877, -0.299656],
    [51.431642, -0.193226],
    [51.431642, -0.193226],
    [51.459246, -0.117352],
    [51.560684, -0.302622],
    [51.645696, -0.188775],
    [51.607580, -0.051903],
    [51.883989, 0.012056],
    [51.283096, 0.015893],
    [51.592483, -0.664630],
    [51.466748, -0.364023],
  ];
  return (
    <div className={css['multiple-journeys']}>
      <h2>Multiple Journeys</h2>
      <MultipleJourneysContainer places={places} />
    </div>
  );
}

export default MultipleJourneys;