import css from "./css/Welcome.module.css";

const Welcome = () => {
  return (
    <div className={css.welcome}>
      <h2>Welcome</h2>
      <p>This is an app</p>
    </div>
  );
}

export default Welcome;