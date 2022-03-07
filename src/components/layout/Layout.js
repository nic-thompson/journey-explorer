import { PinDropSharp } from "@mui/icons-material";
import { Fragment } from "react";
import css from "./css/Layout.module.css";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
    return <Fragment>
        <MainNavigation />
        <main className={css.main}>
            {props.children}
        </main>
    </Fragment>
};

export default Layout;