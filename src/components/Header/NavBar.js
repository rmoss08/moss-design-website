import { useContext, useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useScreenPosition from '../../hooks/use-scroll-position';
import { HeaderContext } from '../../store/header-context';
import { ReactComponent as Logo } from '../../assets/images/moss-design-logo.svg';
import BurgerMenu from './BurgerMenu';

import styles from './NavBar.module.css';

const NavBar = () => {
  const headerCtx = useContext(HeaderContext);

  const displayHeight = document.querySelector('html').clientHeight;
  const yPos = useScreenPosition().y;

  useLayoutEffect(() => {
    let isScrolling = true;
    
    const navHeight = document.querySelector('nav').clientHeight;
    const scrollLimit = displayHeight - navHeight;

    if (yPos === 0) {
      headerCtx.addNavTransparency();
      headerCtx.removeNavSticky();
    }
    if (yPos > 0 && yPos < scrollLimit) {
      headerCtx.removeNavTransparency();
      headerCtx.addNavSticky();
    }
    if (yPos > scrollLimit) {
      headerCtx.removeNavSticky();
    }

    return () => {
      isScrolling = false;
    };
  }, [yPos]);

  let navClasses;
  let logoClasses;

  if (headerCtx.isNavTransparent && !headerCtx.isNavSticky) {
    navClasses = `${styles.nav}`;
    logoClasses = `${styles['logo__wrapper']} ${styles['grey-logo']}`;
  }
  if (!headerCtx.isNavTransparent && headerCtx.isNavSticky) {
    navClasses = `${styles.nav} ${styles.sticky} ${styles.visible}`;
    logoClasses = `${styles['logo__wrapper']} ${styles['white-logo']}`;
  }
  if (!headerCtx.isNavTransparent && !headerCtx.isNavSticky) {
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
      {!headerCtx.isNavTransparent && <BurgerMenu />}
    </nav>
  );
};

export default NavBar;
