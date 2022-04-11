import PageList from "../PageList/PageList";
import {ReactComponent as Logo} from '../../assets/images/moss-design-logo.svg';

import styles from './Footer.module.css';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ul className={styles['pagelist-wrapper']}>
                <PageList />
            </ul>
            <Link to='/'>
                <div className={styles['logo-wrapper']}>
                    <Logo />
                </div>
            </Link>
            <p>©2022 Moss Design. All rights reserved. </p>
            <p>Website created by Robert J. Moss</p>
        </footer>
    );
};

export default Footer;