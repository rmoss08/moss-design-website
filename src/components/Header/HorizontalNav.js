import BurgerMenu from './BurgerMenu';
import {ReactComponent as Logo} from '../../assets/images/moss-design-logo.svg';
import { useContext, useEffect } from 'react';
import { NavContext } from '../../store/nav-context';

import styles from './HorizontalNav.module.css';
import useScreenPosition from '../../hooks/use-screen-position';

const HorizontalNav = () => {    
  const navCtx = useContext(NavContext);

  // If want to have an if statement where I can check the screen's Y position
  // then use that to add or remove classes to the nav
   
  return (
    <div className={`${styles.nav} ${styles.sticky}`}>
      <div className={styles['logo-wrapper']}>
        <Logo />
      </div>
      {!navCtx.isInitialPosition && <BurgerMenu />}
    </div>
  );
};

export default HorizontalNav;
