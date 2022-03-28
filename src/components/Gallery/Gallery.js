import livingRoomImg from '../../assets/images/living-room.jpg';
import ensuiteImg from '../../assets/images/bathroom-ensuite.jpg';
import styles from './Gallery.module.css';
import images from '../../images';

const Gallery = () => {
    return (<div className={styles.gallery}> 
        <img src={images[1]} />
        <img src={images[0]} />
        <img src={images[0]} />
        <img src={images[1]} />
    </div>);
};

export default Gallery