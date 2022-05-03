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

  const scrollHandler = (eventType) => {
    setTimeout(() => {
      setScreenPosition(getScreenPosition());
    }, 300);
  };

  const viewportWidth = getDeviceSize().viewportWidth;

  useEffect(() => {
    if (viewportWidth < 500) {
      window.addEventListener('touchmove', scrollHandler);
    } else {
      window.addEventListener('scroll', scrollHandler);
    }
    return () => {
      if (viewportWidth < 500) {
        window.removeEventListener('touchmove', scrollHandler);
      } else {
        window.removeEventListener('scroll', scrollHandler);
      }
    };
  }, [viewportWidth]);

  return screenPosition;
};
export default useScreenPosition;
