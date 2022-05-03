import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useScreenPosition from '../../../hooks/use-scroll-position';
import { HeaderContext } from '../../../store/header-context';
import { ReactComponent as Logo } from '../../../assets/images/moss-design-logo2.svg';
import BurgerMenu from './BurgerMenu';
import styles from './Nav.module.css';

const Nav = () => {
  const headerCtx = useContext(HeaderContext);
  
  const displayHeight = document.querySelector('html').clientHeight;
  const yPos = useScreenPosition().y;
  
  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      const navHeight = document.querySelector('nav').clientHeight;
      const scrollYLimit = displayHeight - navHeight;

      if (!headerCtx.isNavLocked) {
        if (yPos === 0) {
          headerCtx.addNavTransparency();
          headerCtx.removeNavSticky();
        }
      }
      if (yPos > 0 && yPos < scrollYLimit) {
        headerCtx.removeNavTransparency();
        headerCtx.addNavSticky();
      }
      if (yPos > scrollYLimit) {
        headerCtx.removeNavSticky();
      }
    }

    return () => {
      isMounted = false;
    };
  }, [yPos]);

  let navClasses;
  let logoClasses;

  if (headerCtx.isNavTransparent && !headerCtx.isNavSticky) {
    navClasses = `${styles.nav}`;
    logoClasses = `${styles.logo} ${styles['grey-fill']}`;
  }
  if (!headerCtx.isNavTransparent && headerCtx.isNavSticky) {
    navClasses = `${styles.nav} ${styles.sticky} ${styles['nav-background']}`;
    logoClasses = `${styles.logo} ${styles['black-fill']}`;
  }
  if (!headerCtx.isNavTransparent && !headerCtx.isNavSticky) {
    navClasses = `hidden ${styles.nav} ${styles.sticky}`;
    logoClasses = `${styles.logo} ${styles['black-fill']}`;
  }

  // console.log('isNavTransparent');
  // console.log(headerCtx.isNavTransparent);
  // console.log('isNavSticky');
  // console.log(headerCtx.isNavSticky);
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

export default Nav;
