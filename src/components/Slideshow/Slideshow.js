import { useState, useLayoutEffect } from 'react';
import BackgroundImage from './BackgroundImage';
import styles from './Slideshow.module.css';

const Slideshow = (props) => {
  const TIMER_DURATION = 9000;
  const [index, setIndex] = useState(0);
  
  let timer;
  
  const alternateIndex = () => {
    timer = setTimeout(() => {
      if (index === props.imgs.length - 1) {
        setIndex(0);
      } else {
        setIndex((prevState) => {
          return prevState + 1;
        });
      }
    }, [TIMER_DURATION]);
  };
  
  useLayoutEffect(() => {
    window.requestAnimationFrame(alternateIndex);

    return () => {
      clearTimeout(timer);
    };
  }, [index]);

  const menuClickHandler = (event) => {
    const orbId = event.target.id;
    
    clearTimeout(timer);
    
    if (orbId === 'orb1') {
      setIndex(0);
    } else {
      setIndex(1);
      
    }
  };
  
  let imgVisability;
  let orbClasses;

  if (index === 0) {
    imgVisability= [true, false];
    orbClasses = [`${styles.highlight} ${styles.orb}`, `${styles.orb}`]
  } else {
    imgVisability = [false, true];
    orbClasses = [`${styles.orb}`, `${styles.highlight} ${styles.orb}`]
  }
  
  return (
    <div className={styles.slideshow}>
      <div className={styles.window}>
        <BackgroundImage src={props.imgs[0].src} visability={imgVisability[0]} />
        <BackgroundImage src={props.imgs[1].src} visability={imgVisability[1]} />
      </div>
      <div className={styles.menu}>
        <div id="orb1" className={orbClasses[0]} onClick={menuClickHandler} />
        <div id="orb2" className={orbClasses[1]} onClick={menuClickHandler} />
      </div>
    </div>
  );
};

export default Slideshow;
