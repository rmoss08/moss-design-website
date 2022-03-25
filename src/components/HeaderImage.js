import Image from '../assets/images/front-view-rendering.jpg';
import styles from './HeaderImage.module.css';

const HeaderImage = () => {
    return <div className={styles['image__wrapper']}>
        <img src={Image} />
    </div>
};

export default HeaderImage;