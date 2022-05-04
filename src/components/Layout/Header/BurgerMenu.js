import { useDispatch, useSelector } from 'react-redux';
import { menuActions } from '../../../store/menu-slice';
import { navActions } from '../../../store/nav-slice';

import styles from './BurgerMenu.module.css';

const BurgerMenu = () => {
  const dispatch = useDispatch(menuActions);
  const isMenuVisible = useSelector(state => state.menu.isVisible)
  const isNavLocked = useSelector(state => state.nav.isLocked)
  const isNavTransPossible = useSelector(state => state.nav.isTransparencyPossible)
  
  let line1Classes;
  let line2Classes;
  let line3Classes;

  const burgerMenuClickHandler = () => {
    dispatch(menuActions.toggleMenu());
    if (!isNavLocked) {
      dispatch(navActions.lock());
    }
    if (isNavLocked && isNavTransPossible) {
      dispatch(navActions.unlock());
    }
    
  };

  if (isMenuVisible) {
    line1Classes = `${styles.close} ${styles.line1}`;
    line2Classes = `${styles.close} ${styles.line2}`;
    line3Classes = `${styles.close} ${styles.line3}`;
  } else {
    line1Classes = `${styles.line1}`;
    line2Classes = `${styles.line2}`;
    line3Classes = `${styles.line3}`;
  }

  return (
    <div className={styles['burger-menu']} onClick={burgerMenuClickHandler}>
      <div className={line1Classes}></div>
      <div className={line2Classes}></div>
      <div className={line3Classes}></div>
    </div>
  );
};

export default BurgerMenu;
