import React from 'react';
import {Link} from "react-router-dom";
import {commonNavigation} from "../../utils/consts/HeaderNavigation.js";
import styles from "./Header.module.scss";

const Header = () => {
    return (
        <header className={styles.appHeader}>
            <div className={`${styles.appHeader_wrapper} container`}>
                <div>
                    Интерьер
                </div>
                <nav className={styles.appHeader_navigation}>
                    {commonNavigation.map((navigation, i)=>(
                        <Link to={navigation.path} key={navigation.title}>
                            {navigation.title}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;