import React from "react";
import styles from "./Navbar.module.css"
import NavItem from "./NavItem/NavItem";



const Navbar = () => {
    return(
        <nav className={styles.navbar}>
            <ul>
                <NavItem name='Profile' link='/profile'/>
                <NavItem name='Messages' link='/messages'/>
            </ul>
        </nav>
    )
}

export default Navbar;