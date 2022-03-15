import { Fragment } from 'react';
import {ReactComponent as MossDesignSVG} from '../assets/images/moss-design-logo.svg';

import styles from './Logo.module.css';

const Logo = () => {
    return (
        <Fragment>
            <MossDesignSVG className={styles.logo} />
        </Fragment>
    );
};

export default Logo;