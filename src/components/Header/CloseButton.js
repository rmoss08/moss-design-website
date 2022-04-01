import { useContext } from 'react';
import { NavContext } from '../../store/nav-context';
import styles from './CloseButton.module.css';

const CloseButton = () => {
    const navCtx = useContext(NavContext);

    const crossClickHandler = () => {
        navCtx.toggleSideDrawer();
    }
    
    return (
        <div className={styles.cross} onClick={crossClickHandler}>
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
        </div>
    );
};

export default CloseButton;