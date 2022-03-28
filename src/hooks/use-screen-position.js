import { useState } from 'react';

const useScreenPosition = () => {
  const [screenPosition, setScreenPosition] = useState({
    xPosition: 0,
    yPosition: 0,
  });

  const scrollHandler = () => {
    const xPosition = window.scrollX;
    const yPosition = window.scrollY;

    setScreenPosition({ xPosition: xPosition, yPosition: yPosition });
  };

  //  Is this needed?
  // window.addEventListener('scroll', scrollHandler);
  
  return screenPosition;
};

export default useScreenPosition;
