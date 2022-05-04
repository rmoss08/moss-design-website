import PageList from '../PageList';
import styles from './Menu.module.css';
import { useSelector } from 'react-redux';

const Menu = () => {
  const isMenuVisible = useSelector((state) => state.menu.isVisible);

  let menuClasses;

  if (isMenuVisible) {
    menuClasses = `${styles.show} ${styles.menu}`;
  } else {
    menuClasses = `${styles.menu}`;
  }

  return (
    <div className={menuClasses}>
      <ul className={styles['pagelist-wrapper']}>
        <PageList component="menu" />
      </ul>
    </div>
  );
};

export default Menu;
