import PageList from '../PageList';
import { ReactComponent as Logo } from '../../../assets/images/moss-design-logo.svg';
import { useContext } from 'react';
import { HeaderContext } from '../../../store/header-context';
import styles from './SideDrawer.module.css';
import { Link } from 'react-router-dom';

const SideDrawer = () => {
  const headerCtx = useContext(HeaderContext);
  const showSideDrawer = headerCtx.isSideDrawerShown;

  let sideDrawerClasses;

  if (showSideDrawer) {
    sideDrawerClasses = `${styles.show} ${styles.sidedrawer}`;
  } else {
    sideDrawerClasses = `${styles.sidedrawer}`;
  }

  return (
    <div className={sideDrawerClasses}>
      <ul className={styles['pagelist-wrapper']}>
        <PageList component="sidedrawer" />
      </ul>
    </div>
  );
};

export default SideDrawer;
