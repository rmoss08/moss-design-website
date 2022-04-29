import { useContext, useState } from 'react';
import { HeaderContext } from '../../../store/header-context';

import styles from './BurgerMenu.module.css';

const BurgerMenu = (props) => {
  let line1Classes;
  let line2Classes;
  let line3Classes;

  const headerCtx = useContext(HeaderContext);

  const burgerMenuClickHandler = () => {
    headerCtx.toggleSideDrawer();
  };

  if (headerCtx.isSideDrawerShown) {
    line1Classes = `${styles.close} ${styles.line1}`;
    line2Classes = `${styles.close} ${styles.line2}`;
    line3Classes = `${styles.close} ${styles.line3}`;
  } else {
    line1Classes = `${styles.line1}`;
    line2Classes = `${styles.line2}`;
    line3Classes = `${styles.line3}`;
  }

  return (
    <div className={styles['burger-menu']} onClick={burgerMenuClickHandler}>
      <div className={line1Classes}></div>
      <div className={line2Classes}></div>
      <div className={line3Classes}></div>
    </div>
  );
};

export default BurgerMenu;
