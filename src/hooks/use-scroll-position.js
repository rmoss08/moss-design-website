import { useState, useEffect } from 'react';

const getScreenPosition = () => {
  return { x: window.scrollX, y: window.scrollY };
};

const useScreenPosition = () => {
  const [screenPosition, setScreenPosition] = useState({
    x: 0,
    y: 0,
  });

  let timer;

  useEffect(() => {
    const scrollHandler = () => {
      timer = setTimeout(() => {
        setScreenPosition(getScreenPosition());
      }, 300);
    };

    window.addEventListener('touchmove', scrollHandler);
    window.addEventListener('scroll', scrollHandler);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('touchmove', scrollHandler);
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return screenPosition;
};
export default useScreenPosition;
