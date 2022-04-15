import PageList from '../PageList';
import { ReactComponent as Logo } from '../../../assets/images/moss-design-logo.svg';
import { useContext } from 'react';
import { HeaderContext } from '../../../store/header-context';
import styles from './SideDrawer.module.css';
import { Link } from 'react-router-dom';

const SideDrawer = () => {
  const headerCtx = useContext(HeaderContext);

  const crossClickHandler = () => {
    headerCtx.toggleSideDrawer();
  };

  return (
    <div className={styles['side-drawer']}>
      <div className="margin">
        <div className={styles.cross} onClick={crossClickHandler}>
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
        </div>
        <Link to="/">
          <div className={styles['logo-wrapper']}>
            <Logo />
          </div>
        </Link>
        <ul className={styles['pagelist-wrapper']}>
          <PageList />
        </ul>
      </div>
    </div>
  );
};

export default SideDrawer;
