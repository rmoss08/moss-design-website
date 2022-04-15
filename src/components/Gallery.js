import styles from './Gallery.module.css';

const Gallery = (props) => {
  const galleryImgs = props.images.map((image) => (
    <img
      key={image.id}
      className={styles['opacity']}
      src={image.src}
      alt={image.alt}
    />
  ));

  return <div className={styles.gallery}>{galleryImgs}</div>;
};

export default Gallery;
