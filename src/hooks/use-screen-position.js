import { useState } from 'react';

const useScreenPosition = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  // const [isTouchmoving, setIsTouchmoving] = useState(false);

  const [screenPosition, setScreenPosition] = useState({
    xPosition: 0,
    yPosition: 0,
  });

  // window.addEventListener(
  //   'touchmove',
  //   (event) => {
  //     setIsTouchmoving(true);
  //     touchmoveHandler(event);
  //   },
  //   { passive: true }
  // );

  window.addEventListener('scroll', () => {
    setIsScrolling(true);
    scrollHandler();
  });

  // const touchmoveHandler = (event) => {
  //   setTimeout(() => {
  //     if (isTouchmoving) {
  //       setIsTouchmoving(false);

  //       const xPosition = event.touches[0].clientX;
  //       const yPosition = event.touches[0].clientY;

  //       setScreenPosition({
  //         xPosition: xPosition,
  //         yPosition: yPosition,
  //       });
  //     }
  //   }, 300);
  // };

  const scrollHandler = () => {
    setTimeout(() => {
      if (isScrolling) {
        setIsScrolling(false);
        setScreenPosition({
          xPosition: window.scrollX,
          yPosition: window.scrollY,
        });
      }
    }, 300);
  };

  return screenPosition;
};

export default useScreenPosition;
