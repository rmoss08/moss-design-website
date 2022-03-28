import React, { useState } from 'react';

export const NavContext = React.createContext({
  isInitialPosition: true,
  isVerticalNavShown: false,
  openVerticalNav: () => {},
  closeVerticalNav: () => {},
});

export const NavContextProvider = (props) => {
  const [isInitialPosition, setIsInitialPosition] = useState(true);
  const [isVerticalNavShown, setIsVerticalNavShown] = useState(false);

  const openVerticalNavHandler = () => {
    setIsVerticalNavShown(true);
  };

  const closeVerticalNavHandler = () => {
    setIsVerticalNavShown(false);
  };

  const contextValue = {
    isInitialPosition: isInitialPosition,
    isVerticalNavShown: isVerticalNavShown,
    openVerticalNav: openVerticalNavHandler,
    closeVerticalNav: closeVerticalNavHandler,
  };
  
  return (
    <NavContext.Provider value={contextValue}>
      {props.children}
    </NavContext.Provider>
  );
};
