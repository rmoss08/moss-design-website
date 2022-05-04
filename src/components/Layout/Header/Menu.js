import PageList from '../PageList';
import styles from './Menu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { menuActions } from '../../../store/menu-slice';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Menu = () => {
  const isMenuVisible = useSelector((state) => state.menu.isVisible);

  let menuClasses;

  if (isMenuVisible) {
    menuClasses = `${styles.show} ${styles.menu}`;
  } else {
    menuClasses = `${styles.menu}`;
  }

  const pathname = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(menuActions.hideMenu())
  }, [pathname])

  return (
    <div className={menuClasses}>
      <ul className={styles['pagelist-wrapper']}>
        <PageList component="menu" />
      </ul>
    </div>
  );
};

export default Menu;
