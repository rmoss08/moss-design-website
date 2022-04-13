import { useContext, useState } from 'react';
import { HeaderContext} from '../../store/header-context'

import styles from './BurgerMenu.module.css';

const BurgerMenu = (props) => {
  const [line1Classes, setLine1Classes] = useState(`${styles.line1}`);  
  const [line2Classes, setLine2Classes] = useState(`${styles.line2}`);  
  const [line3Classes, setLine3Classes] = useState(`${styles.line3}`);

  const headerCtx = useContext(HeaderContext);

  const burgerMenuClickHandler = () => {
    headerCtx.toggleSideDrawer();
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
