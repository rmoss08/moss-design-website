import styles from './HeaderImage.module.css';

const HeaderImage = (props) => {
  return (
    <div className={styles['header-image']}>
      <img
        src={props.imageSrc}
        alt={props.imageAlt}
        className={styles['span-animation']}
      />
    </div>
  );
};

export default HeaderImage;
