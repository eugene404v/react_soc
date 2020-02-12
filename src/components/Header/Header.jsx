import React from "react";
import styles from './Header.module.css';

const Header = () => {
    return(
        <div className={styles.header}>
            <img src="logo512.png" alt="logo"/>
        </div>
    )
}

export default Header;