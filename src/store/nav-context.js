import React, { useState } from 'react';

export const NavContext = React.createContext({
  isNavTransparent: true,
  isSideDrawerShown: false,
  toggleNavTransparency: () => {},
  toggleSideDrawer: () => {},
});

export const NavContextProvider = (props) => {
  const [isNavTransparent, setIsNavTransparent] = useState(true);
  const [isSideDrawerShown, setIsSideDrawerShown] = useState(false);

  
  const toggleNavTransparency = () => {
    setIsNavTransparent(prevState => {
      return !prevState;
    })
  };

  const toggleSideDrawerHandler = () => {
    setIsSideDrawerShown(prevState => {
      return !prevState;
    });
  };
  
  const contextValue = {
    isNavTransparent: isNavTransparent,
    isSideDrawerShown: isSideDrawerShown,
    toggleNavTransparency: toggleNavTransparency,
    toggleSideDrawer: toggleSideDrawerHandler,
  };
  
  return (
    <NavContext.Provider value={contextValue}>
      {props.children}
    </NavContext.Provider>
  );
};
