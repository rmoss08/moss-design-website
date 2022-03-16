import BurgerMenu from './BurgerMenu';
import Logo from '../Logo';

import styles from './HorizontalNav.module.css';

const HorizontalNav = () => {    
    return (
    <div className={styles.nav}>
      <div className={styles['logo-wrapper']}>
        <Logo />
      </div>
      <BurgerMenu />
    </div>
  );
};

export default HorizontalNav;
