import React from "react";
import styles from "./NavItem.module.css"
import {NavLink} from "react-router-dom";

const NavItem = (props) => {
    return (
        <li>
            <NavLink to={props.link} activeClassName={styles.active}>
                {props.name}
            </NavLink>
        </li>
    )
}

export default NavItem;