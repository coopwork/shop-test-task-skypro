import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {createHeaderNavigation} from "../../utils/consts/HeaderNavigation.jsx";
import styles from "./Header.module.scss";
import {Badge} from "@mui/material";
import {useDebounce} from "../../hooks/UseDebounce.jsx";

const Header = () => {
    const [viewport, setViewport] = useState(window.innerWidth);
    const debouncedValue = useDebounce(viewport, 150);

    useEffect(() => {
        window.addEventListener('resize',(e)=>{
            setViewport(window.innerWidth)
        })
    }, [debouncedValue]);

    return (
        <header className={styles.app_header}>
            <div className={`${styles.appHeader_wrapper} container`}>
                <div className={styles.header_logo}>
                    <b>Интерьер.</b>
                </div>
                <nav className={styles.appHeader_navigation}>
                    {createHeaderNavigation().map((navigation, i)=>(
                        <Badge badgeContent={navigation.alerts} color="secondary" key={navigation.title}>
                            <Link to={navigation.path}>
                                {viewport < 650 ? <>{navigation.icon}</> : <>{navigation.title}</>}
                            </Link>
                        </Badge>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;