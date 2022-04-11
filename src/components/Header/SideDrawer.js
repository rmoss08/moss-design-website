import CloseButton from "./CloseButton";
import PageList from "../PageList/PageList";
import {ReactComponent as Logo} from '../../assets/images/moss-design-logo.svg';

import styles from './SideDrawer.module.css';
import { Link } from "react-router-dom";

const SideDrawer = () => {
    return (
        <nav className={styles.nav}>
            <CloseButton />
            <Link to='/'>
                <div className={styles['logo-wrapper']}>
                    <Logo />
                </div>
            </Link>
            <ul className={styles['pagelist-wrapper']}>
                <PageList />
            </ul>
        </nav>
    );
};

export default SideDrawer;