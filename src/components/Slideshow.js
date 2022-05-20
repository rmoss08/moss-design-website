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
    alternateIndex();
    
    return () => {
      clearTimeout(timer);
    };
  }, [index]);


  let image1;
  let image2;
  let orb1Classes;
  let orb2Classes;

  const setBackgroundVisability = () => {
    if (index === 0) {
      image1 = true;
      image2 = false;
    } else {
      image1 = false;
      image2 = true;
    }
  };

  const setOrbClasses = () => {
    if (index === 0) {
      orb1Classes = `${styles.highlight} ${styles.orb}`;
      orb2Classes = `${styles.orb}`;
    } else {
      orb1Classes = `${styles.orb}`;
      orb2Classes = `${styles.highlight} ${styles.orb}`;
    }
  };
  

  const menuClickHandler = (event) => {
    const orbId = event.target.id;
    
    clearTimeout(timer);
    
    if (orbId === 'orb1') {
      setIndex(0);
    } else {
      setIndex(1);
      
    }
    setBackgroundVisability();
    setOrbClasses();
  };
  
  setBackgroundVisability();
  setOrbClasses();


  return (
    <div className={styles.slideshow}>
      <BackgroundImage src={props.imgs[0].src} visability={image1} />
      <BackgroundImage src={props.imgs[1].src} visability={image2} />
      <div className={styles.menu}>
        <div id="orb1" className={orb1Classes} onClick={menuClickHandler} />
        <div id="orb2" className={orb2Classes} onClick={menuClickHandler} />
      </div>
    </div>
  );
};

export default Slideshow;
