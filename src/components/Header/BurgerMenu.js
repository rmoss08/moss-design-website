import { useContext, useState } from 'react';
import {NavContext} from '../../store/nav-context'

import styles from './BurgerMenu.module.css';

const BurgerMenu = (props) => {
  const [line1Classes, setLine1Classes] = useState(`${styles.line1}`);  
  const [line2Classes, setLine2Classes] = useState(`${styles.line2}`);  
  const [line3Classes, setLine3Classes] = useState(`${styles.line3}`);

  const navCtx = useContext(NavContext);

  const burgerMenuClickHandler = () => {
    navCtx.openVerticalNav();
    // setLine1Classes(`${styles.line1} ${styles.animation}`);
    // setLine2Classes(`${styles.line2} ${styles.animation}`);
    // setLine3Classes(`${styles.line3} ${styles.animation}`);
  };
  
  return (
    <div className={styles['burger-menu']} onClick={burgerMenuClickHandler}>
      <div className={line1Classes}></div>
      <div className={line2Classes}></div>
      <div className={line3Classes}></div>
    </div>
  );
};

export default BurgerMenu;
