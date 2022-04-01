import styles from './Gallery.module.css';
import images from '../../images';

const Gallery = (props) => {
  const galleryImgs = props.images.map(image => (
    <img key={image.id} src={image.src} alt={image.alt} />
  ));

  return <div className={styles.gallery}>{galleryImgs}</div>;
};

export default Gallery;
