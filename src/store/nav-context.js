import React, { useState } from 'react';

export const NavContext = React.createContext({
  isVerticalNavShown: false,
  openVerticalNav: () => {},
  closeVerticalNav: () => {},
});

export const NavContextProvider = (props) => {
  const [isVerticalNavShown, setIsVerticalNavShown] = useState(false);

  const openVerticalNavHandler = () => {
    setIsVerticalNavShown(true);
    console.log('openVerticalNavHandler:');
    console.log(isVerticalNavShown);
  };

  const closeVerticalNavHandler = () => {
    setIsVerticalNavShown(false);
  };

  const contextValue = {
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
