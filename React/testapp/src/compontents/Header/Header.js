import React from 'react';

import logo from '../../logo.svg'

import styles from "./header.module.scss";

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.search}>
                <img className={styles.logo} src={logo} alt="Logo" />
                <input type="" placeholder="search"></input>
            </div>
            <div > 
                <ul className={styles.list}>
                    <li>
                        <a href="#">First link</a>
                    </li>
                    <li>
                        <a href="#">Second link</a>
                    </li>
                    <li>
                        <a href="#">Third link</a>
                    </li>
                </ul>
            </div>
        </div> // sau un div
    );
}

export default Header;