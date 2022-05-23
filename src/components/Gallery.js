import styles from './Gallery.module.css';
import useScrollPoisiton from '../hooks/use-scroll-position';

const Gallery = (props) => {
  const yPos = useScrollPoisiton().y;

  const galleryImgs = props.images.map((image) => (
    <img
      key={image.id}
      src={image.src}
      alt={image.alt}
    />
  ));

  const hiddenDistance = 300 + (550 * props.distance);
  let galleryClasses;
  
  if (yPos < hiddenDistance) {
    galleryClasses = `hidden greyscale ${styles.gallery}`;
  } else {
    galleryClasses = `visible greyscale ${styles.gallery}`;
  }

  return (
    <div id={props.id} className={galleryClasses}>
      {galleryImgs}
    </div>
  );
};

export default Gallery;
