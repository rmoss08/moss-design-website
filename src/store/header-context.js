import React, { useState } from 'react';

export const HeaderContext = React.createContext({
  isNavTransparent: true,
  isNavSticky: false,
  isSideDrawerShown: false,
  addNavTransparency: () => {},
  removeNavTransparency: () => {},
  addNavSticky: () => {},
  removeNavSticky: () => {},
  toggleSideDrawer: () => {},
});

export const HeaderContextProvider = (props) => {
  const [isNavTransparent, setIsNavTransparent] = useState(true);
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [isSideDrawerShown, setIsSideDrawerShown] = useState(false);

  const addNavTransparency = () => {
    setIsNavTransparent(true);
  };

  const removeNavTransparency = () => {
    setIsNavTransparent(false);
  };

  const addNavSticky = () => {
    setIsNavSticky(true);
  };
  
  const removeNavSticky = () => {
    setIsNavSticky(false);
  };
  
  const toggleSideDrawer = () => {
    setIsSideDrawerShown((prevState) => {
      return !prevState;
    });
  };
  
  const contextValue = {
    isNavTransparent: isNavTransparent,
    isNavSticky: isNavSticky,
    isSideDrawerShown: isSideDrawerShown,
    addNavTransparency,
    removeNavTransparency,
    addNavSticky,
    removeNavSticky,
    toggleSideDrawer,
  };

  return (
    <HeaderContext.Provider value={contextValue}>
      {props.children}
    </HeaderContext.Provider>
  );
};
