import CloseButton from "./CloseButton";
import Logo from "../Logo";
import PageList from "../PageList";

import styles from './VerticalNav.module.css';

const VerticalNav = () => {
    return (
        <nav className={styles.nav}>
            <CloseButton />
            <div className={styles['logo-wrapper']}>
                <Logo />
            </div>
            <ul className={styles['pagelist-wrapper']}>
                <PageList />
            </ul>
        </nav>
    );
};

export default VerticalNav;