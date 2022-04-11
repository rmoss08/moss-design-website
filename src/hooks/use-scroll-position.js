import { useState } from 'react';

const getScreenPosition = (event) => {
  if (event) {
    const touchList = event.touches[0];
    return { x: touchList.clientX, y: touchList.clientY };
  } else {
    return { x: window.scrollX, y: window.scrollY };
  }
};

const useScreenPosition = () => {
  // const [isScrolling, setIsScrolling] = useState(false);
  const [screenPosition, setScreenPosition] = useState({
    x: 0,
    y: 0,
  });

  const scrollHandler = (event) => {
    setTimeout(() => {
      setScreenPosition(getScreenPosition(event));
    }, 300);
  };

  window.addEventListener('scroll', scrollHandler);
  window.addEventListener('touchmove', scrollHandler);

  return screenPosition;
};
export default useScreenPosition;
