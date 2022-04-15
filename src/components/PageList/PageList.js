import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import styles from './PageList.module.css';

const PageList = () => {
    return (
        <Fragment>
            <Link to='/about'>
                <li className={styles.page}>ABOUT</li>
            </Link>
            <Link to='/projects'>
                <li className={styles.page}>PROJECTS</li>
            </Link>
            <Link to='/contact'>
                <li className={`${styles.page} ${styles.page}`}>CONTACT</li>
            </Link>
        </Fragment>
    );
};

export default PageList;