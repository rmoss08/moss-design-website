import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import styles from './PageList.module.css';

const PageList = (props) => {
  let aboutPageClasses;
  let projectPageClasses;
  let contactPageClasses;

  if (props.component === 'sidedrawer') {
    aboutPageClasses =
      projectPageClasses =
      contactPageClasses =
        `${styles.page} ${styles.sidedrawer}`;
  }

  if (props.component === 'footer') {
    aboutPageClasses =
      projectPageClasses = `${styles.page} ${styles.footer} ${styles.pipe}`;
    contactPageClasses = `${styles.page} ${styles.footer}`;
  }

  return (
    <Fragment>
      <Link to="/about">
        <li className={aboutPageClasses}>ABOUT</li>
      </Link>
      <Link to="/projects">
        <li className={projectPageClasses}>PROJECTS</li>
      </Link>
      <Link to="/contact">
        <li className={contactPageClasses}>CONTACT</li>
      </Link>
    </Fragment>
  );
};

export default PageList;
