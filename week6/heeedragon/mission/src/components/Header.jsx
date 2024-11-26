import React from 'react';
import styles from "./Header.module.css";

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <img src="../../public/left-arrow.svg">
            </img>
        </div>
    )
};

export default Header;