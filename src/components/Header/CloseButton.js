import { useContext } from 'react';
import { HeaderContext } from '../../store/header-context';
import styles from './CloseButton.module.css';

const CloseButton = () => {
    const headerCtx = useContext(HeaderContext);

    const crossClickHandler = () => {
        headerCtx.toggleSideDrawer();
    }
    
    return (
        <div className={styles.cross} onClick={crossClickHandler}>
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
        </div>
    );
};

export default CloseButton;