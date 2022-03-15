import CloseButton from "../../CloseButton";
import Logo from "../../Logo";
import Directory from "../../Directory";

import styles from './VerticalNav.module.css';

const VerticalNav = () => {
    return (
        <nav className={styles.nav}>
            <CloseButton />
            <div className={styles['logo-wrapper']}>
                <Logo />
            </div>
            <Directory />
        </nav>
    );
};

export default VerticalNav;