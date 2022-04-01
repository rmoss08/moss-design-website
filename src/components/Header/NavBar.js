import BurgerMenu from './BurgerMenu';
import { ReactComponent as Logo } from '../../assets/images/moss-design-logo.svg';
import { useContext, useEffect, useState } from 'react';
import { NavContext } from '../../store/nav-context';

import styles from './NavBar.module.css';
import useScreenPosition from '../../hooks/use-screen-position';

const HorizontalNav = () => {
  const navCtx = useContext(NavContext);

  const yPosition = useScreenPosition().yPosition;

  const [navClasses, setNavClasses] = useState(`${styles.nav}`);
  const [logoClasses, setLogoClasses] = useState(
    `${styles['logo__wrapper']} ${styles['grey-logo']}`
  );

  useEffect(() => {
    let isScrolling = true;

    // console.log(yPosition);
    if (yPosition > 0) {
      setNavClasses(`${styles.nav} ${styles.sticky} ${styles.visible}`);
      setLogoClasses(`${styles['logo__wrapper']} ${styles['white-logo']}`);
    }
    if (yPosition === 0) {
      setNavClasses(`${styles.nav}`);
      setLogoClasses(`${styles['logo__wrapper']} ${styles['grey-logo']}`);
    }

    return () => {
      isScrolling = false;
    }
  }, [yPosition]);

  return (
    <div className={navClasses}>
      <div className={logoClasses}>
        <Logo />
      </div>
      {!navCtx.isNavTransparent && <BurgerMenu />}
    </div>
  );
};

export default HorizontalNav;
