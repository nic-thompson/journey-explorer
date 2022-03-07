import { NavLink } from "react-router-dom";

import css from "./css/MainNavigation.module.css";

const MainNavigation = (props) => {
  return (
    <header className={css.header}>
      <div className={css.logo}>Journey Explorer</div>
      <nav className={css.nav}>
        <ul>
          <li>
            <NavLink to="/" activeClassName={css.active}>
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink to="/single-journey" activeClassName={css.active}>
              Single Journey
            </NavLink>
          </li>
          <li>
            <NavLink to="/multiple-journeys" activeClassName={css.active}>
              Multiple Journeys
            </NavLink>
          </li>
          <li>
            <NavLink to="/journey-explorer" activeClassName={css.active}>
              Journey Explorer
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
