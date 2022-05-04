import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useScreenPosition from '../../../hooks/use-scroll-position';
import { ReactComponent as Logo } from '../../../assets/images/moss-design-logo2.svg';
import BurgerMenu from './BurgerMenu';
import styles from './Nav.module.css';
import { navActions } from '../../../store/nav-slice';
import { useDispatch, useSelector } from 'react-redux';

const Nav = () => {
  const dispatch = useDispatch();
  // dispatch(navActions.init());
  
  const isNavTransparent = useSelector((state) => state.nav.isTransparent);
  const isNavVisible = useSelector((state) => state.nav.isVisible);
  const isNavLocked = useSelector((state) => state.nav.isLocked);
  const isMenuVisible = useSelector((state) => state.menu.isVisible);

  const displayHeight = document.querySelector('html').clientHeight;
  const yPos = useScreenPosition().y;

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      const navHeight = document.querySelector('nav').clientHeight;
      const scrollYLimit = displayHeight - navHeight;

      if (!isNavLocked) {
        if (yPos === 0 && !isNavTransparent) {
          dispatch(navActions.addTransparency());
        }

        if (yPos > 0 && yPos < scrollYLimit) {
          if (isNavTransparent) {
            dispatch(navActions.removeTransparency());
          }
          if (!isNavVisible) {
            dispatch(navActions.showNav());
          }
        }
        if (yPos > scrollYLimit) {
          dispatch(navActions.hideNav());
        }
      }
    }

    return () => {
      isMounted = false;
    };
  }, [yPos]);

  let navClasses;
  let logoClasses;

  if (isNavTransparent && isNavVisible) {
    navClasses = `${styles.nav}`;
    logoClasses = `${styles.logo} ${styles['grey-fill']}`;
  }
  if (!isNavTransparent && isNavVisible) {
    navClasses = `${styles.nav} ${styles.sticky} ${styles['nav-background']}`;
    logoClasses = `${styles.logo} ${styles['black-fill']}`;
  }
  if (!isNavTransparent && !isNavVisible) {
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
      {!isNavTransparent && <BurgerMenu />}
    </nav>
  );
};

export default Nav;
