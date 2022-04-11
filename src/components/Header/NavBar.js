import BurgerMenu from './BurgerMenu';
import { ReactComponent as Logo } from '../../assets/images/moss-design-logo.svg';
import { useContext, useLayoutEffect, useState } from 'react';
import { NavContext } from '../../store/nav-context';
import useScreenPosition from '../../hooks/use-scroll-position';

import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const navCtx = useContext(NavContext);

  const yPos = useScreenPosition().y;

  const [navClasses, setNavClasses] = useState(`${styles.nav}`);
  const [logoClasses, setLogoClasses] = useState(
    `${styles['logo__wrapper']} ${styles['grey-logo']}`
  );

  useLayoutEffect(() => {
    let isScrolling = true;

    if (yPos > 0) {
      setNavClasses(`${styles.nav} ${styles.sticky} ${styles.visible}`);
      setLogoClasses(`${styles['logo__wrapper']} ${styles['white-logo']}`);
    }
    if (yPos === 0) {
      setNavClasses(`${styles.nav}`);
      setLogoClasses(`${styles['logo__wrapper']} ${styles['grey-logo']}`);
    }

    return () => {
      isScrolling = false;
    };
  }, [yPos]);

  return (
    <div className={navClasses}>
      <Link to='/'>
        <div className={logoClasses}>
          <Logo />
        </div>
      </Link>
      {!navCtx.isNavTransparent && <BurgerMenu />}
    </div>
  );
};

export default NavBar;
