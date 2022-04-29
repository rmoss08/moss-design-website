import PageList from '../PageList';
import { ReactComponent as Logo } from '../../../assets/images/moss-design-logo.svg';
import { useContext } from 'react';
import { HeaderContext } from '../../../store/header-context';
import styles from './Menu.module.css';
import { Link } from 'react-router-dom';

const Menu = () => {
  const headerCtx = useContext(HeaderContext);
  const showMenu = headerCtx.isMenuShown;

  let menuClasses;

  if (showMenu) {
    menuClasses = `${styles.show} ${styles.menu}`;
  } else {
    menuClasses = `${styles.menu}`;
  }

  return (
    <div className={menuClasses}>
      <ul className={styles['pagelist-wrapper']}>
        <PageList component="menu" />
      </ul>
    </div>
  );
};

export default Menu;
