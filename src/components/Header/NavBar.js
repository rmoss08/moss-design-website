import { useContext, useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useScreenPosition from '../../hooks/use-scroll-position';
import { NavContext } from '../../store/nav-context';
import { ReactComponent as Logo } from '../../assets/images/moss-design-logo.svg';
import BurgerMenu from './BurgerMenu';

import styles from './NavBar.module.css';

const NavBar = () => {
  const navCtx = useContext(NavContext);

  const yPos = useScreenPosition().y;
  useLayoutEffect(() => {
    let isScrolling = true;

    if (yPos > 0 && yPos < 667) {
      navCtx.removeTransparency();
      navCtx.addSticky();
    }
    if (yPos > 667) {
      navCtx.removeSticky();
    }

    return () => {
      isScrolling = false;
    };
  }, [yPos]);

  let navClasses;
  let logoClasses;

  if (navCtx.isTransparent && !navCtx.isSticky) {
    navClasses = `${styles.nav}`;
    logoClasses = `${styles['logo__wrapper']} ${styles['grey-logo']}`;
  }
  if (!navCtx.isTransparent && navCtx.isSticky) {
    navClasses = `${styles.nav} ${styles.sticky} ${styles.visible}`;
    logoClasses = `${styles['logo__wrapper']} ${styles['white-logo']}`;
  }
  if (!navCtx.isTransparent && !navCtx.isSticky) {
    navClasses = `${styles.nav} ${styles.visible}`;
    logoClasses = `${styles['logo__wrapper']} ${styles['white-logo']}`;
  }

  return (
    <nav className={navClasses}>
      <Link to="/">
        <div className={logoClasses}>
          <Logo />
        </div>
      </Link>
      {!navCtx.isTransparent && <BurgerMenu />}
    </nav>
  );
};

export default NavBar;
