import { Fragment } from 'react';

import styles from './PageList.module.css';

const PageList = () => {
    return (
        <Fragment>
            <li className={styles.page}>ABOUT</li>
            <li className={styles.page}>PROJECTS</li>
            <li className={styles.page}>CONTACT</li>
        </Fragment>
    );
};

export default PageList;