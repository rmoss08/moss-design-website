import styles from './BackgroundImage.module.css';

const BackgroundImage = (props) => {
  const background = {
    backgroundImage: `url(${props.src})`,
  };

  let backgroundClasses;

  if (props.visability) {
    backgroundClasses = `visible ${styles['background-image']} ${styles['span-animation']}`
  } else {
    backgroundClasses = `hidden ${styles['background-image']} ${styles['span-animation']}`
  }

  return (
    <div
      style={background}
      className={backgroundClasses}
    ></div>
  );
};

export default BackgroundImage;
