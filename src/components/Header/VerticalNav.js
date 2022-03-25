import CloseButton from "./CloseButton";
import PageList from "../PageList";
import {ReactComponent as Logo} from '../../assets/images/moss-design-logo.svg';

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