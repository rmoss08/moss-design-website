import PageList from "../PageList";
import Logo from "../Logo";

import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ul className={styles['pagelist-wrapper']}>
                <PageList />
            </ul>
            <div className={styles['logo-wrapper']}>
                <Logo />
            </div>
            <p>©2022 Moss Design. All rights reserved. </p>
            <p>Website created by Robert J. Moss</p>
        </footer>
    );
};

export default Footer;