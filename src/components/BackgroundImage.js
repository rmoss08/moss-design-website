import styles from './BackgroundImage.module.css';

const BackgroundImage = (props) => {
  const background = {
    backgroundImage: `url(${props.src})`,
  };
  return (
    <div className={styles['background-container']}>
      <div
        style={background}
        className={`${styles['background-image']} ${styles['span-animation']}`}
      ></div>
    </div>
  );
};

export default BackgroundImage;
