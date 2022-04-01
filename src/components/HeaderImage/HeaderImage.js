// import Image from '../../assets/images/front-view-rendering.jpg';
import styles from './HeaderImage.module.css';

const HeaderImage = (props) => {
    return <div className={styles['header-image__wrapper']}>
        <img src={props.imageSrc} alt={props.imageAlt} />
    </div>
};

export default HeaderImage;