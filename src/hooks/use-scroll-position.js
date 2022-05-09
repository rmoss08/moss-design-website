import { useState, useEffect } from 'react';

const getDeviceSize = () => {
  const viewportWidth = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  const viewportHeight = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );

  return { viewportWidth, viewportHeight };
};

const getScreenPosition = () => {
  return { x: window.scrollX, y: window.scrollY };
};


const useScreenPosition = () => {
  const [screenPosition, setScreenPosition] = useState({
    x: 0,
    y: 0,
  });

  const scrollHandler = () => {
    setTimeout(() => {
      setScreenPosition(getScreenPosition());
    }, 300);
  };

  const viewportWidth = getDeviceSize().viewportWidth;

  useEffect(() => {
    if (viewportWidth < 500) {
      window.addEventListener('touchmove', scrollHandler);
      console.log('add eventListener')
    } else {
      window.addEventListener('scroll', scrollHandler);
      console.log('add eventListener')
    }
    return () => {
      if (viewportWidth < 500) {
        window.removeEventListener('touchmove', scrollHandler);
        console.log('remove eventListener')
      } else {
        window.removeEventListener('scroll', scrollHandler);
        console.log('remove eventListener')
      }
    };
  }, [viewportWidth]);

  return screenPosition;
};
export default useScreenPosition;
