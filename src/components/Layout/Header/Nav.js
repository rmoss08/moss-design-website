import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useScreenPosition from '../../../hooks/use-scroll-position';
import { HeaderContext } from '../../../store/header-context';
import { ReactComponent as Logo } from '../../../assets/images/moss-design-logo2.svg';
import BurgerMenu from './BurgerMenu';
import styles from './Nav.module.css';
import { navActions } from '../../../store/nav-slice';
import { useDispatch, useSelector } from 'react-redux';

const Nav = () => {
  const dispatch = useDispatch();
  const isTransparent = useSelector((state) => state.nav.isTransparent);
  const isSticky = useSelector((state) => state.nav.isSticky);

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
          dispatch(navActions.addTransparency());
          dispatch(navActions.removeSticky());
        }
      }
      if (yPos > 0 && yPos < scrollYLimit) {
        dispatch(navActions.removeTransparency());
        dispatch(navActions.addSticky());
      }
      if (yPos > scrollYLimit) {
        dispatch(navActions.removeSticky());
      }
    }

    return () => {
      isMounted = false;
    };
  }, [yPos]);

  let navClasses;
  let logoClasses;

  if (isTransparent && !isSticky) {
    navClasses = `${styles.nav}`;
    logoClasses = `${styles.logo} ${styles['grey-fill']}`;
  }
  if (!isTransparent && isSticky) {
    navClasses = `${styles.nav} ${styles.sticky} ${styles['nav-background']}`;
    logoClasses = `${styles.logo} ${styles['black-fill']}`;
  }
  if (!isTransparent && !isSticky) {
    navClasses = `hidden ${styles.nav} ${styles.sticky}`;
    logoClasses = `${styles.logo} ${styles['black-fill']}`;
  }

  return (
    <nav className={navClasses}>
      <Link to="/">
        <div className={logoClasses}>
          <Logo />
        </div>
      </Link>
      {!isTransparent && <BurgerMenu />}
    </nav>
  );
};

export default Nav;
